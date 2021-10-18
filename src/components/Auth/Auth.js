import React, { useState } from "react";
import GoogleButton from "./GoogleButton";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);

  const handleSubmit = () => {};

  return (
    <div className="auth-content">
      <h2 className="auth-logo">Product Management</h2>
      <h1 className="auth-heading">
        {isLogin ? "Log in to your account" : "Register new account"}
      </h1>
      <form onSubmit={handleSubmit}>
        <GoogleButton />
        <div className="breakline">
          <span>or</span>
        </div>
      </form>
    </div>
  );
};

export default Auth;
