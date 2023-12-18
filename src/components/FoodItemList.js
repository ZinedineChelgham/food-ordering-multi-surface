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
                           isRushMode,
                           isMultiOrder,
                       }) {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
    const supplementBurger = ["Fromage", "Viande", "Divers"];


const [recipe, setRecipe] = useState([]);
const [currentChoice, setCurrentChoice] = useState();

  return (
    <Grid
      container
      spacing={2}
      direction="row"
      justifyContent="center"
      alignItems="center"
      sx={{
        height: "100%",
        marginLeft: 0,
        marginTop: 0,
        backgroundColor: "#8b8f8f",
        overflow: "auto",
        "&::-webkit-scrollbar": {
          display: "none",
        },
      }}
    >
      {isSupplement ? (
        isRushMode ? (
          <ModeRush
            recipe={recipe}
            ingredients={recipe}
            currentChoice={currentChoice}
          />
        ) : (
          <SupplementList
            type={supplementBurger[indexSupplement]}
            index={indexSupplement}
            setIndex={setIndexSupplement}
            setIsSupplement={setIsSupplement}
            isMultiOrder={isMultiOrder}
          />
        )
      ) : (
        foodItems.map((item, index) => (
          <Grid item key={index} xs={isSmallScreen ? 12 : 2.75} style={{padding:isSmallScreen? '0':''}}>
            <Grid
              sx={{
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
                setCurrentChoice={setCurrentChoice}
              />
            </Grid>
          </Grid>
        ))
      )}
    </Grid>
  );
}

export default FoodItemsList;
