import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import NavBar from "../NavBar";
import FoodItemList from "../FoodItemList";
import OrderBar from "./OrderBar";
import Header from "./Header";

function HomePhone({ decreaseFunction }) {
  const handleBack = () => {
    decreaseFunction();
    //navigate(-1);
  };
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const [category, setCategory] = React.useState("menus");

  const [categoryItems, setCategoryItems] = React.useState([]);

  const API_URL = "http://localhost:3001/items/";
  React.useEffect(() => {
    fetch(API_URL + category.toLowerCase())
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log("Données reçues de /items/" + category, data);
        setCategoryItems(data);
      });
  }, [category]);

  console.log("-----phone display-----");

  const handleCategoryChange = (cat) => {
    setCategory(cat.toLowerCase());
    console.log("clicked" + cat);
  };

  const [currentIndex, setCurrentIndex] = useState(-1);
  const [isSupplement, setIsSupplement] = useState(false);

  function decreaseFunction() {
    setCurrentIndex(currentIndex - 1);
    if (currentIndex === 0) {
      setIsSupplement(false);
    }
  }

  return (
    <div style={{ height: "100vh", overflow: "hidden" }}>
      <div style={{ height: "7%", overflow: "hidden" }}>
        <Header category={category} decreaseFunction={decreaseFunction} />
      </div>
      <div
        style={{
          height: "76%",
          overflow: "hidden",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <FoodItemList
          foodItems={categoryItems}
          currCat={category}
          indexSupplement={currentIndex}
          setIndexSupplement={setCurrentIndex}
          isSupplement={isSupplement}
          setIsSupplement={setIsSupplement}
        />
      </div>
      <div style={{ height: "7%", overflow: "hidden" }}>
        {/* Le composant OrderBar prendra tout l'espace disponible */}
        <OrderBar />
      </div>
      <div
        style={{
          height: "10%",
          display: "flex",
          flexWrap: "wrap",
          alignContent: "flex-end",
        }}
      >
        <NavBar
          handleCategoryChange={handleCategoryChange}
          currCat={category}
        />
      </div>
    </div>
  );
}

export default HomePhone;
