import React, { useState, useContext, useEffect } from "react";
import CartContext from "../../context/CartContext";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const SupplementItem = ({ name, price, url, item, isMultiOrder }) => {
  const cart = React.useContext(CartContext);

  const targetItem = cart.cartItems.find((cartItem) => cartItem.id === item.id);

  const [quantity, setQuantity] = useState(targetItem?.quantity || 0);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isLandscape = useMediaQuery("(orientation: landscape)");

  useEffect(() => {
    setQuantity(targetItem?.quantity || 0);
  }, [targetItem]);

  const handleIncrease = () => {
    cart.addToCart(item, 1);
    setQuantity((prevQuantity) => prevQuantity + 1);
    console.log(cart);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
      cart.decreaseQuantity(item);
    } else {
      setQuantity(0);
      cart.removeItem(item.id);
    }
  };
  return (
    <div
      style={{
        display: "flex",
        //alignItems: "center",
        justifyContent: "space-between",
        marginRight: "10vw",
        marginRight: isMultiOrder ? "0vw" : "10vw",
      }}
    >
      <div
        style={{
          flex: "1",
          marginRight: isLandscape ? "1vw" : "1vh",
        }}
      >
        <img
          src={url}
          alt={name}
          style={{
            width: isLandscape ? "9vw" : "11vh",
            height: isLandscape ? "9vw" : "11vh",
            width: isMultiOrder ? "6vw" : isLandscape ? "9vw" : "11vh",
            height: isMultiOrder ? "7vh" : isLandscape ? "9vw" : "11vh",
            borderRadius: "10px",
            boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.75)",
            marginBottom: isLandscape ? "1vw" : "1vh",
          }}
        />
      </div>
      <div
        style={{
          flex: "2",
          textAlign: "left",
          fontSize: isLandscape ? "2vw" : "2vh",
        }}
      >
        <div style={{ fontSize: isMultiOrder ? "1.5vw" : undefined }}>
          {name}
        </div>
        <div
          style={{
            fontSize: isMultiOrder ? "1.5vw" : undefined,
            backgroundColor: "yellow",
            width: "fit-content",
            borderRadius: "5px",
          }}
        >
          {price}€
        </div>
      </div>
      <div
        style={{
          flex: "1",
          display: "flex",
          alignItems: "center",
          marginLeft: " 3vw",
        }}
      >
        <button
          onClick={handleDecrease}
          style={{
            display: "inline-flex", // Adjust display
            alignItems: "center", // Vertically center content
            justifyContent: "center", // Horizontally center content
            textAlign: "center",
            width: isLandscape ? "2vw" : "2vh",
            // padding: "0.5em 1em", // Added padding
            marginRight: isLandscape ? "1vw" : "1vh",
            fontSize: isLandscape ? "2vw" : "2vh",
            backgroundColor: "#F44336", // Softer red
            borderRadius: "8px", // Rounded corners
            boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)", // Shadow
            transition: "background-color 0.3s", // Transition for hover effect
            ":hover": {
              backgroundColor: "#d32f2f", // Darker red on hover
            },
          }}
        >
          -
        </button>
        <div style={{ fontSize: isLandscape ? "2vw" : "2vh" }}>{quantity}</div>
        <button
          onClick={handleIncrease}
          style={{
            display: "inline-flex", // Adjust display
            alignItems: "center", // Vertically center content
            justifyContent: "center", // Horizontally center content
            width: isLandscape ? "2vw" : "2vh",
            // padding: "0.5em 1em", // Added padding
            marginLeft: isLandscape ? "1vw" : "1vh",
            fontSize: isLandscape ? "2vw" : "2vh",
            backgroundColor: "#4CAF50", // Softer green
            borderRadius: "8px", // Rounded corners
            boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)", // Shadow
            transition: "background-color 0.3s", // Transition for hover effect
            ":hover": {
              backgroundColor: "#45a049", // Darker green on hover
            },
          }}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default SupplementItem;
