import React from "react";
import Grid from "@mui/material/Grid";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import NavBar from "../NavBar";
import FoodItemList from "../FoodItemList";
import OrderBar from "./OrderBar";
import Header from "./Header";
import foodItems from "../../data";

function HomePhone(props) {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const [category, setCategory] = React.useState("menus");
  
  console.log("-----phone display-----");

  const handleCategoryChange = (cat) => {
    setCategory(cat.toLowerCase());
    console.log("clicked" + cat);
  };

  return (
    <div style={{ height: "100vh", overflow: "hidden" }}>
      <div style={{ height: "7%", overflow: "hidden" }}>
        <Header category={category} />
      </div>
      <div
        style={{
          height: "76%",
          overflow: "hidden",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <FoodItemList foodItems={foodItems[category]} currCat={category} />
      </div>
      <div style={{ height: "7%", overflow: "hidden" }}>
        {/* Le composant OrderBar prendra tout l'espace disponible */}
        <OrderBar />
      </div>
      <div style={{ height: "7%" }}>
        <NavBar
          handleCategoryChange={handleCategoryChange}
          currCat={category}
        />
      </div>
    </div>
  );
}

export default HomePhone;
