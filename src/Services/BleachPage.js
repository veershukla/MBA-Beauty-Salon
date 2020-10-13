import React from 'react';
import ServiceNavBar from './ServiceNavBar';
import bleachData from '../Data/bleach';
import ServiceCard from './ServiceCard';
import './ServiceCard.css';

export default () => {
  return (
    <div>
      <ServiceNavBar />
      <hr />
      <ServiceCard
        serviceTitle={bleachData.serviceTitle}
        serviceDescription={bleachData.serviceDescription}
        arrayOfServiceTypes={bleachData.arrayOfServiceTypes}
        serviceImages={bleachData.serviceImages}
      />
    </div>
  );
};
