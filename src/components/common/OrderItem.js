// OrderItem.js
import React from 'react';

const OrderItem = ({ name, image }) => (
    <div className="item">
        <img src={image} alt={name} />
        <div className="item-description">{name}</div>
    </div>
);

export default OrderItem;
