import React from 'react';
import contactInfo from '../Data/contact';
import styleInfo from '../Data/style';

export default () => {
  const { address, email, landline, cellphone, openingHours } = contactInfo;
  return (
    <div className="contact">
      <header>
        <h1>Visit Us</h1>
      </header>
      <div className="contactInfo">
        <h3>{address}</h3>
        <h3>{email}</h3>
        <h3>{`Landline: ${landline}`}</h3>
        <h3>Cell:</h3>
        <h3>
          <span style={{ color: styleInfo.outlineColor, whiteSpace: 'pre' }}>
            M
          </span>{' '}
          {cellphone.M}
        </h3>
        <h3>
          <span style={{ color: styleInfo.outlineColor, whiteSpace: 'pre' }}>
            B
          </span>{' '}
          {cellphone.B}
        </h3>
        <h3>
          <span style={{ color: styleInfo.outlineColor, whiteSpace: 'pre' }}>
            A
          </span>{' '}
          {cellphone.A}
        </h3>
        <div className="openingHours">
          <h3>OPENING HOURS</h3>
          <h3>{openingHours}</h3>
        </div>
      </div>
    </div>
  );
};
