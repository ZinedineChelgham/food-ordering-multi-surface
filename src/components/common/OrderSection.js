import React from 'react';
import './OrderSection.css';
import ClearIcon from '@mui/icons-material/Clear';
import AddIcon from '@mui/icons-material/Add'; // Icône pour "plus"
import RemoveIcon from '@mui/icons-material/Remove'; // Icône pour "moins"

const OrderSection = ({ title, items, onIncrease, onDecrease, onDelete }) => (
    <div className="order-section">
        <div className="section-title-container">
            <div className="black-band"></div>
            <div className="section-title">{title}</div>
        </div>
        <div className="img-container">
            {items.map(item => (
                <div className="item" key={item.id} style={{display:'flex', justifyContent: 'space-between'}}>
                    <div style={{display:'flex', flexDirection: 'row'}}>
                        <img src={item.url} alt={item.name} />
                        <div style={{display:'flex', flexDirection: 'column'}}>
                            <div className="item-description">{item.name} </div>
                            <div className="item-quantity">Quantité: {item.quantity}</div>
                            <div className="item-price">Prix unitaire: {item.price} € </div>
                        </div>
                    </div>
                    <div>
                        <button onClick={() => onDecrease(item.id)}><RemoveIcon /></button>
                        <button onClick={() => onIncrease(item.id)}><AddIcon /></button>
                        <button className="delete-button" onClick={() => onDelete(item.id)}>
                            <ClearIcon />
                        </button>
                    </div>
                </div>
            ))}
        </div>
    </div>
);

export default OrderSection;
