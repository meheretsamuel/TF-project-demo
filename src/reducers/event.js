import { 
    CREATE_EVENT_FAIL, 
    CREATE_EVENT_SUCC,
    GET_EVENTS, EVENT_ERROR, 
    CREATE_ENDP_I_SUCC, CREATE_ENDP_G_SUCC,
    CREATE_ENDP_FAIL
 } from "../actions/types";

    const initialState = {
        event: null,
        events: [],
        loading: true,
        error: {},
        gtSccess: false,
        imessage: null,
        gmessage:null
        
    }

    export default function(state = initialState, action) {
        const {type, payload} = action;

        switch(type) {
            case GET_EVENTS:
                return {
                    ...state,
                    event:payload,
                    loading:false
                }
            
            case EVENT_ERROR:
                return {
                    ...state,
                    loading:false
                }
            case CREATE_EVENT_FAIL:
                return {
                    ...state,
                    loading:false
                }
            case CREATE_EVENT_SUCC:
                return {
                    ...state,
                    loading:false
                }
            
            case CREATE_ENDP_I_SUCC:
                return {
                    ...state,
                    loading:false,
                    gtSccess:true,
                    imessage:payload.message
                }
            case CREATE_ENDP_G_SUCC:
                return {
                    ...state,
                    loading:false,
                    gtSccess:true,
                    gmessage:payload.message
                }
            case CREATE_ENDP_FAIL:
                return {
                    ...state,
                    loading: false,
                    error:payload
                }
            
            
            default:
                return {...state}
        }
    }