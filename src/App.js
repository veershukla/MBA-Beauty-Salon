import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="landingPageHeader">
        <h1>MBA Beauty Salon</h1>
      </header>
      <div className="services">
        {/* <header className="servicesHeader">
          <h1>Services</h1>
        </header>
        <div className="servicesList">
          <h3>Threading</h3>
          <h3>Hair and Color</h3>
          <h3>Waxing</h3>
          <h3>Facial</h3>
          <h3>Heena</h3>
          <h3>Eyelashes</h3>
          <h3>Microblading</h3>
          <h3>Nails</h3>
        </div> */}
      </div>

      <div className="contact">
        <header>
          <h1>Visit Us</h1>
        </header>
        <div className="contactInfo">
          <h3>1855 S. La Barbera Ave Mountain House, CA 95391</h3>
          <h3>bindooveerendra@yahoo.com</h3>
          <div className="openingHours">
            <h3>OPENING HOURS</h3>
            <h3>
              {
                'Mon - Fri: 7am - 10pm  ​​Saturday: 8am - 10pm  Sunday: 8am - 11pm'
              }
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
