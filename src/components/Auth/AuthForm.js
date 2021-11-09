import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { login, register } from "../../actions/auth";
import Input from "./Input";

const AuthForm = () => {
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
      dispatch(login(formData, history));
    } else {
      const fullname = document.getElementById("fullname").value;
      const confirmPassword = document.getElementById("confirmPassword").value;
      const shopName = document.getElementById("shopName").value;
      const currency = document.getElementById("currency").value;
      const money = document.getElementById("money").value;
      formData = {
        fullname,
        email,
        password,
        confirmPassword,
        shopName,
        currency,
        money,
      };

      dispatch(register(formData, history));
    }
  };

  return (
    <div className="auth-form-container">
      <h2 className="auth-logo">Product Management</h2>
      <h1 className="auth-heading">
        {isLogin ? "Log in to your account" : "Register new account"}
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="auth-form-user">
          {!isLogin && (
            <>
              <div className="line">
                <span>User Data</span>
              </div>
              <Input type="text" name="fullname" label="Full Name" />
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
        </div>
        {!isLogin && (
          <div className="auth-form-shop">
            <div className="line">
              <span>Shop Data</span>
            </div>
            <Input type="text" name="shopName" label="Shop Name" />
            <div className="form-money">
              <Input type="text" name="currency" label="Currency" />
              <Input type="text" name="money" label="Money Nominal" />
            </div>
          </div>
        )}
        <p className="auth-error">* {authError}</p>
        <div className="auth-submit">
          <button type="submit" className="btn">
            {isLogin ? "Log in" : "Register"}
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

export default AuthForm;
