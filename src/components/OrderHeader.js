import React from 'react';
import './OrderHeader.css'; // Import the CSS file

const OrderHeader = ({ total }) => {
  return (
    <div className="order-header" style={{ backgroundColor: 'black', color: 'white', padding: '1vh', display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
    <p>VOTRE COMMANDE</p>
      <div>
        <p style={{ marginRight: '5vw' }}>TOTAL €{total.toFixed(2)} </p>
        <p></p>
      </div>
  </div>
  );
};

//

export default OrderHeader;


