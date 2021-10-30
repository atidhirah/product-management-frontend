import React from "react";

const TextBox1 = ({ label, value }) => {
  return (
    <div className="textbox-1">
      <span>{label}</span>
      <p>{value}</p>
    </div>
  );
};

export default TextBox1;
