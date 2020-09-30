import React from 'react';
import './ServiceCard.css';

export default ({ setPage }) => {
  const setPageFunction = (e) => {
    setPage(e.currentTarget.textContent);
  };
  return (
    <div className="serviceNavBar">
      <li className="serviceNavBarOption">
        <a
          onClick={(e) => {
            setPageFunction(e);
          }}
        >
          Home
        </a>
      </li>
      <li className="serviceNavBarOption">
        <a
          onClick={(e) => {
            setPageFunction(e);
          }}
        >
          Threading
        </a>
      </li>
      <li className="serviceNavBarOption">
        <a
          onClick={(e) => {
            setPageFunction(e);
          }}
        >
          Hair
        </a>
      </li>
      <li className="serviceNavBarOption">
        <a
          onClick={(e) => {
            setPageFunction(e);
          }}
        >
          Waxing
        </a>
      </li>
      <li className="serviceNavBarOption">
        <a
          onClick={(e) => {
            setPageFunction(e);
          }}
        >
          Facial
        </a>
      </li>
    </div>
  );
};
