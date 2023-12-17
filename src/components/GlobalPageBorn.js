import React from "react";
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
import CartContext from "../context/CartContext";
import IconButton from "@mui/material/IconButton";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Typography from "@mui/material/Typography";
// function GlobalPageBorne(props) {
//     const theme = useTheme();
//     const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
//     const isLandscape = useMediaQuery("(orientation: landscape)");
//     const [isRushMode, setIsRushMode] = React.useState(false);
const ingredients = ["tomate", "oeuf", "fromage", "steak", "cornichon", "oignon", "pain", "salade", "fromage", "steak"];
    // const boissons = ["coca-cola", "sprite", "fanta"];
    // const desserts = ["fraise", "nature", "fraise"];
//     // const boissons = [
//     //     { id: 1, name: "Coca-Cola", price: 1.50, imageName: "coca-cola" },
//     //     { id: 2, name: "Sprite", price: 1.50, imageName: "sprite" },
//     //     { id: 3, name: "Fanta", price: 1.50, imageName: "fanta" },
//     //     // ...
//     //   ];
      
//     //   const desserts = [
//     //     { id: 1, name: "Gâteau à la fraise", price: 2.50, imageName: "gateau-fraise" },
//     //     { id: 2, name: "Glace nature", price: 2.00, imageName: "glace-nature" },
//     //     { id: 3, name: "Gâteau au chocolat", price: 2.50, imageName: "gateau-chocolat" },
//     //     // ...
//     //   ];
 //const { cartItems } = React.useContext(CartContext);


function BackButtonHeader() {
  // Vous pouvez ajouter une fonction pour gérer l'événement onClick si nécessaire.
  const handleBack = () => {
    // Par exemple, naviguer vers la page précédente.
    console.log("Retour");
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
  const ingredients = ["tomate", "oeuf", "fromage", "steak", "cornichon", "oignon", "pain", "salade", "fromage", "steak"];
//   const boissons = ["coca-cola", "sprite", "fanta"];
//   const desserts = ["fraise", "nature", "fraise"];
  const boissons = [
      { id: 1, name: "Coca-Cola", price: 1.50, imageName: "coca-cola" },
      { id: 2, name: "Sprite", price: 1.50, imageName: "sprite" },
      { id: 3, name: "Fanta", price: 1.50, imageName: "fanta" },
      // ...
    ];
    
    const desserts = [
      { id: 1, name: "Gâteau à la fraise", price: 2.50, imageName: "fraise" },
      { id: 2, name: "Glace nature", price: 2.00, imageName: "nature" },
      { id: 3, name: "Gâteau au chocolat", price: 2.50, imageName: "fraise" },
      // ...
    ];
  const { cartItems } = React.useContext(CartContext);

  React.useEffect(() => {
    const interval = setInterval(() => {
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
        <BackButtonHeader />
      </div>
      <div style={{ height: "65%", overflow: "hidden" }}>
    
          <NavPlusList
            handleCategoryChange={handleCategoryChange}
            foodItems={categoryItems}
            currCat={category}
            isRushMode={isRushMode}
          />

      </div>
      <div style={{ height: "25%" }}>
        <OrderContainer />
      </div>
    </div>
  );
}

export default GlobalPageBorne;
