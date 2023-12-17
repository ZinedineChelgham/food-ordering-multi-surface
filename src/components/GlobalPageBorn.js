import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "./SpecialPhone/Header";
import NavBar from "./NavBar";
import FoodItemList from "./FoodItemList";
import OrderBar from "./SpecialPhone/OrderBar";
import OrderHeader from "./OrderHeader";
import NavPlusList from "./NavPlusListBorn";
import OrderContainer from "./OrderContainer";
import foodItems from "../data";
import ModeRush from "./ModeRush";
import IconButton from "@mui/material/IconButton";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router";
import React, { useState } from "react";

function BackButtonHeader({ decreaseFunction }) {
  const navigate = useNavigate();
  // Vous pouvez ajouter une fonction pour gérer l'événement onClick si nécessaire.
  const handleBack = () => {
    decreaseFunction();
    //navigate(-1);
  };
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isLandscape = useMediaQuery("(orientation: landscape)");

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "1vh",
      }}
    >
      {/* Vous pouvez toujours garder l'IconButton si vous souhaitez avoir un bouton de retour */}
      <IconButton
        onClick={handleBack}
        style={{ position: "absolute", left: 0, fontSize: "5vh" }}
      >
        <ArrowBackIcon style={{ fontSize: "inherit" }} />
      </IconButton>
      {/* Titre de l'application */}
      <Typography
        variant="h4"
        component="h1"
        style={{
          flexGrow: 1,
          textAlign: "center",
          letterSpacing: "0.1em",
          textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
          fontSize: isSmallScreen ? "5vw" : isLandscape ? "5vh" : "6vw",
          fontWeight: "bold",
        }}
      >
        Borne'n'Go
      </Typography>
    </div>
  );
}

function GlobalPageBorne(props) {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isLandscape = useMediaQuery("(orientation: landscape)");
  const [isRushMode, setIsRushMode] = React.useState(false);
  const ingredients = ["tomate", "salade", "fromage"];

  const [currentIndex, setCurrentIndex] = useState(-1);
  const [isSupplement, setIsSupplement] = useState(false);

  function decreaseFunction() {
    setCurrentIndex(currentIndex - 1);
    if (currentIndex === 0) {
      setIsSupplement(false);
    }
  }

  React.useEffect(() => {
    /*const interval = setInterval(() => {
                fetch('http://localhost:3001/mode-rush')
                    .then(response => {
                        if (!response.ok) {
                          throw new Error(`HTTP error! status: ${response.status}`);
                        }
                        return response.json();
                      })
                    .then(data => {
                        console.log('Données reçues de /mode-rush', data);
                        setIsRushMode(data.isRushMode);
                    });
            }, 10000); // Vérifie toutes les 10 secondes
            return () => clearInterval(interval);
             */
  }, []);

  const [category, setCategory] = React.useState("burgers");
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

  console.log("item from borne", foodItems[category]);

  const handleCategoryChange = (cat) => {
    setCategory(cat.toLowerCase());
    console.log("clicked" + cat);
  };

  console.log("-----borne display-----");

  return (
    <div style={{ height: "100vh", overflow: "hidden" }}>
      <div style={{ height: "auto", overflow: "hidden" }}>
        <BackButtonHeader decreaseFunction={decreaseFunction} />
      </div>
      <div style={{ height: "65%", overflow: "hidden" }}>
        {isRushMode ? (
          <ModeRush ingredients={ingredients} />
        ) : (
          <NavPlusList
            handleCategoryChange={handleCategoryChange}
            foodItems={categoryItems}
            currCat={category}
            indexSupplement={currentIndex}
            setIndexSupplement={setCurrentIndex}
            isSupplement={isSupplement}
            setIsSupplement={setIsSupplement}
          />
        )}
      </div>
      <div style={{ height: "25%" }}>
        <OrderContainer />
      </div>
    </div>
  );
}

export default GlobalPageBorne;
