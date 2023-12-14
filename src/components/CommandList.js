import React from "react";
import "./CommandList.css";

const CommandList = ({ orderItems, onItemUpdate, onDeleteItem }) => {
  return (
    <>
      {orderItems.length > 0 ? (
        <div className="command-list-container">
          {orderItems.map((item) => (
            <div
              key={item.id}
              className="command-item"
              onClick={() => onItemUpdate(item, true)}
            >
              <span className="quantity">x{item.quantity}</span>
              <span className="name">{item.name}</span>
              <span className="price">€{item.price.toFixed(2)}</span>
              <span
                className="delete-icon"
                onClick={() => onDeleteItem(item.id)}
              >
                {/* SVG for the red cross icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="red"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </span>
            </div>
          ))}
        </div>
      ) : (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <p>VOTRE COMMANDE EST VIDE</p>
        </div>
      )}
    </>
  );
};

export default CommandList;
