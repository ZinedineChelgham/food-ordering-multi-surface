// OrderSection.js
import React from 'react';
import './OrderSection.css'; // Importez le fichier CSS
import ClearIcon from '@mui/icons-material/Clear';

const OrderSection = ({ title, items }) => (
    <div className="order-section">
        <div className="section-title-container">
            <div className="black-band"></div>
            <div className="section-title">{title}</div>
        </div>
        <div className="img-container">
            {items.map(item => (
                <div className="item" key={item.id}>
                    <img src={item.image} alt={item.name} />
                    <div className="item-description">{item.name}</div>
                    <button className="delete-button">
                        &#10060; {/* C'est l'entité HTML pour la croix rouge */}
                    </button>
                </div>
            ))}
        </div>
    </div>
);



export default OrderSection;
