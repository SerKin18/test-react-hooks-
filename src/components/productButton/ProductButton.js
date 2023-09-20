import React from "react";
import style from "./ProductButton.module.css";

export const ProductButton = () => {
  return (
    <div className={style.btn}>
      <button className={style.btn_cheap}>Bay cheapest</button>
    </div>
  );
};

