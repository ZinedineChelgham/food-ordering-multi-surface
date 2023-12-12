// OrderHeader.js
import React from 'react';

const OrderHeader = (props) => {

  return (
    <div style={{ backgroundColor: 'black', color: 'white', padding: '1vh', display: 'flex', alignItems: 'center', justifyContent: 'space-between', }}>
    <p>VOTRE COMMANDE</p>
      <div>
        <p style={{ marginRight: '5vw' }}>TOTAL</p>
        <p>€0.00</p>
      </div>
  </div>
  );
};

export default OrderHeader;
