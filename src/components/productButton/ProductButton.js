import React from "react";
import style from "./ProductButton.module.css";

export const ProductButton = ({cheapestProduct,toggleModal}) => {
const getCheapProduct=()=>{
	cheapestProduct()
	toggleModal()
}
  return (
    <div className={style.btn}>
      <button className={style.btn_cheap} onClick={getCheapProduct}>Bay cheapest</button>
    </div>
  );
};
