import React from "react";
import Input from "../Input";
import { Button } from "../../GlobalElements";
import { BeatLoader } from "react-spinners";
import { SubmitWrapper } from "../LoginForm/LoginFormElements";

const Form_2 = ({ setFormNum, formData, handleChange }) => {
  return (
    <>
      <Input
        type="text"
        name="shopName"
        label="Shop Name"
        handleChange={handleChange}
        value={formData.shopName}
      />
      <Input
        type="text"
        name="currency"
        label="Currency"
        handleChange={handleChange}
        value={formData.currency}
      />
      <Input
        type="text"
        name="money"
        label="Starting Money"
        handleChange={handleChange}
        value={formData.money}
      />
      <SubmitWrapper>
        <Button onClick={() => setFormNum(0)}>Back</Button>
        <Button onClick={() => setFormNum(2)}>Next</Button>
      </SubmitWrapper>
    </>
  );
};

export default Form_2;
