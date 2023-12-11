import React from "react";
import Grid from "@mui/material/Grid";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import NavBar from "../NavBar";
import FoodItemList from "../FoodItemList";
import OrderBar from "./OrderBar";
import Header from "./Header";
import foodItems from "./mock";

function HomePhone(props) {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const [category, setCategory] = React.useState("menus");
  const [items, setItems] = React.useState(foodItems);

  const handleCategoryChange = (cat) => {
    setCategory(cat);
    console.log("clicked" + cat);
  };

  return (
    <Grid
      container
      direction={isSmallScreen ? "row" : "column"}
      style={{ height: "100vh", width: "100vw", overflow: "hidden" }}
    >
      {isSmallScreen ? (
        <Grid item xs={12} style={{ height: "10%" }}>
          <Header />
        </Grid>
      ) : (
        <Grid item xs={12} style={{ height: "100%", overflow: "hidden" }}>
          <NavBar handleCategoryChange={handleCategoryChange} />
        </Grid>
      )}

      <Grid item style={{ height: "70%", width: "100%", overflow: "hidden" }}>
        <FoodItemList foodItems={items[category]} />
      </Grid>
      <Grid
        item
        xs={12}
        style={{
          height: "8%",
          flex: "1 1 auto",
          maxHeight: "10rem",
          marginTop: "1rem",
        }}
      >
        <OrderBar />
      </Grid>

      <Grid>
        {isSmallScreen ? (
          <Grid item xs={12} style={{ height: "100%", overflow: "hidden" }}>
            <NavBar handleCategoryChange={handleCategoryChange} />
          </Grid>
        ) : undefined}
      </Grid>
    </Grid>
  );
}

export default HomePhone;
