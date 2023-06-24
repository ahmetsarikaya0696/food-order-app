import React, { useContext } from "react";
import styles from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
import AuthContext from "../../../context/auth-context";

const MealItem = (props) => {
  const ctx = useContext(AuthContext);
  const addOrderHandler = (number) => {
    ctx.onAddOrder(props.name, props.price, number);
  };

  return (
    <li className={styles.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={styles.description}>{props.description}</div>
        <div className={styles.price}>{props.price} $</div>
      </div>
      <MealItemForm onAddOrder={addOrderHandler} />
    </li>
  );
};

export default MealItem;
