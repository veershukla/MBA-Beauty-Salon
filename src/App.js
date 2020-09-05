import React from 'react';
import { Card } from 'react-bootstrap';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="landingPageHeader">
        <h1 className="companyName">MBA Beauty Salon</h1>
      </header>
      <div>
        <header className="servicesHeader">
          <h1 className="servicesTitle">Services</h1>
          <hr />
        </header>
        <div style={{ maxWidth: '1600px', margin: 'auto' }}>
          <div className="services">
            <Card className="serviceCard">
              <Card.Body>
                <Card.Text>Threading</Card.Text>
              </Card.Body>
            </Card>
            <Card className="serviceCard">
              <Card.Body>
                <Card.Text>Hair and Color</Card.Text>
              </Card.Body>
            </Card>
            <Card className="serviceCard">
              <Card.Body>
                <Card.Text>Waxing</Card.Text>
              </Card.Body>
            </Card>
            <Card className="serviceCard">
              <Card.Body>
                <Card.Text>Facial</Card.Text>
              </Card.Body>
            </Card>
            <Card className="serviceCard">
              <Card.Body>
                <Card.Text>Heena</Card.Text>
              </Card.Body>
            </Card>
            <Card className="serviceCard">
              <Card.Body>
                <Card.Text>Eyelashes</Card.Text>
              </Card.Body>
            </Card>
            <Card className="serviceCard">
              <Card.Body>
                <Card.Text>Microblading</Card.Text>
              </Card.Body>
            </Card>
            <Card className="serviceCard">
              <Card.Body>
                <Card.Text>Nails</Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>

      <hr />
      <div className="contact">
        <header>
          <h1>Visit Us</h1>
        </header>
        <div className="contactInfo">
          <h3>{'1360 Railroad Avenue, Livermore, CA'}</h3>
          <h3>{'mbabeautysalon@gmail.com'}</h3>
          <div className="openingHours">
            <h3>OPENING HOURS</h3>
            <h3>{'Mon - Sat: 11am - 7pm Sunday: Closed'}</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
