import React from 'react';
import logo from './logo.svg';
import './App.css';
import GoogleLogin from 'react-google-login';


function App() {

  const responseGoogle = (response) => {
    console.log(response)
  }

  return (
    <GoogleLogin
    clientId="784406214165-b9kjjdc4j062angd690qektitsoej31p.apps.googleusercontent.com" //CLIENTID NOT CREATED YET
    buttonText="LOGIN WITH GOOGLE"
    onSuccess={responseGoogle}
    onFailure={responseGoogle}/>

  );
}

export default App;
