import React, { useState } from 'react';
import {

 Row, Col, Label, Container
} from 'reactstrap';

import { Button, Form, FormGroup, Input } from 'reactstrap';

import './ceComp.css'
//Import Assets for the landing pages

function Email(props) {
  return (
    <li>{props.email}</li>
  );
}

const init = [

]

function AddEmail(props) {
  const [emails, setemails] = useState(init);
  //keeps an eye on the field, leave this alone
  const [email, setemail] = useState('');

  //const emailList = init.map(email => email.name)
  const emailList = emails.map(email => <Email email={email.name} />)

  console.log(emailList.values);


  //state handler
  function ischange(e) {
    setemail(e.target.value);
  }

  //prop caller and wiper
  function onaddemail(e) {
    e.preventDefault();
    if (email == "") {
      alert("No.");
      setemail("");
    }
    else {
      const newEmail = { name: email }

      setemails([...emails, newEmail])


      console.log(email);
      setemail("");
    }

  }


  return (
    <Container>
      <Container className="addemail-wrapper">
        <h2 className="invt text-center">Invite Friends</h2>
        <Form>

          <Container className="form-wrapper">

            <Row>
              <FormGroup className="form-group">
                <Label className="labeltxt" for="exampleEmail">Enter Email</Label>
                <Input
                  type="email"
                  name="email"
                  id="exampleEmail"
                  placeholder=" "
                  value={email}
                  onChange={ischange} />
              </FormGroup>
            </Row>

            <Row>
              <Col>
                <Button
                  type="button"
                  onClick={onaddemail}
                  className="oto">Add Email</Button>
              </Col>
            </Row>

          </Container>

        </Form>
      </Container>


      <Container className="mt-5">
        <h4 className="invt  text-center">Added Emails</h4>
        <ul>
          {emailList}
        </ul>
      </Container>
    </Container>
  );
};

export default AddEmail;