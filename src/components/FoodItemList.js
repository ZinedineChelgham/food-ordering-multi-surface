import React from "react";
import Grid2 from "@mui/material/Unstable_Grid2";
import FoodItemCard from "./common/FoodItemCard";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Typography from "@mui/material/Typography";

function FoodItemsList({ foodItems }) {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const [items, setItems] = React.useState([]);

  React.useEffect(() => {
    if (Array.isArray(foodItems)) {
      setItems([...foodItems]);
    } else {
      setItems([]);
    }
  }, [foodItems]);

  console.log("items from state", items);

  return (
    <Grid2
      container
      direction="row"
      justifyContent="start"
      alignItems="start"
      xs={12}
      //paddingRight={11}
      sx={{
        //height: isSmallScreen? '59vh':'100%',
        //height:'59vh',
        height: "100%",
        backgroundColor: "blue",
        overflow: "auto",
        "&::-webkit-scrollbar": {
          display: "none",
        },
      }}
    >
      <Grid2 xs={12}>
        <Typography textAlign={"start"} margin={2} variant="h2" width={"100%"}>
          Burgers
        </Typography>
      </Grid2>

      <Grid2
        container
        xs={10}
        gap={2}
        justifyContent={"center"}
        alignItems={"start"}
      >
        {items.map((item, index) => (
          <Grid2 key={index}>
            <FoodItemCard item={item} />
          </Grid2>
        ))}
      </Grid2>
    </Grid2>
  );
}

export default FoodItemsList;
