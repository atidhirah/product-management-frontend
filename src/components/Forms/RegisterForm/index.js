import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FormContainer, Header } from "../LoginForm/LoginFormElements";
import { Circle, FormNumIndicator, SwitchAuth } from "./RegisterFormElements";
import Form1 from "./Form_1";
import Form2 from "./Form_2";
import Form3 from "./Form_3";

const formDataStarter = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
  shopName: "",
  currency: "",
  money: null,
};

const RegisterForm = () => {
  const [formNum, setFormNum] = useState(0);
  const [formData, setFormData] = useState({ ...formDataStarter });

  const handleChange = (e) => {
    const key = e.target.name;
    const val = e.target.value;
    setFormData({ ...formData, [key]: val });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <FormContainer>
      <FormIndicator formNum={formNum} />
      <Header>Register to BackShop</Header>
      <form onSubmit={handleSubmit}>
        {formNum === 0 && (
          <Form1
            setFormNum={setFormNum}
            formData={formData}
            handleChange={handleChange}
          />
        )}
        {formNum === 1 && (
          <Form2
            setFormNum={setFormNum}
            formData={formData}
            handleChange={handleChange}
          />
        )}
        {formNum === 2 && (
          <Form3
            setFormNum={setFormNum}
            formData={formData}
            handleChange={handleChange}
          />
        )}
      </form>
      <SwitchAuth>
        Already have an account? <Link to="/login"> Login</Link> here
      </SwitchAuth>
    </FormContainer>
  );
};

const FormIndicator = ({ formNum }) => {
  return (
    <FormNumIndicator>
      <Circle active={formNum === 0} />
      <Circle active={formNum === 1} />
      <Circle active={formNum === 2} />
    </FormNumIndicator>
  );
};

export default RegisterForm;
