import React, { Fragment, useContext } from "react";
import ReactDOM from "react-dom";
import styles from "./Modal.module.css";
import Card from "../Card/Card";
import AuthContext from "../../../context/auth-context";

const Backdrop = (props) => {
  const ctx = useContext(AuthContext);
  return <div className={styles.backdrop} onClick={ctx.onModalClose}></div>;
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
        <Backdrop onModalClose={props.onModalClose} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay onModalClose={props.onModalClose}>
          {props.children}
        </ModalOverlay>,
        document.getElementById("overlay-root")
      )}
    </Fragment>
  );
};

export default Modal;
