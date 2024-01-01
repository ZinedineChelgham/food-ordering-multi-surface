import React, { useState, useEffect } from "react";
import CommandList from "./CommandList";
import OrderHeader from "./OrderHeader";
import CartContext from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

const OrderContainer = () => {
  // This state will hold the order items and could be updated when items are added or removed
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isLandscape = useMediaQuery("(orientation: landscape)");

  const { cartItems, removeItem } = React.useContext(CartContext);
  const navigate = useNavigate();

  const handleItemUpdate = (item, action) => {};

  const handleCancelOrder = () => {
    cartItems.forEach((item) => removeItem(item._id));
  };

  const handleValidateOrder = () => {
    navigate("/ordersummary", { state: { cartItems } });
  };

  const onDeleteItem = (id) => {
    // Logic to delete the item from the order
    removeItem(id);
  };

  // Calculate the total amount of the order
  const calculateTotal = (items) =>
    items.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div
      style={{
        height: "85%",
        display: "flex",
        flexDirection: "column",
        paddingBottom: "2vh",
      }}
    >
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
      <div style={{ height: "10%", flexShrink: 0, padding: "10px" }}>
        <div className="command-actions">
          <button
            className="cancel-button"
            disabled={cartItems.length === 0}
            style={{
              backgroundColor: "#d9534f", // Red color
              color: "white", // White text
              border: "none",
              borderRadius: "5px",
              padding: "10px 20px",
              fontWeight: "bold",
              marginRight: "10px",
              cursor: cartItems.length === 0 ? "not-allowed" : "pointer",
              opacity: cartItems.length === 0 ? 0.6 : 1,
              width: "50%",
              height: "100%",

              // Add any other styles you want to apply directly here
            }}
            onClick={handleCancelOrder}
          >
            <Typography
              variant="body1"
              color="#fffff"
              fontWeight={"bold"}
              fontSize={isLandscape ? "3vh" : "3.5vw"}
            >
              Abandonner la commande
            </Typography>
          </button>
          <button
            className="validate-button"
            disabled={cartItems.length === 0}
            style={{
              backgroundColor: "#5cb85c", // Green color
              color: "white", // White text
              border: "none",
              borderRadius: "5px",
              padding: "10px 20px",
              fontWeight: "bold",
              cursor: cartItems.length === 0 ? "not-allowed" : "pointer",
              opacity: cartItems.length === 0 ? 0.6 : 1,
              width: "50%",
              height: "100%",

              // Add any other styles you want to apply directly here
            }}
            onClick={handleValidateOrder}
          >
            <Typography
              variant="body1"
              color="#fffff"
              fontWeight={"bold"}
              fontSize={isLandscape ? "3vh" : "3.5vw"}
            >
              Valider
            </Typography>
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderContainer;
