import React from 'react';
import { Button, Form, FormGroup, Input } from 'reactstrap';
import { Container, Row } from 'reactstrap';

import "./contactus.css"



function ContactUs() {
  return (
    <div className="contactus-wrapper">
      <Row>
        <h2 className="conTitle text-center">Contact Us</h2>
      </Row>
      <Row>

        <Container className="contactus-inside">
          <Form>
            <FormGroup className="form-group">
              {/* <Label for="exampleEmail">Email</Label> */}
              <Input type="email" name="email" id="exampleEmail" placeholder="Email" />
            </FormGroup>
            <FormGroup>
              {/* <Label for="exampleAddress">Subject</Label> */}
              <Input type="text" name="subject" id="subject" placeholder="Subject" />
            </FormGroup>
            <FormGroup>
              {/* <Label for="exampleAddress2">Body</Label> */}
              <Input type="textarea" rows="5" name="body" id="body" placeholder="Body" />
            </FormGroup>
            <Button className="mx-auto">Send</Button>
          </Form>
        </Container>


      </Row>
    </div >

  )
}

export default ContactUs;