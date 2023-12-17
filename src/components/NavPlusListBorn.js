import React from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Header from "./SpecialPhone/Header";
import NavBar from "./NavBar";
import FoodItemList from "./FoodItemList";
import OrderBar from "./SpecialPhone/OrderBar";

function NavPlusList({
  foodItems,
  currCat,
  handleCategoryChange,
  isMultiOrder,
  indexSupplement,
  setIndexSupplement,
  isSupplement,
  setIsSupplement,
}) {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isLandscape = useMediaQuery("(orientation: landscape)");

  return (
    <div
      style={{
        width: isMultiOrder ? undefined : "100vw",
        height: "100%",
        overflow: "hidden",
        display: "flex",
        flexdirection: "row",
        justifyContent: "space-between",
      }}
    >
      <div style={{}}>
        <NavBar
          handleCategoryChange={handleCategoryChange}
          currCat={currCat}
          isMultiOrder={isMultiOrder}
          indexSupplement={indexSupplement}
        />
      </div>
      <div style={{ width: "75%", overflow: "hidden", display: "contents" }}>
        <FoodItemList
          foodItems={foodItems}
          indexSupplement={indexSupplement}
          setIndexSupplement={setIndexSupplement}
          isSupplement={isSupplement}
          setIsSupplement={setIsSupplement}
        />
      </div>
    </div>
  );
}

export default NavPlusList;
