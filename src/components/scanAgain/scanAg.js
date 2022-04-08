import React from 'react';
import cross from '../../assets/cross.svg';
import { useHistory } from 'react-router-dom';

function ScanAg() {

  const history = useHistory();
  function onclickHandler () {
    // Logic for what happens when button is clicked
    history.push(`/upload-qr/`);
  }
  return (         
    <div className="layout-stuff" style={{backgroundColor:'#FF4962'}}> 
    <div>
      <br></br> 
      <div>
        <img src = {cross} alt = 'ticekt-funnel-logo' className="img-class" style={{margin:0}}/>
      </div>
      <br></br>         
      <button className="tf-btn" onClick={onclickHandler}>Scan Again</button>  
    
      </div>
    </div> 
  );
}

export default ScanAg;