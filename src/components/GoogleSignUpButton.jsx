import React from 'react';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import Button from './Button';
import { jwtDecode } from "jwt-decode";
import { useNavigate } from 'react-router-dom';

const GoogleSignUpButton = ({ text }) => {
  const clientId = '863438307177-pritp613man52ieef0m068dvob631gs4.apps.googleusercontent.com';
  const navigate = useNavigate();

  const onSuccess = async (response) => {
    console.log('Login Success:', response);

    const credentialInfo = jwtDecode(response.credential);
    console.log(credentialInfo);

    try {
      const { data } = await axios.post('/user/googlesignup', {
        token: response.credential,
      });
      console.log('Profile created:', data);
      navigate('/dashboard');
    } catch (error) {
      console.error('Error creating profile:', error);
    }
  };

  const onError = (response) => {
    console.log('Login Failed:', response);
  };

  return (
    <GoogleOAuthProvider clientId={clientId}>
      <GoogleLogin
        onSuccess={onSuccess}
        theme='filled_blue'
        size='large'
        shape='pill'
        type='standard'
        text={text}
        onError={onError}
        render={(renderProps) => (
          <Button 
            type="submit"
            onClick={renderProps.onClick} 
            disabled={renderProps.disabled}
          />
        )}
      />
    </GoogleOAuthProvider>
  );
};

export default GoogleSignUpButton;