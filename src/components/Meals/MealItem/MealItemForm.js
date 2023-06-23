import React from "react";
import styles from "./MealItemForm.module.css";
import Input from "../../UI/Input/Input";

const MealItemForm = () => {
  return (
    <form className={styles.form}>
      <Input id="id" type="number" value="1" label="Amount" />
      <button>+Add</button>
    </form>
  );
};

export default MealItemForm;
