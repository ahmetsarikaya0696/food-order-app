import React, { useContext } from "react";
import styles from "./Cart.module.css";
import CartItem from "./CartItem";
import Modal from "../UI/Modal/Modal";
import CartContext from "../../store/cart-context";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const totalAmount = `$ ${cartCtx.totalAmount.toFixed(2)}`;

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

  return (
    <Modal onHideCart={props.onHideCart}>
      <form onSubmit={submititemHandler}>
        <ul className={styles["cart-items"]}>{cartItems}</ul>
        <div>
          <div className={styles.total}>
            <span>Total Amount</span>
            <span>{totalAmount}</span>
          </div>
          <div className={styles.actions}>
            <button
              type="button"
              onClick={props.onHideCart}
              className={styles["button--alt"]}
            >
              Close
            </button>
            {hasItems && (
              <button type="submit" className={styles.button}>
                Order
              </button>
            )}
          </div>
        </div>
      </form>
    </Modal>
  );
};

export default Cart;
