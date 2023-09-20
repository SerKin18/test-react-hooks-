import React from "react";
import style from "./ProductList.module.css";
import {ProductButton} from "../productButton/ProductButton";
import { ProductCard } from "../productCard/ProductCard";

export const ProductList = ({ products }) => {
	if (!products?.length) {
		return <h3>List is empty</h3>;
	}
	return (
		<ul className={style.product_list}>
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

