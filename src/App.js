import { useState, useEffect } from 'react';
import './App.css';
import { GoogleLogin } from '@react-oauth/google';
import { gapi } from 'gapi-script';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';

function App() {
  const [profile, setProfile] = useState(null);
  const clientId = "156424399259-k6kfl6idb4e8j3p2iqs5pcr0mjt11l59.apps.googleusercontent.com";
  const navigate = useNavigate(); 

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
  };

  const onFailure = (res) => {
    console.log('Failure', res);
  };

  const logOut = () => {
    setProfile(null);
  };

  const goToDatabase = () => {
    navigate('/pages/manageData.html');
    window.location.reload(); 
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
          <button onClick={logOut}>Log out</button> 
          <button onClick={goToDatabase}>Go to database</button>
        </div>
      ) : (
        <GoogleLogin
          clientId={clientId}
          buttonText="Sign in with Google"
          onSuccess={onSuccess}
          onFailure={onFailure}
          cookiePolicy={'single_host_origin'} 
        /> 
      )}
    </div>
  );
}

export default function AppWrapper() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/manageData.html" element={<iframe src="/manageData.html" title="Managed Data" />} />
      </Routes>
    </Router>
  );
}
