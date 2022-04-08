import React from 'react';
import {
  Row, Col, Container
} from 'reactstrap';

//Import Assets for the landing pages

import PckCard from '../cards/PckCard';
import { casual, social, organization, festival } from '../cards/Data';



function PackageCards() {
  return (
    <div className="PackageCards">
  
        <h2 className="packages-title">
          Packages
        </h2>
        <Container>
          <Row>
            {/* <Col sm="3">
              <PckCard {...casual} />
            </Col> */}
            <Col sm="4">
              <PckCard {...social} />
            </Col>
            <Col sm="4">
              <PckCard {...organization} />
            </Col>
            <Col sm="4">
              <PckCard {...festival} />
            </Col>
          </Row>
        </Container>



    </div>
  )
}

export default PackageCards;