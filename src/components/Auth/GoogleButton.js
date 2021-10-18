import React from "react";
import { GoogleLogin } from "react-google-login";
import { ReactComponent as GoogleIcon } from "../../images/icons/google.svg";

const GoogleButton = () => {
  const handleSuccess = () => {};
  const handleFailure = () => {};

  return (
    <GoogleLogin
      clientId="CLIENT ID"
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
