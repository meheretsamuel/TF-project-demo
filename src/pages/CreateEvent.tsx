import React from 'react';

import { Col, Row } from 'reactstrap';

//Import Components for the landing pages
import Navbar from '../components/navbar/navbar';


import CardZone from '../components/createvent/CardZone';
import FormZone from '../components/createvent/FormZone';



function CreateEvent(props: { location: any; }) {
  return (
    <div className="createvent">
      {/* figure out how to pass props into this thing */}

      {/* @ts-ignore */}
      <Navbar />
      <Row>
        <Col sm= "3">
        <CardZone />
        </Col>
        <Col sm = "8">
        <FormZone />
        </Col>
      </Row>
      
    </div>

  )
}

export default CreateEvent;