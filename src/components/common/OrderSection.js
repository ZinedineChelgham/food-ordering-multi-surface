import React from "react";
import "./OrderSection.css";
import ClearIcon from "@mui/icons-material/Clear";
import AddIcon from "@mui/icons-material/Add"; // Icône pour "plus"
import RemoveIcon from "@mui/icons-material/Remove"; // Icône pour "moins"

const OrderSection = ({ title, items, onIncrease, onDecrease, onDelete }) => (
  <div className="order-section">
    <div className="section-title-container">
      <div className="black-band"></div>
      <div className="section-title">{title}</div>
    </div>
    <div className="img-container">
      {items
        .filter((item) => item.quantity > 0)
        .map((item) => (
          <div
            className="item"
            key={item.id}
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <div style={{ display: "flex", flexDirection: "row" }}>
              <img src={item.url} alt={item.name} />
              <div style={{ display: "flex", flexDirection: "column" }}>
                <div className="item-description">{item.name} </div>
                <div className="item-quantity">Quantité: {item.quantity}</div>
                <div className="item-price">Prix unitaire: {item.price} € </div>
              </div>
            </div>
            <div>
              <button
                onClick={() => onDecrease(item.id)}
                style={{
                  display: "inline-flex", // Adjust display
                  alignItems: "center", // Vertically center content
                  justifyContent: "center", // Horizontally center content
                  textAlign: "center",
                  width: "2vw",
                  height: "3vh",
                  // padding: "0.5em 1em", // Added padding
                  marginRight: "1vw ",
                  fontSize: "3vw",
                  backgroundColor: "#F44336", // Softer red
                  borderRadius: "8px", // Rounded corners
                  boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)", // Shadow
                  transition: "background-color 0.3s", // Transition for hover effect
                  ":hover": {
                    backgroundColor: "#d32f2f", // Darker red on hover
                  },
                }}
              >
                <RemoveIcon />
              </button>
              <button
                style={{
                  display: "inline-flex", // Adjust display
                  alignItems: "center", // Vertically center content
                  justifyContent: "center", // Horizontally center content
                  textAlign: "center",
                  width: "2vw",
                  height: "3vh",
                  // padding: "0.5em 1em", // Added padding
                  marginRight: "1vw ",
                  fontSize: "3vw",
                  backgroundColor: "green", // Softer red
                  borderRadius: "8px", // Rounded corners
                  boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)", // Shadow
                  transition: "background-color 0.3s", // Transition for hover effect
                  ":hover": {
                    backgroundColor: "#d32f2f", // Darker red on hover
                  },
                }}
                onClick={() => onIncrease(item.id)}
              >
                <AddIcon />
              </button>
              <button
                className="delete-button"
                onClick={() => onDelete(item.id)}
              >
                <ClearIcon />
              </button>
            </div>
          </div>
        ))}
    </div>
  </div>
);

export default OrderSection;
