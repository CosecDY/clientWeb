// src/components/logout.js
import React from "react";
import { GoogleLogout } from "react-google-login";
import { useNavigate } from "react-router-dom";

const clientId = "156424399259-k6kfl6idb4e8j3p2iqs5pcr0mjt11l59.apps.googleusercontent.com";

function Logout() {
  const navigate = useNavigate();

  const onSuccess = () => {
    console.log("Logout successful");
    navigate("/login");
  };

  return (
    <div id="signOutButton">
      <GoogleLogout
        clientId={clientId}
        buttonText="Logout"
        onLogoutSuccess={onSuccess}
      />
    </div>
  );
}

export default Logout;
