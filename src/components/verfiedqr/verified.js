import React from 'react';
import {GoVerified} from 'react-icons/go';
import check from '../../assets/check.svg';

import { useHistory } from 'react-router-dom';


function Verified() {
  

  const history = useHistory();
  function onclickHandler () {
    // Logic for what happens when button is clicked
    history.push(`/upload-qr/`);
  }
  
  return (         
    <div className="layout-stuff " style={{backgroundColor:'#1DF76D'}}> 
      <div>
        <br></br> 
        <div>
          <img src = {check} alt = 'ticekt-funnel-logo' className="img-class mt-5" style={{margin:0}}/>
        </div>
        <br></br> 
        {/* <div className="info-box">Mark</div>
        <div className="info-box">+251920642556</div>
        <div className="info-box">mark@gmail.com</div> */}
          
        <button className="tf-btn" onClick={onclickHandler}>Scan Another</button>  
       
      </div>
    </div> 
  );
}

export default Verified;
