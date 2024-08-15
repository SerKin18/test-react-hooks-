import React from "react";
import style from "./ModalCard.module.css";
import { ModalInput } from "../ModalInput/ModalInput";

export const ModalCard = ({ productBuy, toggleModal}) => {
  const product = productBuy;
 
  return (
    <div className={style.modal_body}>
      <i className={style.escape_modal} onClick={toggleModal}></i>
      <div className={style.subTitle_modal}>{product.category}</div>
      <div className={style.title_modal}>{product.name}</div>
      <div className={style.price_modal}>
        <span>{product.price}</span>
      </div>
      
      <ModalInput toggleModal={toggleModal } />
    </div>
  );
};
