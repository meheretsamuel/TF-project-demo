import { CLEAR_PROFILE, GET_PROFILE, PROFILE_ERROR } from "../actions/types";

const initialState = {
    profile: null,
    profiles: [],
    events: [],
    loading: true,
    error: {}
}

export default function(state = initialState, action) {
    const {type, payload} = action;

    switch(type) {
        case GET_PROFILE:
            return {
                ...state,
                profile: payload,
                loading: false
            }
            //TODO
        case PROFILE_ERROR: 
            return {
                ...state,
                error: payload,
                loading: false
            }
        
        case CLEAR_PROFILE:
            return{
                ...state,
                profile: null,
                loading: false
            }
            //TODO
        default:
            return state;
    }
}