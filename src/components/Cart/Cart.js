import React, { useContext, useState } from "react";
import styles from "./Cart.module.css";
import CartItem from "./CartItem";
import Modal from "../UI/Modal/Modal";
import CartContext from "../../store/cart-context";
import Checkout from "./Checkout";
import useHttp from "../../hooks/use-http";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const totalAmount = `$ ${cartCtx.totalAmount.toFixed(2)}`;
  const [isCheckout, setIsCheckout] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const {
    isLoading: isSubmitting,
    error,
    sendRequest: createOrder,
  } = useHttp();

  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const cartItems = cartCtx.items.map((item) => (
    <CartItem
      key={item.id}
      name={item.name}
      amount={item.amount}
      price={item.price}
      onRemove={cartItemRemoveHandler.bind(null, item.id)}
      onAdd={cartItemAddHandler.bind(null, item)}
    />
  ));

  const submitItemHandler = (event) => {
    event.preventDefault();
    console.log("item has been given successfully!");
  };

  const orderHandler = () => {
    setIsCheckout(true);
  };

  const submitOrderHandler = (data) => {
    const notifyAndClearCart = () => {
      toast("An order has been received!");
      cartCtx.clearCart();
      setIsCompleted(true);
    };

    createOrder(
      {
        url: "https://react-http-6f76f-default-rtdb.europe-west1.firebasedatabase.app/orders.json",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: { userData: data, orderedItems: cartCtx.items },
      },
      notifyAndClearCart
    );
  };

  const content = (
    <React.Fragment>
      <form onSubmit={submitItemHandler}>
        <ul className={styles["cart-items"]}>{cartItems}</ul>
        <div>
          <div className={styles.total}>
            <span>Total Amount</span>
            <span>{totalAmount}</span>
          </div>
          {!isCheckout && (
            <div className={styles.actions}>
              <button
                type="button"
                onClick={props.onHideCart}
                className={styles["button--alt"]}
              >
                Close
              </button>
              {hasItems && (
                <button
                  type="submit"
                  className={styles.button}
                  onClick={orderHandler}
                >
                  Order
                </button>
              )}
            </div>
          )}
        </div>
      </form>
      {isCheckout && (
        <Checkout
          onConfirm={submitOrderHandler}
          onOrderCancel={props.onHideCart}
        />
      )}
      <ToastContainer position="bottom-right" autoClose={2500} />
    </React.Fragment>
  );

  const isSubmittingContent = <p>Submitting order...</p>;

  const errorFoundContent = <h3>Error : {error}</h3>;

  return (
    <Modal onHideCart={props.onHideCart}>
      {isSubmitting && !error && isSubmittingContent}
      {error && errorFoundContent}
      {!isSubmitting && !error && !isCompleted && content}
      {!isSubmitting && !error && isCompleted && <h3>Your order has been recived!</h3>}
    </Modal>
  );
};

export default Cart;
