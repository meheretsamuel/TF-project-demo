import logo from '../../assets/tf.png';
import React, { useState, Component } from 'react';

import { useHistory } from 'react-router-dom';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {redTicket} from '../../actions/ticket';

import Alert from '../alert/Alert'

import QrScan from 'react-qr-reader';

const Uploadqr = ({redTicket, auth, ticket}) => {

  const history = useHistory();

  const onChangeHandler = e => {
    this.setState({ selectedFile: e.target.files[0] });
  }

  const onUploadHandler = (e) => {
    e.preventDefault();
    // const formData = new FormData();

    // formData.append(
    //   "qrFile",
    //   this.state.selectedFile
    // );

    values.ticket_id = qrData.substring(qrData.lastIndexOf('/') + 1);
      console.log(values);

      redTicket(values);


      // history.push(`/scan-success/`);

      // history.push('/scan-fail');

    // Send the `formdata` to the API here
    
    
  }

  const [values, setvalues] = useState({
    key:'',
    ticket_id: ''
  })

  const [qrData, setQrData] = useState('');

  const [key, setkey] = useState('');

  const handleScan = (data) => { if (data) setQrData(data); };

  const handleChange = (e) => {
    const { name, value } = e.target;
    values.ticket_id = qrData.substring(qrData.lastIndexOf('/') + 1);
    console.log(values.ticket_id);
    setvalues({
      ...values,
      [name]: value
    })
  }


    return (         // add ticket funnel logo
      <div className = 'layout-stuff'>
        <div>

          <div>
            <img src = {logo} alt = 'ticekt-funnel-logo'  className="img-class"/>
          </div>

          <Alert />
        
          <form className="form-class">

            <label htmlFor="text">Email</label>
          
            <input type="text" required value={values.key} style={{textAlign:'center'}} name="key" onChange={handleChange}/>
            <br></br>
            <label htmlFor="text">Ticket Link</label>
  
            <input type="text" disabled value={qrData} style={{textAlign:'center'}} name="name"/>
            <br></br>
            <label htmlFor="text">Ticket ID</label>
             <input type="text" disabled value={qrData.substring(qrData.lastIndexOf('/') + 1)} style={{textAlign:'center'}} name="name"/> 

             <br></br>

            <button className="tf-btn" onClick={onUploadHandler}>Verify</button>  
          </form>

          <hr></hr>

       
            <QrScan
                delay={300}
                // eslint-disable-next-line no-console
                onError={(err) => console.log(err)}
                onScan={handleScan}
                style={{ height: 400, width: 400 }}
            />

              {console.log(qrData)}

              {console.log(ticket.tcScc)};

              {/* {qrData && (

                <p>
                   Ticket Link: {qrData}
                </p>
                               
                              
              )} */}
                            
          
           
      
        </div>      
      </div> 

    );


}

Uploadqr.propTypes = {
  redTicket: PropTypes.func.isRequired
}


const mapStateToProps = state => ({
  auth: state.auth,
  ticket: state.ticket
});

export default connect (mapStateToProps, {redTicket}) (Uploadqr);