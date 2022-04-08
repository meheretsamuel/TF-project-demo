import React, { useState } from 'react';
import './Form.css';
import FormSignIn from './FormSignIN';
import FormSuccessSI from './FormSuccessSI';
import signin from '../../assets/SignIn.svg';

// to check if the submission is success with the correct information

const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
      <div className='form-container'>
        
        <div className='form-content-left'>
          <img className='form-img' src={signin} alt='signinimage' />
        </div>
    
          <FormSignIn />
    
      </div>
    </>
  );
};

export default Form;
