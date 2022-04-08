
import logo from '../../assets/tf.png';
import React, {useState} from 'react';

import { useHistory } from 'react-router-dom';

import { Redirect } from 'react-router';

//Redux Imports
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setAlert } from '../../actions/alert';
import { issTicket } from '../../actions/ticket';

import Alert from '../alert/Alert';
import { stat } from 'fs';




function IssueTicket({setAlert, issTicket, auth, ticket}) {

 
      
  

  

  const [values, setvalues] = useState({
    ekey: '',
    pkey: '',
    index: 0
    //,agent_id
  })

    // if (!auth.loading) {
    //   values.index = auth.user.client.events[0];
    // }

    const history = useHistory();

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    // values.index = auth.user.client.events[0];
    
    let tid = ' '
    //email delivery
    await issTicket([values.ekey, values.index])
    

      console.log(tid);

    let dummystring = "ezrxtcyvguhbjnk"
   


    // history.push(`/issue-ticket-success/${ticket.ticket._id}`)
    //phone delivery
    // Take your form values here
    //console.log("Name:",e.target.elements.name.value, "\nPhone:",e.target.elements.phone.value, "\nEmail:",e.target.elements.email.value)
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    //values.event_id = `${values.name}-${values.type}`;
    setvalues({
      ...values,
      [name]: value
    })
  }

  return ( 
    <div className = 'layout-stuff'>
    <div>
      <div>
        <img src = {logo} alt = 'ticekt-funnel-logo' className="img-class"/>
      </div>

      
      <form className="form-class" onSubmit={onSubmitHandler}>
      <label className="mb-5" htmlFor="text">For Event: {values.index}</label>
      <Alert /> 
        {/* <label htmlFor="text">Name</label>
      
        <input type="text" onChange={handleChange} style={{textAlign:'center'}} name="name"/> */}
       
        {/* <label htmlFor="text">Phone</label>
        <br></br>
        <input type="text" onChange={handleChange} disabled  style={{textAlign:'center'}} name="pkey"/> */}
        
        <label htmlFor="text">Email</label>
        <br></br>
        <input type="text" onChange={handleChange} required value={values.key}  style={{textAlign:'center'}} name="ekey"/>
        <br></br> 
        <button className="tf-btn" type="submit">Issue</button>  
   
      </form>

      <br></br>
        {/* <button className="tf-btn" type="submit" disabled={ticket.loading} onClick={()=> history.push(`/issue-ticket-success/${ticket.ticket._id}`)}>{ticket.loading ? 'Issue A ticket First' : 'View in Qr'}</button>  */}
    </div>      
  </div> 
);



  }

  


IssueTicket.propTypes = {
  setAlert: PropTypes.func.isRequired,
  issTicket: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  auth: state.auth,
  ticket: state.ticket
});


export default connect (mapStateToProps, {setAlert, issTicket}) (IssueTicket);
