import React from "react";
import { GoogleLogin } from "react-google-login";
import { ReactComponent as GoogleIcon } from "../../images/icons/google.svg";

const GoogleButton = ({ handleSuccess, handleFailure }) => {
  return (
    <GoogleLogin
      clientId="909575612668-lg5vodvo8ohe4atrsh2790qfp9p8kg66.apps.googleusercontent.com"
      render={(renderProps) => (
        <button
          className="btn auth-google"
          onClick={renderProps.onClick}
          disabled={renderProps.disabled}
        >
          <div>
            <GoogleIcon />
          </div>
          <span>Log in with Google</span>
        </button>
      )}
      onSuccess={handleSuccess}
      onFailure={handleFailure}
      cookiePolicy="single_host_origin"
    />
  );
};

export default GoogleButton;
