import React from 'react';
import ServiceNavBar from './ServiceNavBar';
import microbladingData from '../Data/microblading';
import ServiceCard from './ServiceCard';
import './ServiceCard.css';

export default ({ setPage }) => {
  return (
    <div>
      <ServiceNavBar setPage={setPage} />
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
