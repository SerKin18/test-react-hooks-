import React from "react";

import style from "./Modal.module.css";

export const Modal = ({ toggleModal, productBuy }) => {
  const product = productBuy[0];

  return (
    <>
      <div className={style.modal_window} onClick={toggleModal}></div>
      <div className={style.modal_body}>
        <div className={style.escape_modal} onClick={toggleModal}>
          <span></span>
        </div>
        <div className={style.subTitle_modal}>{product.category}</div>
        <div className={style.title_modal}>{product.name}</div>
        <div className={style.price_modal}>
          <span>{product.price}</span>
        </div>
        <form action="#" className={style.form_modal}>
          <input
            type="text"
            placeholder="Name"
            className={style.input_modal}
          ></input>
          <input
            type="number"
            placeholder="Number"
            className={style.input_modal}
          ></input>
          <button
            type="submit"
            className={style.button_modal}
            onClick={toggleModal}
          >
            order
          </button>
        </form>
      </div>
    </>
  );
};
