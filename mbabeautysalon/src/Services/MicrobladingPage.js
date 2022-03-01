import React from 'react';
import ServiceNavBar from './ServiceNavBar';
import microbladingData from '../Data/microblading';
import ServiceCard from './ServiceCard';
import './ServiceCard.css';

export default () => {
  return (
    <div>
      <ServiceNavBar />
      <hr />
      <ServiceCard
        serviceTitle={microbladingData.serviceTitle}
        serviceDescription={microbladingData.serviceDescription}
        arrayOfServiceTypes={microbladingData.arrayOfServiceTypes}
        serviceImages={microbladingData.serviceImages}
      />
    </div>
  );
};
