import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import { useEffect } from 'react';

//Redux Imports
import { Provider } from 'react-redux';
import store from './store'


//Import the start page, landing page for now, add routing later
import LandingPage from './pages/LandingPage';
import LogIn from './pages/LogIn'
import Register from './pages/Register';
import Fourohfour from './pages/fourohfour';
import CreateEvent from './pages/CreateEvent';
import Tutorial from './pages/Tutorials';
import Dashboard from './pages/Dashboard';
import Uploadqr from './components/UploadQr/uploadqr';
import VerfQr from './components/verfiedqr/verified';
import ScanAgain from './components/scanAgain/scanAg';
import issueTicket from './components/issueTicket/issueTicket';
import issueverf from './components/issueTicketVerf/issueverf';
import keyinput from './components/keyInput/keyinput';


import Agent from './components/agent/Agent';


import CreateProfile from './components/dashboard/createProfile';

import PrivateRoute from './components/routing/PrivateRoute';

import { loaduser } from './actions/auth';
import setAuthToken from './helpers/setAuthToken';


if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(()=> {
    store.dispatch(loaduser());
  }, [])

  return (
    <Provider store={store}>
      <Router>

        <Switch>

          <Route exact path="/">
            <LandingPage />
          </Route>

          <Route path="/packages">
            <LandingPage />
          </Route>

          <Route path="/login">
            <LogIn />
          </Route>

          <Route path="/register">
            <Register />
          </Route>

          <Route path="/tutorial" >
            <Tutorial />
          </Route>


          <Route path="/createvent/" component={CreateEvent} />
          <Route path="/scan-success/" component={VerfQr} />
          <Route path="/upload-qr/" component={Uploadqr} />
          <Route path="/scan-fail/" component={ScanAgain} />
          <Route path="/issue-ticket/" component={issueTicket} />
          <Route path="/issue-ticket-success/" component={issueverf} />
          <Route path="/api/ticket/" component={issueverf} />
          <Route path="/key-input/" component={keyinput} />
          <Route path="/api/client/agent/">
            <Agent />
          </Route>

          {/* <Route path="/createvent/" component={CreateEvent} /> */}


          {/* @ts-ignore */}
          <PrivateRoute exact path='/dashboard' component={Dashboard} />
           {/* @ts-ignore */}
          <PrivateRoute exact path='/createProfile' component={CreateProfile} />
          {/* @ts-ignore */}
          <PrivateRoute exact path="/createvent/social" component={CreateEvent} />
          {/* @ts-ignore */}
          <PrivateRoute exact path="/createvent/organization" component={CreateEvent} />
          {/* @ts-ignore */}
          <PrivateRoute exact path="/createvent/festival" component={CreateEvent} />
          
              
          
          <Route component={Fourohfour} />
        </Switch>
      </Router>
    </Provider>


  );
}

export default App;
