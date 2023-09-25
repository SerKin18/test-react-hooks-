import React from "react";
import style from "./ModalCard.module.css";

export const ModalCard = ({ productBuy }) => {
  const product = productBuy[0];
  console.log(product);
  return (
    <>  
        <div className={style.subTitle_modal}>{product.category}</div>
        <div className={style.title_modal}>{product.name}</div>
        <div className={style.price_modal}>
          <span>{product.price}</span>
        </div>
    </>
  );
};
