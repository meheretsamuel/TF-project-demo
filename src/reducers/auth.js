import { 
    REGISTER_SUCCESS, 
    REGISTER_FAIL,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    USER_LOADED,
    AUTH_ERROR,
    LOGOUT 
} from "../actions/types";

const initialState = {
    token: localStorage.getItem('token') || null,
    isAuthenticated: null,
    loading: true, 
    user: null
}

export default function (state = initialState, action) {
    const {type, payload}  = action;



    switch(type) {
        case USER_LOADED:
            return {
                ...state,
                isAuthenticated:true,
                loading:false,
                user:payload
            }

        case REGISTER_FAIL:
        case AUTH_ERROR:
        case LOGOUT:
            localStorage.removeItem('token');
            return {
                ...state,
                token:null,
                isAuthenticated:false,
                loading: false
            }
            
        case REGISTER_SUCCESS:
            return {...state, loading: false};

        case REGISTER_FAIL:
            //localStorage.removeItem('token');
            return {...state, token: null, isAuthenticated: false, loading:false };
        
        case LOGIN_SUCCESS:
            //On login success
            localStorage.setItem('token', payload.token);
            return {...state, ...payload, isAuthenticated: true, loading: false};

        case LOGIN_FAIL:
            localStorage.removeItem('token');
            return {...state, token: null, isAuthenticated: false, loading:false };

        


        default:
            return {...state};
    }
}