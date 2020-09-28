import React from 'react';
import { Card } from 'react-bootstrap';

export default ({ service }) => {
  return (
    <Card className="serviceCard">
      <Card.Body>
        <Card.Text>{service}</Card.Text>
      </Card.Body>
    </Card>
  );
};
