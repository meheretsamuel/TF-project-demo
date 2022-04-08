import React, { useState } from "react";
import "./Form.css";
import FormSignup from "./FormSignup";
import FormSuccess from "./FormSuccess";
import signup from "../../assets/SignUp.svg";

import { Container } from "reactstrap";

// to check if the submission is success with the correct information

const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <div className="form-container">
      

      <div className="form-content-left">
        <img className="form-img" src={signup} alt="signupimage" />
      </div>

      {/* @ts-ignore */}
        <FormSignup/>
  
        {/* <FormSuccess /> */}
    


    </div>
  );
};

export default Form;
