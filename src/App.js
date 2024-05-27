import { useState, useEffect } from 'react';
// import axios from 'axios';
import './App.css';
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

    // Send profile data to the backend
    // axios.post('http://localhost:5000/api/profile', res.profileObj, {
    //   withCredentials: true, // Ensure credentials are sent with the request
    // })
    //   .then(response => {
    //     console.log('Profile data saved:', response.data);
    //   })
    //   .catch(error => {
    //     console.error('Error saving profile data:', error);
    //   });
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
          <useGoogleLogout clientId={clientId} buttonText='Log out' onLogoutSuccess={logOut} /> {/* เปลี่ยนแท็กนี้ */}
          <button onClick={goToDatabase}>Go to database</button>
        </div>
      ) : (
        <useGoogleLogin
          clientId={clientId}
          buttonText="Sign in with Google"
          onSuccess={onSuccess}
          onFailure={onFailure}
          cookiePolicy={'single_host_origin'} 
          isSignedIn={true}
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
