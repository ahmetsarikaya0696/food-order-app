import React, { useContext } from "react";
import styles from "./HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon";
import AuthContext from "../../context/auth-context";

const HeaderCartButton = () => {
  const ctx = useContext(AuthContext);

  return (
    <button onClick={ctx.onModalOpen} className={styles.button}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={styles.badge}>0</span>
    </button>
  );
};

export default HeaderCartButton;
