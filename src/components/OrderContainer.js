import React, { useState, useEffect } from "react";
import CommandList from "./CommandList";
import OrderHeader from "./OrderHeader";
import CartContext from "../context/CartContext";

const OrderContainer = () => {
  // This state will hold the order items and could be updated when items are added or removed

  const { cartItems, removeItem } = React.useContext(CartContext);

  const handleItemUpdate = (item, action) => {};

  const handleCancelOrder = () => {
    // Logic to handle order cancellation
  };

  const handleValidateOrder = () => {
    // Logic to handle order validation
  };
  const onDeleteItem = (id) => {
    // Logic to delete the item from the order
    removeItem(id);
    console.log("Remove itemm", cartItems);
  };

  // Calculate the total amount of the order
  const calculateTotal = (items) =>
    items.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div style={{ height: "85%", display: "flex", flexDirection: "column" }}>
      <div style={{ height: "auto", flexShrink: 0 }}>
        <OrderHeader total={calculateTotal(cartItems)} />
      </div>
      <div
        style={{
          height: "100%",
          overflowY: "auto",
          flexGrow: 1,
          marginLeft: "40px",
        }}
      >
        <CommandList
          orderItems={cartItems}
          onItemUpdate={handleItemUpdate}
          onDeleteItem={onDeleteItem}
        />
      </div>
      <div style={{ height: "10%" ,flexShrink:0}}>
        <div className="command-actions">
          <button
            className="cancel-button"
            style={{
              backgroundColor: "#d9534f", // Red color
              color: "white", // White text
              border: "none",
              borderRadius: "5px",
              padding: "10px 20px",
              fontWeight: "bold",
              marginRight: "10px",
              cursor: cartItems.length === 0 ? "default" : "pointer",
              opacity: cartItems.length === 0 ? 0.5 : 1,
              // Add any other styles you want to apply directly here
            }}
          >
            Abandonner la commande
          </button>
          <button
            className="validate-button"
            style={{
              backgroundColor: "#5cb85c", // Green color
              color: "white", // White text
              border: "none",
              borderRadius: "5px",
              padding: "10px 20px",
              fontWeight: "bold",
              cursor: cartItems.length === 0 ? "default" : "pointer",
              opacity: cartItems.length === 0 ? 0.5 : 1,
              // Add any other styles you want to apply directly here
            }}
          >
            Valider la commande
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderContainer;
