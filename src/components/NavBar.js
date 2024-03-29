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
import IcecreamIcon from "@mui/icons-material/Icecream";
import LocalPizzaIcon from "@mui/icons-material/LocalPizza";
import DinnerDiningIcon from '@mui/icons-material/DinnerDining';
import TapasIcon from '@mui/icons-material/Tapas';

function NavBar({
  handleCategoryChange,
  currCat,
  isMultiOrder,
  indexSupplement,
}) {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isLandscape = useMediaQuery("(orientation: landscape)");
  const iconsInfos = [
    { icon: TapasIcon, route: "/lunch", label: "Entrées" },
    { icon: DinnerDiningIcon, route: "/fastfood", label: "Plats" },
    { icon: LocalDrinkIcon, route: "/drink", label: "Boissons" },
    { icon: IcecreamIcon, route: "/cookie", label: "Desserts" },
  ];
  return (
    <div
      style={{
        display: "flex",
        flexDirection: isSmallScreen ? "row" : "column",
        width: "max-content",
        margin: "auto",
        gap: "2vh",
      }}
    >
      {iconsInfos.map((icoInfo, index) => (
        <Grid
          item
          xs={12}
          key={index}
          sx={{
            width: isSmallScreen
              ? "20vw"
              : isMultiOrder
              ? "6vw"
              : isLandscape
              ? "25vw"
              : "15vh",
            height: isSmallScreen ? "" : "14vh",
          }}
        >
          <IconWithLabelCard
            props={icoInfo}
            handleCategoryChange={handleCategoryChange}
            currCat={currCat}
            isMultiOrder={isMultiOrder}
          />
        </Grid>
      ))}
    </div>
  );
}

export default NavBar;
