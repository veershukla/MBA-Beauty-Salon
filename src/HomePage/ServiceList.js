import React from 'react';
import ServiceCard from './ServiceCard';
import arrayOfServices from '../Data/services';

export default () => {
  const mappedServices = arrayOfServices.map((service) => {
    return <ServiceCard key={service} service={service} />;
  });

  return (
    <div>
      <header className="servicesHeader">
        <h1 className="servicesTitle">Services</h1>
        <hr />
      </header>
      <div style={{ maxWidth: '1600px', margin: 'auto' }}>
        <div className="services">{mappedServices}</div>
      </div>
    </div>
  );
};
