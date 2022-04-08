import React from 'react';
import {
  Row, Col, Container
} from 'reactstrap';

import { Button, Form,  Input } from 'reactstrap';

import './ceComp.css'
//Import Assets for the landing pages




function InviText() {
  return (

    <Container className="addemail-wrapper">
      <h2 className="invt text-center">Invitation Text</h2>

      <Form>
        <Container className="form-wrapper">
          <Row>
            <Input type="textarea" rows="5" name="body" id="body" placeholder="Write your invitation text here" />
          </Row>
          <Row>
            <Col>
              <Button className="mt-2" outline >Confirm</Button>
            </Col>
          </Row>
        </Container>
      </Form>


    </Container>



  );
};

export default InviText;