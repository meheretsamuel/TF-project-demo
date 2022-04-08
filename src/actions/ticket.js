import { rejects } from "assert";
import axios from "axios";
import { resolve } from "dns";
import { setAlert } from "./alert";

import { useHistory } from 'react-router-dom';

import { 
    TICK_CREAT_SUCC, TICK_CREAT_FAIL,
    TICK_RED_SUCC, TICK_RED_FAIL
} from "./types"

export const issTicket = (values) => async dispatch => {

    const history = useHistory();

    const config = {
        headers: {
            'Content-Type' : 'application/Json'
          }
    }

    console.log(values);

    //sanitize payload
    let key = values[0];
    let index = values[1];

    // if (values['ekey'] !== '') key = values['ekey'];
    // else key = values['pkey'];

   

    console.log({key, index});

    //wrap and edit as necessary
    const newTicket = values;

    // console.log({key, index});

    const body = JSON.stringify({key, index});

    try {
        const res = await axios.post('/api/ticket/createTicket', body, config);

        dispatch ({
            type:TICK_CREAT_SUCC,
            payload:res.data
        })

        console.log(res.data)

        // setAlert("Ticket Issued", "smol-event");
        dispatch(setAlert("Ticket Issued", "smol-ticket-good"));

        

    } catch (error) {
        console.log(error);

        dispatch ({
            type:TICK_CREAT_FAIL,
            payload: error
        })

        console.log(error);


    }



}

export const redTicket = ({key, ticket_id}) => async dispatch => {
    const config = {
        headers: {
            'Content-Type' : 'application/Json'
          }
    }

   

    console.log(`Trying to redeem email: ${key} and ${ticket_id}`);

    
    //clean and wrap here

    const aTicket = {key, ticket_id};

    // console.log(aTicket);

    const body = JSON.stringify(aTicket);

    try {

        const res = await axios.post('/api/ticket/redeemTicket', body, config);

        dispatch ({
            type:TICK_RED_SUCC,
            payload:res.data
        })

        console.log(res.data)

        dispatch(setAlert("Ticket Redeemed", "smol-ticket-good"));
        //redirect to the succ page, unless front end does that by itself

       

    } catch (error) {

        console.log(error);

        dispatch ({
            type:TICK_RED_FAIL,
            payload: error
        })

        dispatch(setAlert("Ticket is either redeemed or invalid. Try another.", "smol-ticket-bad"));

        console.log(error);
        
    }

}