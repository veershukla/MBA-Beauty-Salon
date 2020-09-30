import React, { useState, useEffect } from 'react';
import WebsiteHeader from './HomePage/WebsiteHeader';
import HomePage from './HomePage/HomePage';
import ThreadingPage from './Services/ThreadingPage';
import WaxingPage from './Services/WaxingPage';
import FacialPage from './Services/FacialPage';
import HairPage from './Services/HairPage';
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
  }

  return (
    <div className="App">
      <WebsiteHeader />
      {renderedElement}
    </div>
  );
}

export default App;
