import React from "react";
import style from "./ProductButton.module.css";

export const ProductButton = ({cheapestProduct}) => {
  return (
    <div className={style.btn}>
      <button className={style.btn_cheap} onClick={cheapestProduct}>Bay cheapest</button>
    </div>
  );
};
