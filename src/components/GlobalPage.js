import React from "react";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import HomePhone from "./SpecialPhone/PhonePageHome";
import GlobalPageBorne from "./GlobalPageBorn";
import HomeBorne from "./HomeBorne";

function GlobalPage() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  if (isSmallScreen) {
    return <HomePhone />;
  } else {
    return <GlobalPageBorne />;
  }
}

export default GlobalPage;
