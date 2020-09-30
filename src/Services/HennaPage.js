import React from 'react';
import ServiceNavBar from './ServiceNavBar';
import hennaData from '../Data/henna';
import ServiceCard from './ServiceCard';
import './ServiceCard.css';

export default () => {
  return (
    <div>
      <ServiceNavBar />
      <hr />
      <ServiceCard
        serviceTitle={hennaData.serviceTitle}
        serviceDescription={hennaData.serviceDescription}
        arrayOfServiceTypes={hennaData.arrayOfServiceTypes}
        serviceImages={hennaData.serviceImages}
      />
    </div>
  );
};
