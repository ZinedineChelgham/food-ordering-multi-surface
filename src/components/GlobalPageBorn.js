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

function GlobalPageBorne(props) {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
    const isLandscape = useMediaQuery("(orientation: landscape)");
    const [isRushMode, setIsRushMode] = React.useState(false);
    const ingredients = ["tomate", "oeuf", "fromage", "steak", "cornichon", "oignon", "pain", "salade", "fromage", "steak"];
    const boissons = ["coca-cola", "sprite", "fanta"];
    const desserts = ["fraise", "nature", "fraise"];
    // const boissons = [
    //     { id: 1, name: "Coca-Cola", price: 1.50, imageName: "coca-cola" },
    //     { id: 2, name: "Sprite", price: 1.50, imageName: "sprite" },
    //     { id: 3, name: "Fanta", price: 1.50, imageName: "fanta" },
    //     // ...
    //   ];
      
    //   const desserts = [
    //     { id: 1, name: "Gâteau à la fraise", price: 2.50, imageName: "gateau-fraise" },
    //     { id: 2, name: "Glace nature", price: 2.00, imageName: "glace-nature" },
    //     { id: 3, name: "Gâteau au chocolat", price: 2.50, imageName: "gateau-chocolat" },
    //     // ...
    //   ];
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


    const [category, setCategory] = React.useState("menus");

    console.log("item from borne", foodItems[category]);

    const handleCategoryChange = (cat) => {
        setCategory(cat.toLowerCase());
        console.log("clicked" + cat);
    };

    console.log("-----borne display-----");


    return (
        <div style={{ height: "100vh", overflow: "hidden" }}>
            <div style={{ height: "5%", overflow: "hidden" }}>
                <Header />
            </div>
            <div style={{ height: "70%", overflow: "hidden" }}>
                {isRushMode && cartItems.length === 0 ? (
                    <ModeRush 
                        ingredients={ingredients} 
                        drinks={boissons} 
                        desserts={desserts} 
                        />
                ) : (
                    <NavPlusList 
                        handleCategoryChange={handleCategoryChange}
                        foodItems={foodItems[category]}
                        currCat={category} 
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
