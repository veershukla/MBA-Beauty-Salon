import React from 'react';
import ServiceNavBar from './ServiceNavBar';
import hairCareData from '../Data/hairCareAndStyle';
import ServiceCard from './ServiceCard';
import './ServiceCard.css';

export default () => {
  return (
    <div>
      <ServiceNavBar />
      <hr />
      <ServiceCard
        serviceTitle={hairCareData.serviceTitle}
        serviceDescription={hairCareData.serviceDescription}
        arrayOfServiceTypes={hairCareData.arrayOfServiceTypes}
        serviceImages={hairCareData.serviceImages}
      />
    </div>
  );
};
