import React from 'react';
import services from '../Data/services';
import './ServiceCard.css';

export default ({ setPage }) => {
  const setPageFunction = (e) => {
    setPage(e.currentTarget.textContent);
  };

  const mappedServiceLiElements = services.map((ele) => {
    return (
      <li className="serviceNavBarOption">
        <a
          onClick={(e) => {
            setPageFunction(e);
          }}
        >
          {ele}
        </a>
      </li>
    );
  });

  mappedServiceLiElements.unshift(
    <li className="serviceNavBarOption">
      <a
        onClick={(e) => {
          setPageFunction(e);
        }}
      >
        Home
      </a>
    </li>
  );

  return <div className="serviceNavBar">{mappedServiceLiElements}</div>;
};
