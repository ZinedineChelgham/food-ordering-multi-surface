import { Card, CardActionArea, CardContent } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";
import React, { useCallback, useState } from "react";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

function BasicCard(props) {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  //const [isClicked, setIsClicked] = useState(false);

  const { style, actionArea, content, handleCategoryChange, category } = props;

  const handleCardClick = () => {
    console.log("basicCard", category);
    handleCategoryChange(category);
    //setIsClicked(!isClicked); // Toggle the state when the card is clicked
  };

  //console.log(memoizedHandleClick);

  return (
    <Card
      sx={{
        //backgroundColor: isClicked ? "#dad8d8" : "white",
        width: isSmallScreen ? "4rem" : "9rem",
        height: "fit-content",
        ...style,
      }}
      elevation={0}
    >
      <CardActionArea onClick={() => handleCardClick()}>
        {actionArea}
        <CardContent sx={{ textAlign: "center", padding: 0 }}>
          {content}
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default BasicCard;
