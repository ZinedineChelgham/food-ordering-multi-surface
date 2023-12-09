// OrderHeader.js
import React from 'react';

const OrderHeader = () => {
  return (
    <div style={{ backgroundColor: 'black', color: 'white', padding: '20px', display: 'flex', alignItems: 'center' }}>
    <p style={{ marginRight: '400px' }}>VOTRE COMMANDE</p>
    <p style={{ marginRight: '200px' }}>TOTAL</p>
    <p>€0.00</p>
  </div>
  );
};

export default OrderHeader;
