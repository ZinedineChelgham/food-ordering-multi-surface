import React, { useState, useEffect } from "react";
import CommandList from "./CommandList";
import OrderHeader from "./OrderHeader";
import CartContext from "../context/CartContext";

const OrderContainer = () => {
  // This state will hold the order items and could be updated when items are added or removed

  const { cartItems, removeItem } = React.useContext(CartContext);

  // const burgerItems = [
  //   { id: 1, name: "Burger", price: 7.2, quantity: 1 },
  //   { id: 2, name: "boisson", price: 2.5, quantity: 2 },
  //   { id: 3, name: "frites", price: 0.99, quantity: 1 },
  //   { id: 4, name: "frites", price: 0.99, quantity: 1 },
  //   { id: 5, name: "Burger", price: 7.2, quantity: 1 },
  //   { id: 6, name: "boisson", price: 2.5, quantity: 2 },
  //   { id: 7, name: "frites", price: 0.99, quantity: 1 },
  //   { id: 8, name: "frites", price: 0.99, quantity: 1 },
  //   { id: 9, name: "Burger", price: 7.2, quantity: 1 },
  //   { id: 10, name: "boisson", price: 2.5, quantity: 2 },
  //   { id: 11, name: "frites", price: 0.99, quantity: 1 },
  //   { id: 12, name: "frites", price: 0.99, quantity: 1 },
  //   { id: 13, name: "Burger", price: 7.2, quantity: 1 },
  //   { id: 14, name: "boisson", price: 2.5, quantity: 2 },
  //   { id: 15, name: "frites", price: 0.99, quantity: 1 },
  //   { id: 16, name: "frites", price: 0.99, quantity: 1 },
  //   { id: 17, name: "Burger", price: 7.2, quantity: 1 },
  //   { id: 18, name: "boisson", price: 2.5, quantity: 2 },
  //   { id: 19, name: "frites", price: 0.99, quantity: 1 },
  //   { id: 20, name: "frites", price: 0.99, quantity: 1 },
  //   { id: 21, name: "Burger", price: 7.2, quantity: 1 },
  //   { id: 22, name: "boisson", price: 2.5, quantity: 2 },
  //   { id: 23, name: "frites", price: 0.99, quantity: 1 },
  //   { id: 24, name: "frites", price: 0.99, quantity: 1 },
  //   { id: 25, name: "Burger", price: 7.2, quantity: 1 },
  //   { id: 26, name: "boisson", price: 2.5, quantity: 2 },
  //   { id: 27, name: "frites", price: 0.99, quantity: 1 },
  //   { id: 28, name: "frites", price: 0.99, quantity: 1 },
  //   { id: 29, name: "Burger", price: 7.2, quantity: 1 },
  //   { id: 30, name: "boisson", price: 2.5, quantity: 2 },
  //   { id: 31, name: "frites", price: 0.99, quantity: 1 },
  //   { id: 32, name: "frites", price: 0.99, quantity: 1 },
  //   { id: 33, name: "Burger", price: 7.2, quantity: 1 },
  //   { id: 34, name: "boisson", price: 2.5, quantity: 2 },
  //   { id: 35, name: "frites", price: 0.99, quantity: 1 },
  //   { id: 36, name: "frites", price: 0.99, quantity: 1 },
  //   { id: 37, name: "Burger", price: 7.2, quantity: 1 },
  //   { id: 38, name: "boisson", price: 2.5, quantity: 2 },
  //   { id: 39, name: "frites", price: 0.99, quantity: 1 },
  //   { id: 40, name: "frites", price: 0.99, quantity: 1 },
  //   { id: 41, name: "Burger", price: 7.2, quantity: 1 },
  //   { id: 42, name: "boisson", price: 2.5, quantity: 2 },
  //   { id: 43, name: "frites", price: 0.99, quantity: 1 },
  //   { id: 44, name: "frites", price: 0.99, quantity: 1 },
  //   { id: 45, name: "Burger", price: 7.2, quantity: 1 },
  //   { id: 46, name: "boisson", price: 2.5, quantity: 2 },
  //   { id: 47, name: "frites", price: 0.99, quantity: 1 },
  //   { id: 48, name: "frites", price: 0.99, quantity: 1 },
  //   { id: 49, name: "Burger", price: 7.2, quantity: 1 },
  //   { id: 50, name: "boisson", price: 2.5, quantity: 2 },
  //   { id: 51, name: "frites", price: 0.99, quantity: 1 },
  //   { id: 52, name: "frites", price: 0.99, quantity: 1 },
  //   { id: 53, name: "Burger", price: 7.2, quantity: 1 },
  //   { id: 54, name: "boisson", price: 2.5, quantity: 2 },
  //   { id: 55, name: "frites", price: 0.99, quantity: 1 },
  //   { id: 56, name: "frites", price: 0.99, quantity: 1 },
  //   { id: 57, name: "Burger", price: 7.2, quantity: 1 },
  //   { id: 58, name: "boisson", price: 2.5, quantity: 2 },
  //   { id: 59, name: "frites", price: 0.99, quantity: 1 },
  //   { id: 60, name: "frites", price: 0.99, quantity: 1 },
  //   { id: 61, name: "Burger", price: 7.2, quantity: 1 },
  //   { id: 62, name: "boisson", price: 2.5, quantity: 2 },
  //   { id: 63, name: "frites", price: 0.99, quantity: 1 },
  //   { id: 64, name: "frites", price: 0.99, quantity: 1 },
  //   { id: 65, name: "Burger", price: 7.2, quantity: 1 },
  //   { id: 66, name: "boisson", price: 2.5, quantity: 2 },
  //   { id: 67, name: "frites", price: 0.99, quantity: 1 },
  //   { id: 68, name: "frites", price: 0.99, quantity: 1 },
  //   { id: 69, name: "Burger", price: 7.2, quantity: 1 },
  //   { id: 70, name: "boisson", price: 2.5, quantity: 2 },
  // ];
  // const burgerItems = [];

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
    <div style={{ height: "100%", display: "flex", flexDirection: "column" }}>
      <div style={{ height: "20%", flexShrink: 0 }}>
        <OrderHeader total={calculateTotal(cartItems)} />
      </div>
      <div
        style={{
          height: "70%",
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
      <div style={{ height: "30%", flexShrink: 0 }}>
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
              cursor: "pointer",
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
