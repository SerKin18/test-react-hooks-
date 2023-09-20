import React from "react";
import style from "./ProductList.module.css";
import { ProductButton } from "../productButton/ProductButton";
import { ProductCard } from "../productCard/ProductCard";

export const ProductList = ({ products, toggleModal, modalProduct,cheapestProduct}) => {
  if (!products?.length) {
    return <h3>List is empty</h3>;
  }
  return (
    <ul className={style.product_list}>
      {products.map((item) => {
        return (
          <li>
            <ProductCard
              name={item.name}
              category={item.category}
              price={item.price}
              id={item.id}
              modalProduct={(id) => modalProduct(id)}
              toggleModal={toggleModal}
            />
          </li>
        );
      })}
      <ProductButton cheapestProduct={cheapestProduct}/>
    </ul>
  );
};
