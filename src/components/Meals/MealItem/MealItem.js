import React from "react";
import styles from "./MealItem.module.css";
import Card from "../../UI/Card/Card";
import MealItemForm from "./MealItemForm";

const MealItem = () => {
  return (
    <Card className={styles.meal}>
      <div>
        <h3>H3 Element</h3>
        <div className={styles.description}>Description</div>
        <div className={styles.price}>22.99</div>
      </div>
      <MealItemForm />
    </Card>
  );
};

export default MealItem;
