// OrderItem.js
import React from 'react';

const OrderItem = ({ name, image, price }) => (
    <div className="item">
        <img src={image} alt={name} />
        <div className="item-description">{name}</div>
        <div className="item-price">{price} €</div>
    </div>
);

export default OrderItem;
