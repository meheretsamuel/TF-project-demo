import React from 'react';
import './Form.css';
import successimg from '../../assets/SuccesSI.svg';

const FormSuccessSI = () => {
  return (
    <div className='form-content-right'>
      <h1 className='form-success'>We have received your request!</h1>
      <img className='form-img-2' src={successimg} alt='success' />
    </div>
  );
};

export default FormSuccessSI;
