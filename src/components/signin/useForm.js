import { useState, useEffect } from 'react';

import { useHistory } from 'react-router-dom';

import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { login } from '../../actions/auth';

const useForm = (callback, validate, {login}) => {
  const [values, setValues] = useState({
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = e => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    login(values.email, values.password);
    setErrors(validate(values));
    setIsSubmitting(true);
  };

  useEffect(
    () => {
      if (Object.keys(errors).length === 0 && isSubmitting) {
        callback();
      }
    },
    [errors]
  );

  return { handleChange, handleSubmit, values, errors };
};

useForm.propTypes = {
  login: PropTypes.func.isRequired
}

export default connect(null, {login}) (useForm);
