import React from 'react';
import { Card } from 'react-bootstrap';
import './ServiceCard.css';

export default ({
  serviceTitle,
  serviceDescription,
  arrayOfServiceTypes,
  serviceImages,
}) => {
  const mappedServiceTypes = arrayOfServiceTypes.map((service) => {
    return (
      <div key={service} style={{ textAlign: 'center' }}>
        <li style={{ listStyleType: 'none' }}>{service}</li>
        <hr />
      </div>
    );
  });
  return (
    <div>
      <Card
        id="card"
        style={{
          width: '40vw',
          border: '2px solid var(--main-outline-color)',
          borderRadius: '25px',
          fontFamily: 'Noto serif',
          margin: 'auto',
          marginTop: '5%',
          marginBottom: '3%',
        }}
      >
        <Card.Img
          variant="top"
          src={serviceImages[0]}
          className="serviceCardImage"
          style={{
            width: '100%',
            borderRadius: '22px',
          }}
        />
        <Card.Body>
          <Card.Title
            className="serviceCardTitle"
            style={{ textAlign: 'center', margin: '5%' }}
          >
            {serviceTitle}
          </Card.Title>
          <hr />
          <Card.Text style={{ margin: '5%' }}>{serviceDescription}</Card.Text>
          <hr />
          <Card.Text>{mappedServiceTypes}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};
