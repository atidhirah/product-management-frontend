import React from "react";

const Input = ({ type, name, label }) => {
  return (
    <div className="input-container">
      <label for={name}>{label}</label>
      <input type={type} id={name} name={name} />
    </div>
  );
};

export default Input;
