import React from 'react';
import './Form.css';
import successimg from '../../assets/SuccesSigunUp.svg';

const FormSuccess = () => {
  return (
    <div className='form-content-right'>
      <h1 className='form-success'>Success</h1>
      <img className='form-img-2' src={successimg} alt='success' />
    </div>
  );
};

export default FormSuccess;
