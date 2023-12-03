// OrderSection.js
import React from 'react';
import OrderItem from './OrderItem';

const OrderSection = ({ title, items }) => (
    <div className="order-section">
        <div className="section-title">{title}</div>
        {items.map(item => (
            <OrderItem key={item.id} name={item.name} image={item.image} />
        ))}
    </div>
);

export default OrderSection;
