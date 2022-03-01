import React from 'react';
import ServiceNavBar from './ServiceNavBar';
import eyelashesData from '../Data/eyelashes';
import ServiceCard from './ServiceCard';
import './ServiceCard.css';

export default () => {
  return (
    <div>
      <ServiceNavBar />
      <hr />
      <ServiceCard
        serviceTitle={eyelashesData.serviceTitle}
        serviceDescription={eyelashesData.serviceDescription}
        arrayOfServiceTypes={eyelashesData.arrayOfServiceTypes}
        serviceImages={eyelashesData.serviceImages}
      />
    </div>
  );
};
