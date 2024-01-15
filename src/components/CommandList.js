import React from "react";
import "./CommandList.css";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

const CommandList = ({ orderItems, onItemUpdate, onDeleteItem }) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isLandscape = useMediaQuery("(orientation: landscape)");
  return (
    <>
      {orderItems.length > 0 ? (
        <div className="command-list-container">
          {orderItems.map((item) => (
            <div
              key={item._id}
              className="command-item"
              onClick={() => onItemUpdate(item, true)}
            >
              <span className="quantity">x{item.quantity}</span>
              <span className="name">{item.shortName}</span>
              <span className="price">€{item.price}</span>
              <span
                className="delete-icon"
                onClick={() => onDeleteItem(item._id)}
              >
                {/* SVG for the red cross icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="2vw"
                  height="2vw"
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
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            variant="body1"
            color="#fffff"
            fontWeight={"bold"}
            fontSize={isLandscape ? "4vh" : "5vw"}
          >
            Votre commande est vide
          </Typography>
        </div>
      )}
    </>
  );
};

export default CommandList;
