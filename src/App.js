import React from 'react';
import { Card } from 'react-bootstrap';
import salonLogo from './salonLogo.png'
import './App.css';

function App() {
  const M = <span>M</span>;
  return (
    <div className="App">
      <header className="landingPageHeader">
        <div className="imageContainer">
          <img src={salonLogo} className="image" alt="MBA Beauty Salon Logo"/>
        </div>
        <div >
          <h1 className="companyName">MBA</h1>
          <h2 className="companyName2">Beauty Salon</h2>
          <h4 className="customers">{'*Men  *Women  *Kids  *Seniors'}</h4>
        </div>
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
          <h3>{'1360 Railroad Avenue, Livermore, CA 94550'}</h3>
          <h3>{'mbabeautysalon1@gmail.com'}</h3>
          <h3>{'Landline: (925) 583 - 5226'}</h3>
          <h3>
            Cell:   
          </h3>
          <h3>
            <span style={{ color: '#be342b', whiteSpace:"pre" }}>M</span>  (209) 627 - 6825{'   '}  
          </h3>
          <h3>
            <span style={{ color: '#be342b', whiteSpace:"pre"  }}>B</span>  (408) 477 - 5011{'   '}
          </h3>
          <h3>
            <span style={{ color: '#be342b', whiteSpace:"pre"  }}>A</span>  (916) 512 - 7439
          </h3>
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
