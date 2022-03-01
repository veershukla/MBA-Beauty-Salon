import React from 'react';
import ServiceNavBar from './ServiceNavBar';
import facialData from '../Data/facial';
import ServiceCard from './ServiceCard';

export default () => {
  return (
    <div>
      <ServiceNavBar />
      <hr />
      <ServiceCard
        serviceTitle={facialData.serviceTitle}
        serviceDescription={facialData.serviceDescription}
        arrayOfServiceTypes={facialData.arrayOfServiceTypes}
        serviceImages={facialData.serviceImages}
      />
    </div>
  );
};
