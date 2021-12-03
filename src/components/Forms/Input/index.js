import React from "react";
import { Container, Label, InputField, ErrorText } from "./InputElements";

const Input = ({ label, type, name, error, handleChange }) => {
  return (
    <Container>
      <Label>{label}</Label>
      <InputField
        error={error ? true : false}
        type={type}
        id={name}
        name={name}
        onChange={handleChange}
        required
      />
      <ErrorText>{error && `* ${error}`}</ErrorText>
    </Container>
  );
};

export default Input;
