import React, { Fragment, useState } from 'react';

//Layout Imports
import {
  Row, Col, Label, Container, FormText, Alert
} from 'reactstrap';
import { Button, Form, FormGroup, Input } from 'reactstrap';

//Redux Imports
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setAlert } from '../../../actions/alert';
import AlertS from '../../alert/Alert';
import { createanevent } from '../../../actions/event';


//Import Assets for the landing pages
import './ceComp.css'




const init = [

]

function AddEvent({ setAlert, createanevent }) {



  //the deets
  const [values, setvalues] = useState({
    name: '',
    type: '',
    size: '',
    event_id: '',
    event_date: '',
    parameters: {
      email_supported: false,
      qr_supported: false,
      barcode_supported: false,
      csv_supported: false,
      bot_supported: false,
      sms_supported: false,
      redemption_endpoint: false,
      issuing_endpoint: false,
      unlimited_ticket_count: false
    }
  });

  const rmin = values.type == 'social' ? 50 : values.type == 'organization' ? 150 : 300;
  const rmax = values.type == 'social' ? 100 : values.type == 'organization' ? 300 : 1000;




  const handleChange = (e) => {
    const { name, value } = e.target;
    values.event_id = `${values.name}-${values.type}`;
    setvalues({
      ...values,
      [name]: value
    })
  }




  const handleSubmit = async (e) => {
    e.preventDefault();
    //Error handling?
    setAlert('Attempting to submit', 'smol-event');

    createanevent(values);

  }

  values.type = window.location.pathname.substring(window.location.pathname.lastIndexOf('/') + 1)
  values.event_id = `${values.name}-${values.type}`;

  return (
    <Fragment>

      <Container className="addemail-wrapper">

        <h2 className="invt text-center">Create An Event</h2>
        <AlertS />
        <Form onSubmit={handleSubmit}>

          <Container className="wide-form-wrapper">

            <Row>

              {/* Event Name */}
              <Col sm="8">
                <FormGroup className="form-group">
                  <Label className="labeltxt mb-2" for="exampleEmail">Event Name</Label>
                  <Input
                    required
                    type="text"
                    id="eventname"
                    placeholder="Enter Event Name "
                    name='name'
                    value={values.name}
                    onChange={handleChange}
                  />
                </FormGroup>
              </Col>

              {/* Number of People coming */}
              <Col sm="12">
                <FormGroup className="form-group">
                  <Label className="labeltxt mr-2" for="peopleNumber">Number Of People: {values.size}</Label>
                  <Row sm="10" className="mb-4">
                    <Input
                      required
                      type="range"
                      id="size"
                      name="size"
                      placeholder=" "
                      step="1"
                      required
                      min={rmin}
                      max={rmax}
                      value={values.size}
                      onChange={handleChange}
                    />
                  </Row>


                </FormGroup>
              </Col>

            </Row>

            {/* Support Delivery Types */}
            <Row className="mb-4">

              <Label className="labeltxt  mb-2">Supported Delivery</Label>

              <Col sm="2">
                <FormGroup check>
                  <Label check>
                    <Input
                      name='email_supported'
                      value={values.email_supported}
                      onChange={values.parameters.email_supported = !values.parameters.email_supported}
                      type="checkbox" id />
                    Email
                  </Label>
                </FormGroup>
              </Col>
              <Col sm="2">
                <FormGroup hidden={values.type == 'social'} check>
                  <Label check>
                    <Input
                      
                      name='sms_supported'
                      value={values.parameters.sms_supported = !values.parameters.sms_supported}
                      onChange={handleChange}
                      type="checkbox" />
                    SMS
                  </Label>
                </FormGroup>
              </Col>

            </Row>


            {/* Rdemption Types */}
            <Row hidden={values.type == 'social'} className="mb-4">

              <Label className="labeltxt  mb-2">Supported Redemption</Label>

              <Col sm="2">
                <FormGroup check>
                  <Label check>
                    <Input
                      name='qr_supported'
                      value={values.parameters.qr_supported}
                      onChange={values.parameters.qr_supported = !values.parameters.qr_supported}
                      type="checkbox" id />
                    QR Code
                  </Label>
                </FormGroup>
              </Col>


            </Row>

            <Row >
              <Col sm="4">
                <FormGroup >
                  <Label className="mb-2" for="exampleDate">Event Date</Label>
                  <Input
                    required
                    type="date"
                    value={values.event_date}
                    name="event_date"
                    id="eventDate"
                    placeholder="date placeholder"
                    onChange={handleChange}
                  />
                </FormGroup>
              </Col>

            </Row>

            <Row>
              <Col sm="10">
                <FormGroup>
                  <Label className="mb-2" for="exampleText">Event Type</Label>
                  <Input
                    type="textarea"
                    name="type"
                    id="venue"
                    disabled
                    placeholder={window.location.pathname.substring(window.location.pathname.lastIndexOf('/') + 1)} />
                </FormGroup>
              </Col>
            </Row>

            <Row>
              {/* <FormGroup>
              <Col sm="4" className="mb-2 mt-2">
                <Label for="exampleFile">Design</Label>
              </Col>

              <Col sm="auto">

                <Input type="file" name="file" id="exampleFile" />
                </Col>
                <Col sm="12">
                  <FormText color="muted">
                    Upload materials you think should factor into the design.
                  </FormText>
                </Col>
              </FormGroup> */}
            </Row>

            <Row>
              <Col>
                <Button
                  type="submit"

                  className="oto mt-2">Create Event</Button>
              </Col>
            </Row>

          </Container>

        </Form>
      </Container >

    </Fragment>

  );
};

AddEvent.propTypes = {
  setAlert: PropTypes.func.isRequired,
  createanevent: PropTypes.func.isRequired
}

export default connect(null, { setAlert, createanevent })(AddEvent);