import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

function Header({ category }) {
  const upperCasefirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  return (
    <AppBar position="static" style={{ height: "-webkit-fill-available" }}>
      <Toolbar>
        <IconButton
          style={{ position: "absolute" }}
          edge="start"
          color="inherit"
          aria-label="back"
          onClick={() => console.log("Retour cliqué")}
        >
          <ArrowBackIcon />
        </IconButton>
        <Typography
          variant="h5"
          component="div"
          sx={{ flexGrow: 1, textAlign: "center" }}
        >
          {upperCasefirstLetter(category)}
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
