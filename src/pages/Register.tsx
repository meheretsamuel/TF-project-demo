import React from 'react';

//Import Components for the landing pages
import Navbar from '../components/navbar/navbar';
import SignUpForm from '../components/signup/SignUpForm';


function Register() {
  return (
    <div className="Login">
      {/* figure out how to pass props into this thing */}
      {/* @ts-ignore */}
      <Navbar />
      <SignUpForm />
    </div>

  )
}

export default Register;