import React from 'react';
import WebsiteHeader from './HomePage/WebsiteHeader';
import ServiceList from './HomePage/ServiceList';
import Contact from './HomePage/Contact';
import './App.css';

function App() {
  return (
    <div className="App">
      <WebsiteHeader />
      <ServiceList />
      <hr />
      <Contact />
    </div>
  );
}

export default App;
