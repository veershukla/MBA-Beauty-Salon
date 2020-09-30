import React from 'react';
import ServiceNavBar from './ServiceNavBar';
import hennaData from '../Data/henna';
import ServiceCard from './ServiceCard';
import './ServiceCard.css';

export default ({ setPage }) => {
  return (
    <div>
      <ServiceNavBar setPage={setPage} />
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
