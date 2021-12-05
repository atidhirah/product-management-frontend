import React from "react";
import { Container, Label, InputField, ErrorText } from "./InputElements";

const Input = ({ label, type, name, value, error, handleChange, disabled }) => {
  return (
    <Container>
      <Label>{label}</Label>
      <InputField
        error={error ? true : false}
        type={type}
        id={name}
        name={name}
        defaultValue={value}
        onChange={handleChange}
        disabled={disabled}
        required={!disabled}
      />
      <ErrorText>{error && `* ${error}`}</ErrorText>
    </Container>
  );
};

export default Input;
