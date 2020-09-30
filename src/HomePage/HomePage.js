import React from 'react';
import ServiceList from './ServiceList';
import Contact from './Contact';

export default ({ setPage }) => {
  return (
    <>
      <ServiceList setPage={setPage} />
      <hr />
      <Contact />
    </>
  );
};
