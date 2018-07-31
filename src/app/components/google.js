import React from 'react';
import ReactDOM from 'react-dom';


import { GoogleLogin } from 'react-google-login';
 
 
const responseGoogle = (response) => {
  console.log(response);
}

ReactDOM.render(
  <GoogleLogin
    clientId="14780768209-cmv3v6nr317v60plfftq0cndo75j6hsl.apps.googleusercontent.com"
    clientSecret="eF6OcxtD_dbQWYVFd-x9bjWR"
    buttonText="Login"
    onSuccess={responseGoogle}
    onFailure={responseGoogle}
  />,
  document.getElementById('googleButton')
);
