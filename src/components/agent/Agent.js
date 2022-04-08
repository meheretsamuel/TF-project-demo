import React from 'react'
import PropTypes from 'prop-types'

import { Container, Form, FormGroup, Row, Col, Input, Label } from 'reactstrap'

import { Button } from 'reactstrap'

function Agent(props) {
    return (
        <Container >
            <Row>
                <p>{' '}</p>
                <p>{' '}</p>
                <p>{' '}</p>
                <p>{' '}</p>
                
            </Row>
            <Row >
                <Col sm="12"  md={{ offset: 4 }}>

                    <Form>
                        <FormGroup check>
                            <Row className="mb-2">
                                <Col>
                                    <Label check>
                                        Enter Phone Number OR Email
                                        <Input
                                            name='key'
                                            type='text'
                                        />

                                    </Label>
                                </Col>
                            </Row>



                            <Row className="mb-2">
                                <Col sm="12">
                                    <Label check>
                                        AgentID
                                        <Input
                                            disabled
                                            name='agent_id'
                                            type='text'
                                            value={window.location.pathname.substring(window.location.pathname.lastIndexOf('/') + 1)}
                                        />

                                    </Label>
                                </Col>

                            </Row>

                            <Row className="mb-4">
                                <Col>
                                    <Button
                                        type="submit"

                                        className="oto mt-2">Submit</Button>
                                </Col>

                            </Row>
                        </FormGroup>
                    </Form>

                </Col>
            </Row>

        </Container >
    )
}

Agent.propTypes = {

}

export default Agent

