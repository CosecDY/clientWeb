import { useState, useEffect } from 'react';
import axios from 'axios';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import { gapi } from 'gapi-script';
import './App.css';

function App() {
  const [profile, setProfile] = useState(null);
  const clientId = "156424399259-dkedh7nn731tgtk5itiimhqjm9i3craj.apps.googleusercontent.com";

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

  return React.createElement(
    'div',
    null,
    React.createElement('h2', null, 'React Google Login'),
    React.createElement('br', null),
    profile ? React.createElement(
      'div',
      null,
      React.createElement('img', { src: profile.imageUrl, alt: 'user' }),
      React.createElement('h3', null, 'User Logged In'),
      React.createElement('p', null, `Name: ${profile.name}`),
      React.createElement('p', null, `Email: ${profile.email}`),
      React.createElement('br', null),
      React.createElement(GoogleLogout, { clientId: clientId, buttonText: 'Log out', onLogoutSuccess: logOut })
    ) : React.createElement(GoogleLogin, {
      clientId: clientId,
      buttonText: 'Sign in with Google',
      onSuccess: onSuccess,
      onFailure: onFailure,
      cookiePolicy: 'single_host_origin',
      isSignedIn: true
    })
  );
}

export default App;
