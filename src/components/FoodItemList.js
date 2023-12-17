import Grid from "@mui/material/Grid";
import FoodItemCard from "./common/FoodItemCard";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import SupplementList from "./SupplementList";
import { useState } from "react";
import ModeRush from "./ModeRush";



function FoodItemsList({
  foodItems,
  currCat,
  indexSupplement,
  setIndexSupplement,
  isSupplement,
  setIsSupplement,
}) {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const supplementBurger = ["Fromage", "Viande", "Divers"];

  

  
  const isRushMode = true;
  const ingredients = ["tomate", "oeuf", "fromage", "steak", "cornichon", "oignon", "pain", "salade", "fromage", "steak"];
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

const [recipe, setRecipe] = useState([]);


  return (
    <Grid
      container
      spacing={2}
      direction="row"
      justifyContent="center"
      alignItems="center"
      xs={12}
      style={{
        display: isSmallScreen ? "" : "flex",
        justifyContent: isSmallScreen ? "" : "space-around",
        alignContent: isSmallScreen ? "" : "flex-start",
        overflow: isSupplement ? "hidden" : "",
      }}
      sx={{
        height: "100%",
        marginLeft: "0",
        marginTop: "0",
        backgroundColor: "#8b8f8f",
        overflow: "auto",
        "&::-webkit-scrollbar": {
          display: "none",
        },
      }}
    >
      {isSupplement ?(isRushMode?
        <ModeRush
        recipe={recipe}
          ingredients={recipe} 
                        drinks={boissons} 
                        desserts={desserts} ></ModeRush>: 
        <SupplementList
          type={supplementBurger[indexSupplement]}
          index={indexSupplement}
          setIndex={setIndexSupplement}
          setIsSupplement={setIsSupplement}
        />
      ) : (
        foodItems.map((item, index) => (
          <Grid
            key={index}
            item
            xs={isSmallScreen ? 12 : 2.75}
            style={{
              padding: "0",
              marginBottom: isSmallScreen ? "0" : "2vh",
              marginTop: "2vh",
            }}
          >
            <FoodItemCard
              item={item}
              setSupplement={setIsSupplement}
              indexBurger={setIndexSupplement}
              setRecipe={setRecipe}
            />
          </Grid>
        ))
      )}
    </Grid>
  );
}

export default FoodItemsList;
