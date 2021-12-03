import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { login } from "../../../actions/auth";
import { EMAIL_NOT_FOUND, WRONG_PASSWORD } from "../../../constants/Auth";
import { BeatLoader } from "react-spinners";
import {
  FormContainer,
  Header,
  SubmitWrapper,
  SwitchAuth,
} from "./LoginFormElements";
import { Button } from "../../GlobalElements";
import Input from "../Input";

const LoginForm = () => {
  const [loading, setLoading] = useState(false);
  const { authError } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const formData = { email, password };
    dispatch(login(formData, history));
  };

  return (
    <FormContainer>
      <Header>Login to BackShop</Header>
      <form onSubmit={handleSubmit}>
        <Input
          type="email"
          name="email"
          label="Email"
          error={authError === EMAIL_NOT_FOUND ? EMAIL_NOT_FOUND : ""}
        />
        <Input
          type="password"
          name="password"
          label="Password"
          error={authError === WRONG_PASSWORD ? WRONG_PASSWORD : ""}
        />
        <SubmitWrapper>
          <SwitchAuth>
            Don't have an account?
            <br /> <Link to="/register">Register</Link> here
          </SwitchAuth>
          <Button>{loading ? <BeatLoader size={6} /> : "Login"}</Button>
        </SubmitWrapper>
      </form>
    </FormContainer>
  );
};

export default LoginForm;
