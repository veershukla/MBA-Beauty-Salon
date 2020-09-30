import React from 'react';
import { Card } from 'react-bootstrap';

export default ({ service, setPage }) => {
  return (
    <Card
      className="serviceCard"
      onClick={() => {
        setPage(service);
      }}
    >
      <Card.Body>
        <Card.Text>{service}</Card.Text>
      </Card.Body>
    </Card>
  );
};
