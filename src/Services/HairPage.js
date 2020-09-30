import React from 'react';
import ServiceNavBar from './ServiceNavBar';
import hairColorData from '../Data/haircolors';
import hairCutData from '../Data/haircut';
import ServiceCard from './ServiceCard';
import './ServiceCard.css';

export default () => {
  return (
    <div>
      <ServiceNavBar />
      <hr />
      <div className="hairPageCards">
        <ServiceCard
          serviceTitle={hairCutData.serviceTitle}
          serviceDescription={hairCutData.serviceDescription}
          arrayOfServiceTypes={hairCutData.arrayOfServiceTypes}
          serviceImages={hairCutData.serviceImages}
        />
        <ServiceCard
          serviceTitle={hairColorData.serviceTitle}
          serviceDescription={hairColorData.serviceDescription}
          arrayOfServiceTypes={hairColorData.arrayOfServiceTypes}
          serviceImages={hairColorData.serviceImages}
        />
      </div>
    </div>
  );
};
