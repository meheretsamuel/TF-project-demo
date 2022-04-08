import React from "react";
import { Row, Col, Container } from "reactstrap";

import { Route, Router, Switch } from "react-router-dom";
//Import Assets for the landing pages

import "./cardzone.css";
import AddEmail from "./components/addemail";
import AddEvent from "./components/addevent";
import InviText from "./components/InviText";

import { sample } from "./components/Event";

import Event from "./components/Event";

import { createBrowserHistory } from "history";
const history = createBrowserHistory();

function FormZone(props) {
  function addanemail(email) {
    alert(email);
  }
  return (
    <Container className="cardzone-wrapper">
      <Row>
        <Col sm="11">
          <AddEvent />
        </Col>
      </Row>
    </Container>
  );
}



export default FormZone;
