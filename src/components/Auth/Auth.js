import React, { useState } from "react";
import GoogleButton from "./GoogleButton";
import Input from "./Input";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleLogin = () => setIsLogin(!isLogin);
  const handleSubmit = () => {};

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
            <div className="breakline">
              <span>or</span>
            </div>
          </>
        )}
        <Input type="text" name="username" label="Username" />
        <Input type="password" name="password" label="Password" />
        {!isLogin && (
          <Input
            type="password"
            name="confirmPassword"
            label="Confirm Password"
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
