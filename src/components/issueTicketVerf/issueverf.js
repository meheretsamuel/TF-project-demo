import React from 'react';
import check from '../../assets/check.svg';

import { useHistory } from 'react-router-dom';

import { Container, Row, Col } from 'reactstrap';

import QRCode from 'qrcode.react'


function Issueverf() {

  const history = useHistory();

  function onclickHandler() {
    // Logic for what happens when button is clicked
    history.push('/issue-ticket')
  }
  return (
    <div className="layout-stuff" style={{ backgroundColor: 'antiquewhite' }}>
      <Container >

        {/* <Row>
          <div>
            <img src={check} alt='ticekt-funnel-logo' className="img-class" style={{ margin: 0 }} />
          </div>
        </Row> */}

        <Row>
          <Col sm="10" >
          <QRCode className="bigQR" value={window.location.pathname.substring(window.location.pathname.lastIndexOf('3001') + 1)} size="300" />
          </Col>
         
        </Row>

        <Row>
{/*           
          <Col sm="3">
          <button className="tf-btn" onClick={onclickHandler}>Send Another</button>
          </Col> */}
          
        </Row>
       


      </Container>




    
  </div > 

);

}

export default Issueverf;