import React from "react";
import "./OrderHeader.css"; // Import the CSS file
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

const OrderHeader = ({ total }) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isLandscape = useMediaQuery("(orientation: landscape)");
  return (
    <div
      className="order-header"
      style={{
        backgroundColor: "yellow",
        color: "black",
        padding: "1vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Typography
        variant="body1"
        color="#fffff"
        fontSize={isLandscape ? "4vh" : "5vw"}
      >
        Votre commande
      </Typography>
      <div>
        <Typography
          variant="body1"
          color="#fffff"
          marginRight={"1vh"}
          fontSize={isLandscape ? "4vh" : "5vw"}
        >
          Total {total.toFixed(2)}€{" "}
        </Typography>
        <p></p>
      </div>
    </div>
  );
};

//

export default OrderHeader;
