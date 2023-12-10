import { Card, CardActionArea, CardContent } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";
import React, { useCallback, useState } from "react";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useMemo } from "react";
import { useEffect } from "react";

function BasicCard(props) {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const [isClicked, setIsClicked] = useState(false);

  const { style, actionArea, content, handleCategoryChange } = props;

  // const memoizedHandleClick = useMemo(() => handleClick, [handleClick]);

  console.log(handleCategoryChange);
  const handleCardClick = () => {
    console.log(handleCategoryChange === undefined);
    handleCategoryChange("menus");
    setIsClicked(!isClicked); // Toggle the state when the card is clicked
  };

  //console.log(memoizedHandleClick);

  return (
    <Card
      sx={{
        backgroundColor: isClicked ? "#dad8d8" : "white",
        width: isSmallScreen ? "4rem" : "9rem",
        height: "fit-content",
        ...style,
      }}
      elevation={0}
    >
      <CardActionArea
        onClick={() => {
          console.log("clicked");
          handleCardClick();
        }}
      >
        {actionArea}
        <CardContent sx={{ textAlign: "center", padding: 0 }}>
          {content}
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default BasicCard;
