import React from "react";

import style from "./Input.module.css";

const Input = ({
  name,
  type = "text",
  value,
  isError,
  isSuccess,
  onChange,
  onBlur,
}) => {
  let inputStyle = style.input_modal;

  if (isError) {
    inputStyle += " " + style.input_modal_false;
  }
  if (isSuccess) {
    inputStyle = style.input_modal_success;
  }
  return (
    <label className={style.input_field}>
      <input
        id={`input-${name}`}
        onChange={onChange}
        onBlur={onBlur}
        type={type}
        name={name === "Name" ? "Name" : "Number"}
        value={value}
        placeholder={name}
        className={inputStyle}
      />
      {isError && !isSuccess ? (
        <div className={style.error_input}>
          <i className={style.error_input__value} />
        </div>
      ) : null}
    </label>
  );
};

export default Input;
