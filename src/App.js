import React, { useState, useEffect } from 'react';
import WebsiteHeader from './HomePage/WebsiteHeader';
import HomePage from './HomePage/HomePage';
import ThreadingPage from './Services/ThreadingPage';
import WaxingPage from './Services/WaxingPage';
import FacialPage from './Services/FacialPage';
import HairPage from './Services/HairPage';
import HennaPage from './Services/HennaPage';
import MicrobladingPage from './Services/MicrobladingPage';
import EyelashesPage from './Services/EyelashesPage';
import MakeupPage from './Services/MakeupPage';
import './App.css';

function App() {
  const [page, setPage] = useState('Home');
  let renderedElement = <HomePage setPage={setPage} />;
  if (page === 'Threading') {
    renderedElement = <ThreadingPage setPage={setPage} />;
  } else if (page === 'Waxing') {
    renderedElement = <WaxingPage setPage={setPage} />;
  } else if (page === 'Facial') {
    renderedElement = <FacialPage setPage={setPage} />;
  } else if (page === 'Hair') {
    renderedElement = <HairPage setPage={setPage} />;
  } else if (page === 'Henna') {
    renderedElement = <HennaPage setPage={setPage} />;
  } else if (page === 'Microblading') {
    renderedElement = <MicrobladingPage setPage={setPage} />;
  } else if (page === 'Eyelashes') {
    renderedElement = <EyelashesPage setPage={setPage} />;
  } else if (page === 'Makeup') {
    renderedElement = <MakeupPage setPage={setPage} />;
  }

  return (
    <div className="App">
      <WebsiteHeader />
      {renderedElement}
    </div>
  );
}

export default App;
