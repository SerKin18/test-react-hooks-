import React from "react";
import ReactDOM from "react-dom";
import style from "./ModalCheap.module.css";

import { ModalCard } from "../modalCard/ModalCard";

const portal = document.getElementById("modal");
export const ModalCheap = ({ isOpen, toggleModalCheap, cheapestProduct }) => {
  return isOpen
    ? ReactDOM.createPortal(
        <>
          <div className={style.modal_window} onClick={toggleModalCheap}></div>
          <ModalCard
            productBuy={cheapestProduct}
            toggleModal={toggleModalCheap}
          >
            <button type="button" className={style.footer_button}>
              buy
            </button>
          </ModalCard>
        </>,
        portal
      )
    : null;
};
