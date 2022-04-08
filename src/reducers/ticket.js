import {
    TICK_CREAT_FAIL, TICK_CREAT_SUCC,
    TICK_RED_FAIL, TICK_RED_SUCC,
} from "../actions/types";

const initialState = {
    ticket: null,
    tickets: [],
    loading: true,
    error: {},
    tcScc: false,
    redScc: null,
    redRes: null
}

export default function(state = initialState, action) {
    const {type, payload} = action;

    switch(type) {
        case TICK_CREAT_SUCC:
            return{
                ...state, 
                ticket: payload,
                //payload: status and ticket_id
                loading: false
            }
        case TICK_CREAT_FAIL:
            return {
                ...state,
                loading:false
            }
        
        case TICK_RED_SUCC:
            return {
                ...state,
                redRes: payload,
                loading: false,
                redScc: true
            }
        
        case TICK_RED_FAIL:
            return {
                ...state,
                loading: false,
                redScc: false
            }
        default:
            return {
                ...state
            }
        
    }
}