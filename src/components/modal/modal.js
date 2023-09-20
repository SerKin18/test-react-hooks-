import React from "react";


import style from './Modal.module.css'



export const Modal = () => {

	
	 return (
		<div className={style.modal-window}>
			<div className={style.modal_body}>
				<div className={style.escape_modal} >
					<span></span>
				</div>
				<div className={style.subTitle_modal}>DRINKS</div>
				<div className={style.title_modal}>Orange Juice</div>
				<div className={style.price_modal}>
					<span>14.99</span>
				</div>
				<form action="#" className={style.form_modal}>
					<input type="text" placeholder="Name" className={style.input_modal } ></input>
					<input type="number" placeholder="Number" className={style.input_modal }></input>
					<button type="submit" className={style.button_modal}>order</button>
				</form>

			</div>
		</div>
	)
}
