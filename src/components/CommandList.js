
import React from 'react';
import './CommandList.css'; // make sure this CSS file exists and is in the same directory as your component

const CommandList = ({ orderItems, onItemUpdate, onCancelOrder, onValidateOrder }) => {
  return (
    <>
      {orderItems.length > 0 ? (
        <div className="command-list-container">
          {orderItems.map(item => (
            <div
              key={item.id}
              className="command-item"
              onClick={() => onItemUpdate(item, true)} // Make sure to implement the logic for this
            >
              <span className="quantity">{item.quantity}</span>
              <span className="name">{item.name}</span>
              <span className="price">€{item.price.toFixed(2)}</span>
            </div>
          ))}
        </div>
      ) : (
        <div className="empty-command-list">
          <p>VOTRE COMMANDE EST VIDE</p>
        </div>
      )}
      {orderItems.length > 0 ? (
              <div className="command-actions">
              <button onClick={onCancelOrder} className="cancel-button">
                Abandonner la commande
              </button>
              <button onClick={onValidateOrder} className="validate-button">
                Valider la commande
              </button>
            </div>
      ):null}

    </>
  );
};

export default CommandList;

