import React from "react";
import ReactDOM from "react-dom";
import style from "./Modal.module.css";

const portal = document.getElementById("modal");
export const Modal = ({
  isOpen,
  children,
  toggleModal,
  isOpenCheap,
  
}) => {
  return isOpen || isOpenCheap
    ? ReactDOM.createPortal(
        <>
          <div
            className={style.modal_window}
            onClick={toggleModal}
          ></div>
          {children}
        </>,
        portal
      )
    : null;
};
