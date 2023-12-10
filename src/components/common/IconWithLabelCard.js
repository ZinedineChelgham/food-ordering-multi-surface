import { useState } from "react";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import BasicCard from "./BasicCard";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

function IconWithLabelCard({ icoInfo, handleCategoryChange }) {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  console.log(handleCategoryChange);

  const getActionArea = () => {
    return (
      <CardMedia
        sx={{
          fontSize: isSmallScreen ? "6vw" : "9.8vh",
          margin: "auto",
          //width: "100%",
          padding: "0",
        }}
        component={icoInfo.icon}
      />
    );
  };

  const getContent = () => {
    return (
      <Typography
        gutterBottom
        variant="h5"
        component="div"
        sx={{
          textAlign: "center",
          fontSize: isSmallScreen ? "3vw" : "4vh",
        }}
      >
        {icoInfo.label}
      </Typography>
    );
  };

  return (
    <BasicCard
      style={undefined}
      sx={{ backgroundColor: "blue" }}
      actionArea={getActionArea()}
      content={getContent()}
      handleCategoryChange={handleCategoryChange}
    />
  );
}

export default IconWithLabelCard;
