import React from "react";
import styles from "./Input.module.css";

const Input = (props) => {
  const changeHandler = (event) => {
    props.onChange(event.target.value);
  };

  return (
    <div className={styles.input}>
      <label>{props.label}</label>
      <input type={props.type} value={props.value} onChange={changeHandler} min={1} />
    </div>
  );
};

export default Input;
