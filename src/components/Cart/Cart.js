import React, { useContext } from "react";
import styles from "./Cart.module.css";
import CartItem from "./CartItem";
import AuthContext from "../../context/auth-context";

const Cart = () => {
  const ctx = useContext(AuthContext);

  const submitOrderHandler = (event) => {
    event.preventDefault();
    console.log("Order has been given successfully!");
  };

  return (
    <form onSubmit={submitOrderHandler}>
      <ul className={styles["cart-items"]}>
        {ctx.orders.map((order) => (
          <CartItem
            key={order.name}
            name={order.name}
            price={(order.number * order.price).toFixed(2)}
            number={order.number}
          />
        ))}
      </ul>
      <div>
        <div className={styles.total}>
          <div>Total Amount</div>
          <div>
            $
            {ctx.orders
              .reduce((sum, order) => sum + order.price * order.number, 0)
              .toFixed(2)}
          </div>
        </div>
        <div className={styles.actions}>
          <button
            type="button"
            onClick={ctx.onModalClose}
            className={styles["button--alt"]}
          >
            Close
          </button>
          <button type="submiy" className={styles.button}>
            Order
          </button>
        </div>
      </div>
    </form>
  );
};

export default Cart;
