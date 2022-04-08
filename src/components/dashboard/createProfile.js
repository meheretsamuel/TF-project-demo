import React, { Fragment, useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { FormGroup, Form, Label, Input, Container } from 'reactstrap'

import Navbar from '../navbar/navbar'
import { setAlert } from '../../actions/alert'

import Alert from '../alert/Alert'
import { Button } from 'reactstrap'
import { createEndpoint } from '../../actions/event'

const CreateProfile = ({setAlert, createEndpoint, event, auth}) => {

    const [formData, setFormData] = useState({
        issuer: '',
        gatekeeper: ' '
    })

    const onChange = e => {
        setFormData({formData, [e.target.name]: e.target.value});

    }

    //sdsd

    const handleSubmitIssu= async (e) => {
        e.preventDefault();

        console.log(formData.issuer, formData.gatekeeper)

        
        await createEndpoint('dumb_id', 'issuer');
        
        console.log(event);

        setAlert('Attempting to create issuer', 'smol-event');
    }

    const handleSubmitGate= async (e) => {
        e.preventDefault();

        console.log(formData.issuer, formData.gatekeeper)

        console.log(auth.user.client.events[0]);

        await createEndpoint(auth.user.client.events[0], 'REDEEMER');

        console.log(event);

        setAlert('Attempting to create gatekeeper', 'smol-event');
    }


    return (
    <Fragment>
        {/* @ts-ignore */}
        <Navbar />
        <Container className="whatisyou">

            <h3 className="mb-5">Create/Update Your Endpoints</h3>
           <Alert/>
           <Form onSubmit={handleSubmitIssu}>
                <FormGroup className="form-group">
                    <Label className="labeltxt mb-2" for="exampleEmail">Issuer Endpoint: </Label>
                    <Input
                        type="text"
                        id="issuer"
                        name="issuer"
                        disabled
                       
                       
                        value={event.imessage}
                    />
                </FormGroup>
                <input type="submit" className="btn btn-primary my-1" ></input>
                <Label >
                    
                
                    </Label>
                
            </Form>
            <Button className="oto mt-2 ml-3" onClick={(e)=> {window.open(event.imessage, "_blank")}}>Validate Endpoint</Button>

            <Form className="mt-4" onSubmit={handleSubmitGate}>
                <FormGroup className="form-group">
                    <Label className="labeltxt mb-2" for="exampleEmail">Gatekeeper Endpoint: </Label>
                    <Input
                        type="text"
                        id="gatekeeper"
                        name="gatekeeper"
                        disabled
                        // placeholder= {event.message}
                      
                        value={event.gmessage}
                    />
                </FormGroup>
                <input type="submit" className="btn btn-primary my-1" ></input>
                
                {/* <a className="btn btn-light my-1" href="/dashboard">Go Back</a> */}
            </Form>
            <Button className="oto mt-2 ml-3" onClick={(e)=> {window.open(event.gmessage, "_blank")}}>Validate Endpoint</Button>

        </Container>
    </Fragment>
    );
}




CreateProfile.propTypes = {
    setAlert: PropTypes.func.isRequired,
    createEndpoint: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    event: state.event,
    auth: state.auth
});

export default connect(mapStateToProps, {createEndpoint, setAlert}) (CreateProfile)
