import React from 'react';
import ServiceNavBar from './ServiceNavBar';
import waxingData from '../Data/waxing';
import ServiceCard from './ServiceCard';

export default () => {
  return (
    <div>
      <ServiceNavBar />
      <hr />
      <ServiceCard
        serviceTitle={waxingData.serviceTitle}
        serviceDescription={waxingData.serviceDescription}
        arrayOfServiceTypes={waxingData.arrayOfServiceTypes}
        serviceImages={waxingData.serviceImages}
      />
    </div>
  );
};
