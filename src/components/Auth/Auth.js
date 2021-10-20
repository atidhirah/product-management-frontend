import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { login, register } from "../../actions/auth";
import GoogleButton from "./GoogleButton";
import Input from "./Input";

const initialForm = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState(initialForm);
  const dispatch = useDispatch();
  const history = useHistory();

  const toggleLogin = () => setIsLogin(!isLogin);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      dispatch(login(formData, history));
    } else {
      dispatch(register(formData, history));
    }
  };

  const handleSuccess = () => {};

  const handleFailure = () => {};

  return (
    <div className="auth-content">
      <h2 className="auth-logo">Product Management</h2>
      <h1 className="auth-heading">
        {isLogin ? "Log in to your account" : "Register new account"}
      </h1>
      <form onSubmit={handleSubmit}>
        {isLogin && (
          <>
            <GoogleButton
              handleSuccess={handleSuccess}
              handleFailure={handleFailure}
            />
            <div className="breakline"></div>
          </>
        )}
        {!isLogin && (
          <>
            <Input
              type="text"
              name="firstName"
              label="First Name"
              handleChange={handleChange}
            />
            <Input
              type="text"
              name="lastName"
              label="Last Name"
              handleChange={handleChange}
            />
          </>
        )}
        <Input
          type="email"
          name="email"
          label="Email"
          handleChange={handleChange}
        />
        <Input
          type="password"
          name="password"
          label="Password"
          handleChange={handleChange}
        />
        {!isLogin && (
          <Input
            type="password"
            name="confirmPassword"
            label="Confirm Password"
            handleChange={handleChange}
          />
        )}
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
