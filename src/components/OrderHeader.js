// import React from 'react';

// const OrderHeader = () => {
//   return (
//     <div style={{ backgroundColor: 'black', color: 'white', padding: '20px', display: 'flex', alignItems: 'center' }}>
//     <p style={{ marginRight: '400px' }}>VOTRE COMMANDE</p>
//     <p style={{ marginRight: '200px' }}>TOTAL</p>
//     <p>€0.00</p>
//   </div>
//   );
// };

// export default OrderHeader;

// import React from 'react';
// import './OrderHeader.css'; // Import the CSS file

// const OrderHeader = () => {
//   return (
//     <div className="order-header">
//       <p>VOTRE COMMANDE</p>
//       <p>TOTAL</p>
//       <p>€0.00</p>
//     </div>
//   );
// };

// export default OrderHeader;

import React from 'react';
import './OrderHeader.css'; // Import the CSS file

const OrderHeader = ({ total }) => {
  return (
    <div className="order-header">
      <p>VOTRE COMMANDE</p>
      <p>TOTAL</p>
      <p>€{total.toFixed(2)}</p>
    </div>
  );
};

export default OrderHeader;


