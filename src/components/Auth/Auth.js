import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { login, register } from "../../actions/auth";
import GoogleButton from "./GoogleButton";
import Input from "./Input";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const { authError } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const history = useHistory();
  const toggleLogin = () => setIsLogin(!isLogin);

  const handleSubmit = (e) => {
    e.preventDefault();
    let formData;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (isLogin) {
      formData = { email, password };
      console.log(formData);
      dispatch(login(formData, history));
    } else {
      const firstName = document.getElementById("firstName").value;
      const lastName = document.getElementById("lastName").value;
      const confirmPassword = document.getElementById("confirmPassword").value;
      formData = {
        firstName,
        lastName,
        email,
        password,
        confirmPassword,
      };
      console.log(formData);
      dispatch(register(formData, history));
    }
  };

  return (
    <div className="auth-content">
      <h2 className="auth-logo">Product Management</h2>
      <h1 className="auth-heading">
        {isLogin ? "Log in to your account" : "Register new account"}
      </h1>
      <form onSubmit={handleSubmit}>
        {isLogin && (
          <>
            <GoogleButton />
            <div className="breakline"></div>
          </>
        )}
        {!isLogin && (
          <>
            <Input type="text" name="firstName" label="First Name" />
            <Input type="text" name="lastName" label="Last Name" />
          </>
        )}
        <Input type="email" name="email" label="Email" />
        <Input type="password" name="password" label="Password" />
        {!isLogin && (
          <Input
            type="password"
            name="confirmPassword"
            label="Confirm Password"
          />
        )}
        <p className="auth-error">* {authError}</p>
        <div className="auth-submit">
          <button type="submit" className="btn">
            Submit
          </button>
          {isLogin ? (
            <p>
              Don't have an account? <span onClick={toggleLogin}>Register</span>
            </p>
          ) : (
            <p>
              Already have an account? <span onClick={toggleLogin}>Log in</span>
            </p>
          )}
        </div>
      </form>
    </div>
  );
};

export default Auth;
