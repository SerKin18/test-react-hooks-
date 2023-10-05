import React, { useState } from "react";
import style from "./ModalInput.module.css";

export const ModalInput = ({ toggleModal }) => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [nameDirty, setNameDirty] = useState(false);
  const [numberDirty, setNumberDirty] = useState(false);
  const [nameError, setNameError] = useState("This field in required");
  const [numberError, setNumberError] = useState("This field in required");

  const blurHandler = (e) => {
    if (e.target.name === "name") {
      return setNameDirty(true);
    }
    if (e.target.name === "number") {
      return setNumberDirty(true);
    }
  };
  const nameHandler = (e) => {
    console.log(e.target.value);
    if (e.target.value ===  ' ' || e.target.value.search(/\d/) !== -1) {
		setNumberDirty(true)
      setNameError("Only letters allowed");
    } else {
		setName(e.target.value);
      setNameError("");
    }
  };
  const numberHandler = (e) => {
    if(e.target.value !== '' || ' '){
	setNumber(e.target.value);}
    if (e.target.value.search(/\D/) !== -1) {
      setNumberError("Only numbers allowed");
    }
    if (e.target.value.length < 12 || e.target.value.length > 12) {
      setNumberError("Should contain 12 characters");
    } else {
      setNumberError("");
    }
  };

  const closeOrder = () => {
	if (name !== '' && nameDirty && numberDirty && nameError === '' && numberError === '') {
      console.log(`{
			name: ${name}
			number:${number}
		}`);
  }};
  const styleError = { color: "red", textAlign: "start" };

  return (
    <>
      <form action="#" className={style.form_modal}>
        <input
          id="input-name"
          onChange={(e) => nameHandler(e)}
          onBlur={(e) => blurHandler(e)}
          type="text"
          name="name"
          value={name}
          placeholder="Name"
          className={
            nameDirty && nameError ? style.input_modal_false : style.input_modal
          }
        ></input>
        {nameDirty && nameError && <div style={styleError}>{nameError}</div>}
        <input
          id="input-number"
          onChange={(e) => numberHandler(e)}
          onBlur={(e) => blurHandler(e)}
          type="number"
          name="number"
          value={number}
          placeholder="Number"
          className={
            numberDirty && numberError
              ? style.input_modal_false
              : style.input_modal
          }
        ></input>
        {numberDirty && numberError && (
          <div style={styleError}>{numberError}</div>
        )}
        <button
          type="submit"
          className={style.button_modal}
          onClick={closeOrder}
        >
          order
        </button>
      </form>
    </>
  );
};
