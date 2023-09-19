import React from "react";
import { useState } from "react";

import './modal.css'



const Modal = () => {


	// const escapeModal = document.getElementsByClassName('escape_modal')
	// const modal = document.getElementsByClassName('modal-window')


	// window.addEventListener('click', (e) => {
	// 	if (e.target === escapeModal || modal) {
	// 		closeModal()
	// 	}

	// })
	// function closeModal() {
	// 	setToggleModal(prev => !prev)
	// }



	
	 return (
		<div className="modal-window">
			<div className="modal_body">
				<div className="escape_modal" >
					<span></span>
				</div>
				<div className="subTitle_modal">DRINKS</div>
				<div className="title_modal">Orange Juice</div>
				<div className="price_modal">
					<span>14.99</span>
				</div>
				<form action="#" className="form-modal">
					<input type="text" placeholder="Name" className="input_modal name_input" ></input>
					<input type="number" placeholder="Number" className="input_modal number_input"></input>
					<button type="submit" className="button_modal">order</button>
				</form>

			</div>
		</div>
	)
}
export default Modal