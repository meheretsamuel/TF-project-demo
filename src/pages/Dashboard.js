import React, {Fragment, useEffect} from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

//React redux
import { connect } from 'react-redux';
import { getCurrentProfile } from '../actions/profile';


//Layout Imports
import { Col, Container, Row } from 'reactstrap';
import Navbar from '../components/navbar/navbar';
import Head from '../components/dashboard/Head';
import Visual from '../components/dashboard/Visual';
import EPoints from '../components/dashboard/EPoints';
import '../components/dashboard/dash.css';

import { Button } from '../components/Button/Button';

import { Spinner } from 'reactstrap';


function Dashboard({getCurrentProfile, auth, profile: {profile, loading}}) {
    
    useEffect(
        () => {getCurrentProfile()}, 
        []
    )
    
    return loading && profile === null ? <Col> <Spinner type="grow" color="info" /></Col> : (
    <Container>
          {/* @ts-ignore */}
      <Navbar />
        <Row className="head">
            <Head {...auth}/>
        </Row>

         <Fragment> 
             <p>You do not have a endpoints for issuing/gatekeeping. Please set it up. </p> 
            <Link to='/createProfile' className="btn btn-primary my-1">
                Set Up Endpoints
            </Link>

            <Button className="oto mt-2 ml-3" onClick={(e)=> {
                window.open("http://localhost:3000/api/client/createTicketCSV?event_id="+auth.user.client.events[0], "_blank")
                //TODO
                }}>Export Tickets</Button>
            
            <Button className="oto mt-2 ml-3" onClick={(e)=> {
                window.open("http://localhost:3000/api/client/createAgentCSV?event_id="+auth.user.client.events[0], "_blank")
                //TODO
                }}>Export Agents</Button>

            <Button className="oto mt-2 ml-3" onClick={(e)=> {
                window.open("http://localhost:3001/issue-ticket");
                //TODO
                }}>Issue Tickets</Button>

<Button className="oto mt-2 ml-3" onClick={(e)=> {
                window.open("http://localhost:3001/upload-qr");
                //TODO
                }}>Redeem Tickets</Button>

<Button className="oto mt-2 ml-3" onClick={(e)=> {
                window.open("http://localhost:3001/api/client/agent");
                //TODO
                }}>Agents</Button>
         
         </Fragment> 

         <Row className="bottom">
            <Col sm="6" className="vis">
                <Visual />
            </Col>
            {/* <Col sm="4" className="ep">
                <EPoints />
            </Col> */}
        </Row> 
    </Container>)
}

Dashboard.propTypes = {
    getCurrentProfile: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    profile: PropTypes.object.isRequired
}


const mapStateToProps = state => ({
    auth: state.auth,
    profile: state.profile
})


export default connect(mapStateToProps, {getCurrentProfile}) (Dashboard);