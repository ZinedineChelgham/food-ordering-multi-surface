import Grid from "@mui/material/Grid";
import FoodItemCard from "./common/FoodItemCard";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

function FoodItemsList({ foodItems, currCat }) {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

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
      {foodItems.map((item, index) => (
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
          <FoodItemCard item={item} />
        </Grid>
      ))}
    </Grid>
  );
}

export default FoodItemsList;
