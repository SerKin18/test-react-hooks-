import React from "react";
import './product-card.css'
export const ProductCard = ({ name, category, price, onClick }) => {
  return (
    <div className="product_card__body">
      <div className="product-card__header">
        <div className="header_subTittle">{category}</div>
        <div className="header_tittle">{name}</div>
      </div>
      <div className="product-card__footer">
        <div className="footer_price">
          <span>{price}</span>
        </div>
        <button type="button" className="footer_button" onClick={onClick}>
          buy
        </button>
      </div>
    </div>
  );
};
