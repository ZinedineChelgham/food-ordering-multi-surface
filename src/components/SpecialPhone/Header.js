import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

function Header({ category, decreaseFunction, index }) {
  const upperCasefirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  console.log("current inx", index);

  return (
    <AppBar
      position="static"
      style={{
        height: "-webkit-fill-available",
        backgroundColor: "white",
        justifyContent: "center",
      }}
    >
      <Toolbar>
        <IconButton
          style={{
            position: "absolute",
            color: "black",
            display: index === -1 ? "none" : "block",
          }}
          edge="start"
          color="inherit"
          aria-label="back"
          onClick={() => decreaseFunction()}
        >
          <ArrowBackIcon />
        </IconButton>
        <Typography
          variant="h5"
          component="div"
          sx={{ flexGrow: 1, textAlign: "center", color: "black" }}
        >
          {upperCasefirstLetter(category)}
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
