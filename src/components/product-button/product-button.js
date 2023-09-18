import React from "react";
import { useState } from "react";
import './product-button.css'

const ProductButton=()=>{
	const [cheapest, setCheapest] = useState(false);
function bayChepeast(){
	setCheapest(!cheapest)
	
}
	return(
		<div className="btn">
			<button className="btn_cheap" onClick={()=>bayChepeast()}>
				Bay cheapest
			</button>
		</div>
	)
}
export default ProductButton