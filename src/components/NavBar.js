import React from "react";
import Grid from "@mui/material/Grid";
import IconWithLabelCard from "./common/IconWithLabelCard";
import LunchDiningIcon from "@mui/icons-material/LunchDining";
import CookieIcon from "@mui/icons-material/Cookie";
import FoodBankIcon from "@mui/icons-material/FoodBank";
import LocalDrinkIcon from "@mui/icons-material/LocalDrink";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

function NavBar({ handleCategoryChange, currCat }) {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  console.log(handleCategoryChange);

  const iconsInfos = [
    { icon: FastfoodIcon, route: "/fastfood", label: "menus" },
    { icon: LunchDiningIcon, route: "/lunch", label: "burgers" },
    { icon: CookieIcon, route: "/cookie", label: "desserts" },
    { icon: LocalDrinkIcon, route: "/drink", label: "boissons" },
  ];

  return (
    <Grid
      container
      direction={isSmallScreen ? "row" : "column"}
      justifyContent="space-around"
      alignItems="center"
      width="100%"
      height="100%"
      spacing={1}
      wrap="nowrap"
      sx={{
        overflowX: "auto", // Use overflowX instead of overflow for horizontal scrolling
        whiteSpace: "nowrap", // Prevent items from wrapping
        "&::-webkit-scrollbar": {
          display: "none",
        },
      }}
    >
      {iconsInfos.map((icoInfo, index) => (
        <Grid item key={index}>
          <IconWithLabelCard
            icoInfo={icoInfo}
            handleCategoryChange={handleCategoryChange}
            currCat={currCat}
          />
        </Grid>
      ))}
    </Grid>
  );
}

export default NavBar;
