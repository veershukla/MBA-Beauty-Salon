import React from 'react';
import facialData from '../Data/facial';
import hairColorData from '../Data/haircolors';
import haircutData from '../Data/haircut';
import threadingData from '../Data/threading';
import waxing from '../Data/waxing';
import ServiceCard from './ServiceCard';
import ServiceNavBar from './ServiceNavBar';
import ServiceList from '../HomePage/ServiceList';
import Contact from '../HomePage/Contact';

export default ({ setPage, pageType }) => {
  if (pageType === 'Home') {
    return (
      <>
        <ServiceList setPage={setPage} />
        <hr />
        <Contact />
      </>
    );
  } else if (pageType === 'Threading') {
    return (
      <div>
        <ServiceNavBar setPage={setPage} />
        <hr />
        <ServiceCard
          serviceTitle={threadingData.serviceTitle}
          serviceDescription={threadingData.serviceDescription}
          arrayOfServiceTypes={threadingData.arrayOfServiceTypes}
          serviceImages={threadingData.serviceImages}
        />
      </div>
    );
  }
};
