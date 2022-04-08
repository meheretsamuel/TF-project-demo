import React from 'react';
import logo from '../../assets/tf.png';
import { Button } from '../Button/Button';



function keyinput() {

  function onSubmitHandler (e) {    
    e.preventDefault();
    // Take your form values here
    console.log(e.target.elements.key.value)
  }

  return (         
    <div className = 'layout-stuff'>
      <div>
        <div>
          <img src = {logo} alt = 'ticekt-funnel-logo' className="img-class"/>
        </div>
      
        <form className="form-class" onSubmit={onSubmitHandler}> 
          <label htmlFor="text">Key</label>
          <br></br>
          <input name="key" type="text" placeholder="Enter Key" style={{textAlign:'center'}}/>
          <br></br>
          <button className="tf-btn" type="submit">Continue</button>  
        </form>
      </div>      
    </div> 
  );

}

export default keyinput;