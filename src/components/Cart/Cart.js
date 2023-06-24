import React, { useContext } from "react";
import styles from "./Cart.module.css";
import { Fragment } from "react";
import CartItem from "./CartItem";
import AuthContext from "../../context/auth-context";

const Cart = () => {
  const ctx = useContext(AuthContext);

  return (
    <Fragment>
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
            {ctx.orders.reduce(
              (sum, order) => sum + order.price * order.number,
              0
            )}
          </div>
        </div>
        <div className={styles.actions}>
          <button onClick={ctx.onModalClose} className={styles["button--alt"]}>
            Close
          </button>
          <button className={styles.button}>Order</button>
        </div>
      </div>
    </Fragment>
  );
};

export default Cart;
