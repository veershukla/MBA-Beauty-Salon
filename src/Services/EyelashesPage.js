import React from 'react';
import ServiceNavBar from './ServiceNavBar';
import eyelashesData from '../Data/eyelashes';
import ServiceCard from './ServiceCard';
import './ServiceCard.css';

export default ({ setPage }) => {
  return (
    <div>
      <ServiceNavBar setPage={setPage} />
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
