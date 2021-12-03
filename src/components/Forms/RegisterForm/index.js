import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { login } from "../../../actions/auth";
import { BeatLoader } from "react-spinners";
import Input from "../Input";
import {
  FormContainer,
  Header,
  SubmitWrapper,
} from "../LoginForm/LoginFormElements";
import { Circle, FormNumIndicator, SwitchAuth } from "./RegisterFormElements";
import { Button } from "../../GlobalElements";

const formDataStarter = {
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
    const val = e.target.val;
    setFormData({ ...formData, [key]: val });
  };

  const handleBack = () => {
    if (formNum > 0) {
      setFormNum(formNum - 1);
    } else {
      setFormNum(0);
    }
  };

  const handleNext = () => {
    if (formNum < 2) {
      setFormNum(formNum + 1);
    } else {
      setFormNum(2);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <FormContainer>
      <FormNumIndicator>
        <Circle active={formNum === 0} />
        <Circle active={formNum === 1} />
        <Circle active={formNum === 2} />
      </FormNumIndicator>
      <Header>Register to BackShop</Header>
      <Form
        formNum={formNum}
        handleChange={handleChange}
        goBack={handleBack}
        goNext={handleNext}
        handleSubmit={handleSubmit}
      />
      <SwitchAuth>
        Already have an account? <Link to="/login"> Login</Link> here
      </SwitchAuth>
    </FormContainer>
  );
};

const Form = ({ formNum, handleChange, goBack, goNext, handleSubmit }) => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();

  let formFields;
  if (formNum === 0) {
    formFields = (
      <>
        <Input type="text" name="firstName" label="First Name" />
        <Input type="text" name="lastName" label="Last Name" />
        <Input type="email" name="email" label="Email" />{" "}
      </>
    );
  } else if (formNum === 1) {
    formFields = (
      <>
        <Input type="text" name="shopName" label="Shop Name" />
        <Input type="text" name="currency" label="Currenct" />
        <Input type="text" name="money" label="Starting Money" />
      </>
    );
  } else {
    formFields = (
      <>
        <Input type="email" name="email" label="Email" />
        <Input type="password" name="password" label="Password" />
        <Input
          type="password"
          name="confirmPassword"
          label="Confirm Password"
        />
      </>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      {formFields}
      <SubmitWrapper>
        {formNum > 0 && (
          <Button onClick={goBack}>
            {loading ? <BeatLoader size={6} /> : "Back"}
          </Button>
        )}
        {formNum < 2 ? (
          <Button onClick={goNext}>
            {loading ? <BeatLoader size={6} /> : "Next"}
          </Button>
        ) : (
          <Button type="submit">
            {loading ? <BeatLoader size={6} /> : "Register"}
          </Button>
        )}
      </SubmitWrapper>
    </form>
  );
};

export default RegisterForm;
