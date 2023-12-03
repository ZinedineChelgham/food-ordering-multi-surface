// OrderSection.js
import React from 'react';
import './OrderSection.css'; // Importez le fichier CSS

const OrderSection = ({ title, items }) => (
    <div className="order-section">
        <div className="section-title">{title}</div>
        <div className="img-container">
            {items.map(item => (
                <div className="item" key={item.id}>
                    <img src={item.image} alt={item.name} />
                    <div className="item-description">{item.name}</div>
                </div>
            ))}
        </div>
    </div>
);


export default OrderSection;
