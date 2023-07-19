import React, { useContext, useState } from "react";
import styles from "./Cart.module.css";
import CartItem from "./CartItem";
import Modal from "../UI/Modal/Modal";
import CartContext from "../../store/cart-context";
import Checkout from "./Checkout";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const totalAmount = `$ ${cartCtx.totalAmount.toFixed(2)}`;
  const [isCheckout, setIsCheckout] = useState(false);

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

  const submititemHandler = (event) => {
    event.preventDefault();
    console.log("item has been given successfully!");
  };

  const orderHandler = () => {
    setIsCheckout(true);
  };

  return (
    <Modal onHideCart={props.onHideCart}>
      <form onSubmit={submititemHandler}>
        <ul className={styles["cart-items"]}>{cartItems}</ul>
        <div>
          <div className={styles.total}>
            <span>Total Amount</span>
            <span>{totalAmount}</span>
          </div>
          {!isCheckout && <div className={styles.actions}>
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
          </div>}
        </div>
      </form>

      {isCheckout && <Checkout onOrderCancel={props.onHideCart} />}
    </Modal>
  );
};

export default Cart;
