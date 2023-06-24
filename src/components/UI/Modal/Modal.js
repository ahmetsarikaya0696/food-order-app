import React, { Fragment } from "react";
import styles from "./Modal.module.css";
import Card from "../Card/Card";

const Backdrop = (props) => {
  return <div className={styles.backdrop} onClick={props.onModalClose}></div>;
};

const ModalOverlay = (props) => {
  return (
    <Card className={styles.modal}>
      <footer className={styles.actions}>
        <button onClick={props.onModalClose}>Close</button>
        <button>Order</button>
      </footer>
    </Card>
  );
};

const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onModalClose={props.onModalClose} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay onModalClose={props.onModalClose} />,
        document.getElementById("overlay-root")
      )}
    </Fragment>
  );
};

export default Modal;
