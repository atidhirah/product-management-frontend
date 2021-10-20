import React from "react";

const Input = ({ type, name, label, handleChange }) => {
  return (
    <div className="input-container">
      <label>{label}</label>
      <input
        type={type}
        id={name}
        name={name}
        onChange={handleChange}
        required
      />
    </div>
  );
};

export default Input;
