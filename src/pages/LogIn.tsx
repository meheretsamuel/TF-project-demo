import React from 'react';

//Import Components for the landing pages
import Navbar from '../components/navbar/navbar';
import SignInForm from '../components/signin/SignInForm';


function Login() {
  return (
    <div className="Login">
      {/* figure out how to pass props into this thing */}
      {/* @ts-ignore */}
      <Navbar />
      <SignInForm />
    </div>

  )
}

export default Login;