import React from "react";
import ReactDOM from "react-dom";
import style from "./Modal.module.css";

const portal = document.getElementById("modal");
export const Modal = ({
  isOpen,
  children,
  toggleModal,
  isOpenCheap,
  toggleModalCheap,
}) => {
  return isOpen || isOpenCheap
    ? ReactDOM.createPortal(
        <>
          <div
            className={style.modal_window}
            onClick={toggleModal || toggleModalCheap}
          ></div>
          {children}
        </>,
        portal
      )
    : null;
};
