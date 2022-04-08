import axios from "axios";
import { REGISTER_SUCCESS, REGISTER_FAIL } from "./types";
import { LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT } from "./types";
import { USER_LOADED, AUTH_ERROR, CLEAR_PROFILE } from "./types";

import setAuthToken from "../helpers/setAuthToken";

import { setAlert } from "./alert";


//Load User
export const loaduser = () => async dispatch => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
    
  }

  try {

    const res = await axios.get('/auth/current');
 
    dispatch({
      type: USER_LOADED,
      payload: res.data
    })

  } catch (err) {
    dispatch({
      type:AUTH_ERROR
    })
  }
}



//Register User
export const register = ({name, password, email, organization, tin, phone_number}) => async dispatch => {
    const config = {
        headers: {
          'Content-Type' : 'application/Json'
        }
      }

      const newClient = {
        name, password, email, organization, tin, phone_number
      }

      setAlert(newClient);

      const body = JSON.stringify(newClient);

      try {
        const res = await axios.post('/auth/register', body, config);

        dispatch({
            type: REGISTER_SUCCESS,
            payload:res.data
        })

        dispatch(setAlert("Registration is a Success!", 'smol'));
        
      }

      catch (err) {
          const errors = err.response.data.errors;


          console.log(err.response.data.error.message);
          dispatch(setAlert(`${err.response.data.error.message}`, 'smol'));

          // if(errors) {
          //     errors.forEach(error => dispath(setAlert(error.msg, 'smol')))
          // }
          //   dispath({
          //       type:REGISTER_FAIL
          //   })
      }
      
}

//Log In User
export const login = ({email, password}) => async dispatch => {
    const config = {
        headers: {
          'Content-Type' : 'application/Json'
        }
      }

      console.log([email, password]);

      const body = JSON.stringify({email, password});

      try {
        const res = await axios.post('/auth/login', body, config);

        dispatch({
            type: LOGIN_SUCCESS,
            payload:res.data
        })

        dispatch(setAlert("You are now logged in!", 'smol'));

        //dispath load user

      }

      catch (err) {
       

          dispatch({
            type: LOGIN_FAIL
        })

          //console.log(err.response.data.error.message);
          if (err == "Error: Request failed with status code 400"){
            dispatch(setAlert(`Wrong password`, 'smol-event'));
          }
          else {
            dispatch(setAlert(`${err}`, 'smol'));
          }
          

          // if(errors) {
          //     errors.forEach(error => dispatch(setAlert(error.msg, 'smol')))
          // }
          // dispatch({
          //       type:LOGIN_FAIL
          //   })
      }
      
}


//Logout

export const logout = () => dispatch => {
  dispatch({
    type:CLEAR_PROFILE
  })
  dispatch({
    type:LOGOUT
  })
  window.location.reload();

}