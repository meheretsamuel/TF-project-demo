import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';

import validate from './validateInfoSI';
// import useForm from './useForm';
import './Form.css';
import { Redirect } from 'react-router';
import {Link} from 'react-router-dom';

import { BrowserRouter } from 'react-router-dom';

//Redux Imports
import { connect } from 'react-redux';
import { setAlert } from '../../actions/alert';
import { register } from '../../actions/auth';

import Alert from '../alert/Alert';
import PropTypes from 'prop-types'

import { login } from '../../actions/auth';

const FormSignIN = ({ setAlert, login }) => {

  const [values, setValues] = useState({
    email: '',
    password: ''
  });

  const {email, password} = values;


   const history = useHistory();

 

  const handleChange = e => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
  };

  const handleSubmit =  async (e) => {
    e.preventDefault();
    

    const handleButtonClick = () => history.push('/dashboard');
    
    if (email == '' || password == '') {
      setAlert("Fill out both fields please.", 'smol')
    }
    else {
      
       await login({email, password});

      
        
      //  handleButtonClick()
       

      
      
    }
      
    
    

    setErrors(validate(values));
    setIsSubmitting(true);
  };

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // const { handleChange, handleSubmit, values, errors } = useForm(
  //   submitForm,
  //   validate
  // );

  return (
    <div className='form-content-right'>
      <Alert />
      <form onSubmit={handleSubmit} className='form' noValidate>
        <h1>
          Sign In. Start Managing your event. 
        </h1>
  
        <div className='form-inputs'>
          <label className='form-label'>Email: {errors.email} </label>
          <input
            className='form-input'
            type='email'
            name='email'
            placeholder='Enter your email'
            value={values.email}
            onChange={handleChange}
          />
      
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Password: {errors.password}</label>
          <input
            className='form-input'
            type='password'
            name='password'
            placeholder='Enter your password'
            value={values.password}
            onChange={handleChange}
          />
     
        </div>
  
        <button className='form-input-btn'   type='submit'>
           Sign In
        </button>
        <span className='form-input-login'>
          Don't have an account sign up <Link to='/register'>here</Link>
        </span>
      </form>
    </div>
  );
};

FormSignIN.propTypes = {
  setAlert: PropTypes.func.isRequired,
  login: PropTypes.func.isRequired
}

export default connect(null, {setAlert, login}) (FormSignIN);
