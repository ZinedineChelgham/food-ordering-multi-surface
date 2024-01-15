import { Card, CardActionArea, CardContent } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";
import React, { useState } from "react";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

function BasicCard({
  style,
  actionArea,
  content,
  handleCategoryChange,
  category,
  currCat,
  fromIcon,
  onFoodItemClick,
  isMultiOrder,
}) {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const handleCardClick = () => {
    if (fromIcon) {
      handleCategoryChange(category);
    } else {
      onFoodItemClick();
    }
  };

  if (isSmallScreen) {
    return (
      <Grid2
        direction="row"
        sx={{
          backgroundColor:
            fromIcon && currCat.toLowerCase() === category.toLowerCase()
              ? "#dad8d8"
              : "white",
          width: "inherit",
          margin: isSmallScreen ? "1vw" : "1vh",
          alignItems: "center", // Align the content vertically in the center
          borderRadius: "10px",
        }}
      >
        <CardActionArea onClick={() => handleCardClick()}>
          {actionArea}
          <CardContent sx={{ textAlign: "center", padding: "0" }}>
            {content}
          </CardContent>
        </CardActionArea>
      </Grid2>
    );
  } else {
    return (
      <Card
        elevation={3}
        sx={{
          backgroundColor:
            fromIcon && currCat.toLowerCase() === category.toLowerCase()
              ? "#dad8d8"
              : "white",
        }}
      >
        <CardActionArea onClick={() => handleCardClick()}>
          {actionArea}
          <CardContent
            sx={{
              textAlign: "center",
              padding: "0",
            }}
          >
            {content}
          </CardContent>
        </CardActionArea>
      </Card>
    );
  }
}

export default BasicCard;
