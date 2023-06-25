import React, { useContext } from "react";
import styles from "./CartItem.module.css";
import AuthContext from "../../context/auth-context";

const CartItem = (props) => {
  const ctx = useContext(AuthContext);
  const removeOrderHandler = () => {
    ctx.onRemoveOrder(props.name, props.number);
  };

  const addOrderHandler = () => {
    ctx.onAddOrder(props.name, props.price, 1);
  };

  return (
    <li className={styles["cart-item"]}>
      <div>
        <h2>{props.name}</h2>
        <div className={styles.summary}>
          <span className={styles.price}>${props.price}</span>
          <span className={styles.amount}>x{props.number}</span>
        </div>
      </div>
      <div className={styles.actions}>
        <button
          type="button"
          onClick={removeOrderHandler}
          className={styles.button}
        >
          -
        </button>
        <button
          type="button"
          onClick={addOrderHandler}
          className={styles.button}
        >
          +
        </button>
      </div>
    </li>
  );
};

export default CartItem;
