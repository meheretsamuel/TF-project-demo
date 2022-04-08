import React from 'react'
import alertReducer from './alert'
import authReducer from './auth';
import profileReducer from './profile';
import eventReducer from './event';
import ticketReducer from './ticket';

import { combineReducers } from 'redux';

export default combineReducers({
    alert: alertReducer, 
    auth: authReducer,
    profile: profileReducer,
    event: eventReducer,
    ticket: ticketReducer
});
