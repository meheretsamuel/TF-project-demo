import React, { Fragment } from 'react'
import { Table, Row, Button } from 'reactstrap';

//Redux Imports
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { getevent } from '../../actions/event';


function Visual({auth, getevent, event}) {
  //let event_id = auth.user && auth.user.client.events[0];

  let event_arr = [];
  let eve_len = ''
  // let len = auth.user.client.events.length;

  if (!event.loading) {

  }

  if (!auth.loading) {
    event_arr = auth.user.client.events;
    eve_len = auth.user.client.events.length;
  }
  

  const getAnEvent = async (event_id) => {
    getevent(event_id);
  }

  // if(event_id !== null) {
  //    getevent(event_id)
  // }

    return (
        <div>
            <Row>
                <h5>Events You've Created So Far: {eve_len}</h5>
            </Row>
            
            <Row>
              {/* <p>{event_arr} </p> */}
                <Table>
                  <thead>
                    <tr>
                     
                      <th>Event ID</th>
                      <th>Event Name</th>
                 
                    </tr>
                  </thead>
                  <tbody>

                    {/* Event ID Populate */}
                    {
                      event_arr.map( nvent =>
                        (   <tr>
                             <th>
                                 {nvent}
                             </th>
                              <th>
                                  
                                </th>
                             <th>
                          <Button
                          name={nvent}
                            onClick={(e) => {getAnEvent(e.target.name)}}
                            className="oto ">Details</Button>
                             </th>
                           </tr>)
                         )
                    }

                    {/* Name  */}
                  </tbody>
                </Table>

                
                
                
            </Row>
            <Row>

            </Row>
            
        </div>
    )
}



function Format ({event_arr}) {
  if (event_arr !== undefined && event_arr !== null && event_arr.length > 0) {
  
    return (
          event_arr.map( nvent =>
         (   <tr>
              <th>
                  {nvent}
              </th>
            </tr>)
          )
      );

    }

    else return (
    <Fragment>
      <p>Event array isn't loading</p>
      <p>{event_arr}</p>

    </Fragment>

    );
}


const mapStateToProps = state => ({
  alerts: state.alert,
  auth: state.auth,
  event: state.event
});

Visual.propTypes = {
  getevent: PropTypes.func.isRequired
}

export default connect(mapStateToProps, {getevent}) (Visual)
