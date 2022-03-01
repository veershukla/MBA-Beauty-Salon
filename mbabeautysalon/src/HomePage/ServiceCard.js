import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';

export default ({ service }) => {
  return (
    <Link
      style={{ textDecoration: 'none', color: 'black' }}
      to={`/${service.toLowerCase().split(' ').join('')}`}
    >
      <Card className="serviceCard">
        <Card.Body>
          <Card.Text>{service}</Card.Text>
        </Card.Body>
      </Card>
    </Link>
  );
};
