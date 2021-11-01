import React from "react";
import AuthForm from "../components/Auth/AuthForm";
import AuthBanner from "../components/Auth/AuthBanner";

const AuthContainer = () => {
  return (
    <div className="auth-container">
      <AuthForm />
      <AuthBanner />
    </div>
  );
};

export default AuthContainer;
