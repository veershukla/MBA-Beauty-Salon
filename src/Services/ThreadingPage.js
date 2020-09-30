import React from 'react';
import ServiceNavBar from './ServiceNavBar';
import threadingData from '../Data/threading';
import ServiceCard from './ServiceCard';

export default () => {
  return (
    <div>
      <ServiceNavBar />
      <hr />
      <ServiceCard
        serviceTitle={threadingData.serviceTitle}
        serviceDescription={threadingData.serviceDescription}
        arrayOfServiceTypes={threadingData.arrayOfServiceTypes}
        serviceImages={threadingData.serviceImages}
      />
    </div>
  );
};
