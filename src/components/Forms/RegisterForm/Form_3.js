import React from "react";
import Input from "../Input";
import { Button } from "../../GlobalElements";
import { BeatLoader } from "react-spinners";
import { SubmitWrapper } from "../LoginForm/LoginFormElements";

const Form_3 = ({ setFormNum, formData, handleChange }) => {
  return (
    <>
      <Input
        type="email"
        name="email"
        label="Email"
        value={formData.email}
        disabled
      />
      <Input
        type="password"
        name="password"
        label="Password"
        handleChange={handleChange}
        value={formData.password}
      />
      <Input
        type="password"
        name="confirmPassword"
        label="Confirm Password"
        handleChange={handleChange}
        value={formData.confirmPassword}
      />
      <SubmitWrapper>
        <Button onClick={() => setFormNum(1)}>Back</Button>
        <Button onClick={() => setFormNum(0)}>Submit</Button>
      </SubmitWrapper>
    </>
  );
};

export default Form_3;
