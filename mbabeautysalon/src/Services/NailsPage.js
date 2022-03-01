import React from 'react';
import ServiceNavBar from './ServiceNavBar';
import nailsData from '../Data/nails';
import ServiceCard from './ServiceCard';
import './ServiceCard.css';

export default () => {
  return (
    <div>
      <ServiceNavBar />
      <hr />
      <ServiceCard
        serviceTitle={nailsData.serviceTitle}
        serviceDescription={nailsData.serviceDescription}
        arrayOfServiceTypes={nailsData.arrayOfServiceTypes}
        serviceImages={nailsData.serviceImages}
      />
    </div>
  );
};
