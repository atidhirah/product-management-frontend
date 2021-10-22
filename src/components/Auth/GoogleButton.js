import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { GoogleLogin } from "react-google-login";
import { ReactComponent as GoogleIcon } from "../../images/icons/google.svg";
import { AUTH } from "../../constants/Auth";

const GoogleButton = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const handleSuccess = async (res) => {
    const result = res?.profileObj;
    const token = res?.tokenId;

    try {
      dispatch({ type: AUTH, data: { result, token } });
      history.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  const handleFailure = () =>
    alert("Google login was unsuccessful. Try again later");
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
