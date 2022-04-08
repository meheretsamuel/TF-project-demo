import axios from "axios";
import { setAlert } from "./alert";

import { CREATE_EVENT_SUCC, CREATE_EVENT_FAIL, 
  CREATE_ENDP_I_SUCC, CREATE_ENDP_G_SUCC,
  CREATE_ENDP_FAIL, 
  GET_EVENTS, EVENT_ERROR } from "./types";

export const createanevent = (values) => async dispatch => {
    const config = {
        headers: {
          'Content-Type' : 'application/Json'
        }
      }
      
      console.log(values);

      const newEvent = values;

      setAlert(values);

      const body = JSON.stringify(newEvent);

      try {
        
        const res = await axios.post('/api/client/createPlan', body, config);

        dispatch({
            type: CREATE_EVENT_SUCC,
            payload: res.data
        })

        console.log(res.data)

        setAlert("Event created!", 'smol-event')
          
      } catch (error) {

        console.log(error);
        

          dispatch({
              type:  CREATE_EVENT_FAIL,
              payload: error
          })
          
      }
}

export const getevent = (event_id) => async dispatch => {
  const config = {
    headers: {
      'Content-Type' : 'application/Json'
    }
  }

  console.log(`Event ID: ${event_id}`);

  const body = JSON.stringify(event_id);

  console.log(body);

  try{

      const res = await axios.post('api/client/getEvent', {event_id:event_id}, config);

      dispatch({
        type:GET_EVENTS,
        payload: res.data
      })

      console.log(res.data);
  }

  catch (error) {

    console.log(error);

    console.log("Getting events failed");

    dispatch({
      type:  EVENT_ERROR
  })



  }
}

export const createEndpoint = (event_id, agent_type) => async dispatch => {
  const config = {
    headers: {
      'Content-Type' : 'application/Json',
      'Authorization' : axios.defaults.headers.common['Authorization']
    }
  }
  
  console.log();



  setAlert({event_id, agent_type});

  const body = JSON.stringify({event_id, agent_type});

  try {
    console.log(agent_type)
    const res = await axios.post('/api/client/createEndpoint', body, config);

    if (agent_type == 'issuer') {
        dispatch({
          type: CREATE_ENDP_I_SUCC,
          payload: res.data
      })
    }
    else {
        dispatch({
          type: CREATE_ENDP_G_SUCC,
          payload: res.data
      })
    }


    console.log(res.data)

    setAlert("Endpoint created!", 'smol-event')
      
  } catch (error) {

    console.log(error);
    

      dispatch({
          type:  CREATE_ENDP_FAIL
      })
      
  }
}