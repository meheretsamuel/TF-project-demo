import axios from 'axios';
import { setAlert } from './alert';

import { 
    GET_PROFILE, 
    PROFILE_ERROR } from './types';

//get current profile
export const getCurrentProfile = () => async dispatch => {
    try {

        console.log("Please stop misbehaving");
        // const res = await axios.get('/api/profile/me');

        dispatch({
            type:GET_PROFILE
        });

    } catch (error) {
        console.log(error);

        dispatch({
            type:PROFILE_ERROR
        })
        
    }
}