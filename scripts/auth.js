import { useState, useEffect } from 'react';
import axios from 'axios';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import { gapi } from 'gapi-script';

function App() {
  const [profile, setProfile] = useState(null);
  const clientId = "476624476923-ibkgsvd543s8150sa62a3169dd43rkhq.apps.googleusercontent.com";

  useEffect(() => {
    const initClient = () => {
      gapi.client.init({
        clientId: clientId,
        scope: ''
      });
    };
    gapi.load("client:auth2", initClient);
  }, [clientId]);

  const onSuccess = (res) => {
    setProfile(res.profileObj);
    console.log('success', res);

    // Send profile data to the backend
    axios.post('http://localhost:5000/api/profile', res.profileObj, {
      withCredentials: true, // Ensure credentials are sent with the request
    })
      .then(response => {
        console.log('Profile data saved:', response.data);
      })
      .catch(error => {
        console.error('Error saving profile data:', error);
      });
  };

  const onFailure = (res) => {
    console.log('Failure', res);
  };

  const logOut = () => {
    setProfile(null);
  };

  return (
    <div>
      <h2>React Google Login</h2>
      <br />
      {profile ? (
        <div>
          <img src={profile.imageUrl} alt="user" />
          <h3>User Logged In</h3>
          <p>Name: {profile.name}</p>
          <p>Email: {profile.email}</p>
          <br />
          <GoogleLogout clientId={clientId} buttonText='Log out' onLogoutSuccess={logOut} />
        </div>
      ) : (
        <GoogleLogin
          clientId={clientId}
          buttonText="Sign in with Google"
          onSuccess={onSuccess}
          onFailure={onFailure}
          cookiePolicy={'single_host_origin'} // Adjust cookie policy if needed
          isSignedIn={true}
        />
      )}
    </div>
  );
}

export default App;
