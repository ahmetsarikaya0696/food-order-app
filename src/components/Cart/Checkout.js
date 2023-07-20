import styles from "./Checkout.module.css";
import React, { useRef, useState } from "react";

const isEmpty = (value) => {
  return value.trim() === "";
};

const isFiveDigit = (value) => {
  return value.length === 5;
};

const Checkout = (props) => {
  const [formInputValidity, setFormInputValidity] = useState({
    nameIsValid: true,
    streetIsValid: true,
    cityIsValid: true,
    postalCodeIsValid: true,
  });
  const nameInputRef = useRef();
  const streetInputRef = useRef();
  const postalCodeInputRef = useRef();
  const cityInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredStreet = streetInputRef.current.value;
    const enteredPostalCode = postalCodeInputRef.current.value;
    const enteredCity = cityInputRef.current.value;

    const enteredNameIsValid = !isEmpty(enteredName);
    const enteredStreetIsValid = !isEmpty(enteredStreet);
    const enteredPostalCodeIsValid =
      !isEmpty(enteredPostalCode) && isFiveDigit(enteredPostalCode);
    const enteredCityIsValid = !isEmpty(enteredCity);

    const formIsValid =
      enteredNameIsValid &&
      enteredStreetIsValid &&
      enteredPostalCodeIsValid &&
      enteredCityIsValid;

    setFormInputValidity({
      nameIsValid: enteredNameIsValid,
      streetIsValid: enteredStreetIsValid,
      postalCodeIsValid: enteredPostalCodeIsValid,
      cityIsValid: enteredCityIsValid,
    });

    if (!formIsValid) {
      return;
    }

    props.onConfirm({
      name: enteredName,
      street: enteredStreet,
      city: enteredCity,
      postalCode: enteredPostalCode,
    });

    console.log("Form submitted!");
  };

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <div
        className={`${styles.control} ${
          !formInputValidity.nameIsValid && styles.invalid
        }`}
      >
        <label htmlFor="name">Your Name</label>
        <input ref={nameInputRef} type="text" id="name" />
        {!formInputValidity.nameIsValid && <p>Name field is not valid!</p>}
      </div>
      <div
        className={`${styles.control} ${
          !formInputValidity.streetIsValid && styles.invalid
        }`}
      >
        <label htmlFor="street">Street</label>
        <input ref={streetInputRef} type="text" id="street" />
        {!formInputValidity.streetIsValid && <p>Street field is not valid!</p>}
      </div>
      <div
        className={`${styles.control} ${
          !formInputValidity.postalCodeIsValid && styles.invalid
        }`}
      >
        <label htmlFor="postal">Postal Code</label>
        <input ref={postalCodeInputRef} type="text" id="postal" />
        {!formInputValidity.postalCodeIsValid && (
          <p>Postal code field is not valid! ( 5 charachters long )</p>
        )}
      </div>
      <div
        className={`${styles.control} ${
          !formInputValidity.cityIsValid && styles.invalid
        }`}
      >
        <label htmlFor="city">City</label>
        <input ref={cityInputRef} type="text" id="city" />
        {!formInputValidity.cityIsValid && <p>City field is not valid!</p>}
      </div>

      <div className={styles.actions}>
        <button type="button" onClick={props.onOrderCancel}>
          Cancel
        </button>
        <button type="submit">Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;
