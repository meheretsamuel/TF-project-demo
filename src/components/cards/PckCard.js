import React from 'react';
import {
  Card, CardText,
  CardTitle, Button
} from 'reactstrap';

import './cards.css'


//Import Assets for the landing pages



function PckCard({ title, desc, ftr, img, lecolor, button, where, circled }) {
  return (
    <div sm="7" className="card-wrapper">
      <Card body className="text-center dueCard" outline style={{"border-color":lecolor}}>
        <CardTitle tag="h5">{title}</CardTitle>
        <img className={circled ? "justify-content-md-center ccircle circled" : 'justify-content-md-center ccircle'} src={img} alt="event type indicator"/>

        <CardText className="carddesc">{desc}</CardText>
        <CardText className="cardtext">{ftr[1]}</CardText>
        <CardText className="cardtext">{ftr[2]}</CardText>
        <CardText className="cardtext">{ftr[3]}</CardText>

        <Button className={button ? '' : 'hidden'} style={{"background-color":lecolor}} href={where}>{button}</Button>
      </Card>
    </div>
  );
};

export default PckCard;