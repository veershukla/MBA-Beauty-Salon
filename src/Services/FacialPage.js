import React from 'react';
import ServiceNavBar from './ServiceNavBar';
import facialData from '../Data/facial';
import ServiceCard from './ServiceCard';

export default ({ setPage }) => {
  return (
    <div>
      <ServiceNavBar setPage={setPage} />
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
