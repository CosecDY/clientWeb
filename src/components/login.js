// src/components/login.js
import React from "react";
import { GoogleLogin } from "react-google-login";
import { useNavigate } from "react-router-dom";

const clientId = "156424399259-k6kfl6idb4e8j3p2iqs5pcr0mjt11l59.apps.googleusercontent.com";

function Login() {
  const navigate = useNavigate();

  const onSuccess = (res) => {
    console.log("Login success current user: ", res.profileObj);
    navigate("/home");
  };

  const onFailure = (res) => {
    console.log("Login failed: ", res);
  };

  return (
    <div id="signInButton">
      <GoogleLogin
        clientId={clientId}
        buttonText="Login"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
        isSignedIn={true}
      />
    </div>
  );
}

export default Login;
