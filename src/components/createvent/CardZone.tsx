import React from 'react';
import {
 Container
} from 'reactstrap';

import { Route, Router} from 'react-router-dom';
//Import Assets for the landing pages

import PckCard from '../cards/PckCard';
import { casual, social, organization, festival } from '../cards/Data';
import './cardzone.css'

import { createBrowserHistory } from 'history';
const history = createBrowserHistory();

function CardZone() {
  return (
    <Container className="cardzone-wrapper mt-10">
      <Router history={history}>
          <Route path="/createvent/casual">
            <PckCard {...casual} />
          </Route>
          <Route path="/createvent/social">
            <PckCard {...social} />
          </Route>
          <Route path="/createvent/organization">
            <PckCard {...organization} />
          </Route>
          <Route path="/createvent/festival">
            <PckCard {...festival} />
          </Route>
        


      </Router>
    </Container>
  )


}

export default CardZone;