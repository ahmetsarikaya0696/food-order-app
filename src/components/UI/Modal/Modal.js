import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import styles from "./Modal.module.css";
import Card from "../Card/Card";

const Backdrop = (props) => {
  return <div className={styles.backdrop} onClick={props.onHideCart}></div>;
};

const ModalOverlay = (props) => {
  return (
    <Card className={styles.modal}>
      <div className={styles.content}>{props.children}</div>
    </Card>
  );
};

const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onHideCart={props.onHideCart} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        document.getElementById("overlay-root")
      )}
    </Fragment>
  );
};

export default Modal;
