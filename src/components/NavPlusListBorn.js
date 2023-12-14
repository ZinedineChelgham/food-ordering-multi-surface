import React from "react";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "./SpecialPhone/Header";
import NavBar from "./NavBar";
import FoodItemList from "./FoodItemList";
import OrderBar from "./SpecialPhone/OrderBar";

function NavPlusList({ foodItems, currCat, handleCategoryChange }) {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isLandscape = useMediaQuery("(orientation: landscape)");

  return (
    <div
      style={{
        width: "100vw",
        height: "100%",
        overflow: "hidden",
        display: "flex",
        flexdirection: "row",
        justifyContent: "space-between",
      }}
    >
      <div style={{ height: "20%" }}>
        <NavBar handleCategoryChange={handleCategoryChange} currCat={currCat} />
      </div>
      <div style={{ width: "75%", overflow: "hidden" }}>
        <FoodItemList foodItems={foodItems} />
      </div>
    </div>
  );
}

export default NavPlusList;
