import React, { useContext, useEffect, useState } from "react";
import styles from "./HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon";
import AuthContext from "../../context/auth-context";

const HeaderCartButton = () => {
  const ctx = useContext(AuthContext);
  const [btnIsHighighted, setBtnIsHighlighted] = useState(false);

  useEffect(() => {
    if (ctx.orders.length === 0) {
      return;
    }

    setBtnIsHighlighted(true);

    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [ctx.orders]);

  return (
    <button
      onClick={ctx.onModalOpen}
      className={`${styles.button} ${btnIsHighighted && styles.bump}`}
    >
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={styles.badge}>
        {ctx.orders.reduce((sum, order) => sum + order.number, 0)}
      </span>
    </button>
  );
};

export default HeaderCartButton;
