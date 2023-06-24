import React, { useState } from "react";
import styles from "./MealItemForm.module.css";
import Input from "../../UI/Input/Input";

const MealItemForm = (props) => {
  const [enteredNumber, setEnteredNumber] = useState(1);
  const changeHandler = (inputValue) => {
    setEnteredNumber(+inputValue);
  };

  return (
    <form className={styles.form}>
      <Input
        type="number"
        value={enteredNumber}
        label="Amount"
        onChange={changeHandler}
      />
      <button>+Add</button>
    </form>
  );
};

export default MealItemForm;
