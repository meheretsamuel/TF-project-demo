import React, { Fragment, useState } from 'react';
import validate from './validateInfo';
import { Redirect } from 'react-router';
// import useForm from './useForm';
import './Form.css';
import { Container, Form } from 'reactstrap';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'

import { useHistory } from 'react-router-dom';


import Alert from '../alert/Alert';

//Redux imports
import { connect } from 'react-redux';
import { setAlert } from '../../actions/alert';
import { register } from '../../actions/auth';

const FormSignup = ({ setAlert, register }) => {

  const [values, setValues] = useState({
    name: '',
    organization: '',
    tin: '',
    phone_number: '',
    email: '',
    password: '',
    password2: ''
  });

  const history = useHistory();
  
  const { name, organization, tin, phone_number, email, password, password2 } = values;

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors(validate(values).errors);
    const handleButtonClick = () => history.push('/login')
    //This is where launch happens
    //console.log(errors);
    if (password !== password2) {
      setAlert('Passwords do not match', 'smol');
    }
    if (validate(values).pass == false) {
      setAlert('Fill all fields correctly', 'smol');
    }
    
    if (password == password2 && password !== '') {
      //alert("Success");
      register({name, password, email, organization, tin, phone_number})
 
      handleButtonClick();
    }



  };

  return (
    <Fragment>
      
      <div className='form-content-right'>
      <Alert />
        <form onSubmit={handleSubmit} className='form' noValidate>
          <h1>
            Get started with us today! Start managing your events better than
            before.
          </h1>

          <div className='form-inputs'>
            <label className='form-label'>Name: {errors.name} </label>
            <input
              className='form-input'
              type='text'
              name='name'
              placeholder='Enter your name'
              value={values.name}
              onChange={handleChange}
              required
            />

          </div>

          <div className='form-inputs'>
            <label className='form-label'>Organization: {errors.organization} </label>
            <input
              className='form-input'
              type='text'
              name='organization'
              placeholder="Enter your organization's name"
              value={values.organization}
              onChange={handleChange}
            />

          </div>

          <div className='form-inputs'>
            <label className='form-label'>Tin Number: {errors.tin} </label>
            <input
              className='form-input'
              type='text'
              name='tin'
              placeholder='Enter your tin number'
              value={values.tin}
              onChange={handleChange}
              required
            />

          </div>

          <div className='form-inputs'>
            <label className='form-label'>Phone Number: {errors.phone_number} </label>
            <input
              className='form-input'
              type='text'
              name='phone_number'
              placeholder='Enter your phone number'
              value={values.phone_number}
              onChange={handleChange}
              required
            />

          </div>

          <div className='form-inputs'>
            <label className='form-label'>Email: {errors.email} </label>
            <input
              className='form-input'
              type='email'
              name='email'
              placeholder="Enter your email"
              value={values.email}
              onChange={handleChange}
              required
            />

          </div>

          <div className='form-inputs'>
            <label className='form-label'>Password: {errors.password} </label>
            <input
              className='form-input'
              type='password'
              name='password'
              placeholder="Enter your password"
              value={values.password}
              onChange={handleChange}
              required
            />

          </div>

          <div className='form-inputs'>
            <label className='form-label'>Confirm Password: {errors.password2}</label>
            <input
              className='form-input'
              type='password'
              name='password2'
              placeholder="Re-Enter your password"
              value={values.password2}
              onChange={handleChange}
              required
            />

          </div>



          <button className='form-input-btn' type='submit'>
            Sign up
          </button>

          <span className='form-input-login'>
            Already have an account? Login <a href='/login'>here</a>
          </span>
        </form>
      </div>
    </Fragment>

  );
};

FormSignup.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired
}

export default connect(null, { setAlert, register })(FormSignup);

