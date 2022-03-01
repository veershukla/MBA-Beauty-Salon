import React from 'react';
import salonLogo from '../salonLogo.png'

export default () => {
  return(
  <header className="landingPageHeader">
    <div className="imageContainer">
      <img src={salonLogo} className="image" alt="MBA Beauty Salon Logo" />
    </div>
    <div>
      <h1 className="companyName">MBA</h1>
      <h2 className="companyName2">Beauty Salon</h2>
      <h4 className="customers">{'*Men  *Women  *Kids  *Seniors'}</h4>
    </div>
  </header>)
};
