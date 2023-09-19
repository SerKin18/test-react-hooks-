import React, { useState } from "react";
import "./product-list.css";
import ProductButton from "../product-button/product-button";
import { ProductCard } from "../product-card/product-card";

const ProductList = ({ products }) => {
  if (!products?.length) {
    return <h3>List is empty</h3>;
  }
  return (
    <ul className="product_list">
      {products.map((item) => {
        return (
          <li >
            <ProductCard
              name={item.name}
              category={item.category}
              price={item.price}
            />
          </li>
        );
      })}
      <ProductButton />
    </ul>
  );
};
export default ProductList;
