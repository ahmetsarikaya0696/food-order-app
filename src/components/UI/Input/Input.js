import React from "react";
import styles from "./Input.module.css";

const Input = (props) => {
    return (
        <div className={styles.input}>
          <label>{props.label}</label>
          <input
            id={props.id}
            type={props.type}
            value={props.value}
          />
        </div>)
};

export default Input;