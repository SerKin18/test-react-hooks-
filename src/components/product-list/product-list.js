import React from 'react'
import './product-list.css'
import ProductButton from '../product-button/product-button'
import { data } from '../data/data'



const ProductList = () => {


	const itemCard = data.map((item, i) => {
		return (
			<div className="product_card__body" data-id={i}>
				<div className="product-card__header" >
					<div className="header_subTittle">{item.class}</div>
					<div className="header_tittle">{item.name}</div>
				</div>
				<div className="product-card__footer">
					<div className="footer_price">
						<span>{item.price}</span>
					</div>
					<div className='footer_button'>bay</div>
				</div>
			</div>
		)
	}

	)
	return (
		<div className='product_list'>
			{itemCard}
			<ProductButton/>
		</div>

	)
}
export default ProductList