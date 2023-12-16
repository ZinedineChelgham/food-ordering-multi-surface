import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

function Header({ category }) {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
            style={{position: 'absolute'}}
            edge="start"
          color="inherit"
          aria-label="back"
          onClick={() => console.log("Retour cliqué")}
        >
          <ArrowBackIcon />
        </IconButton>
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, textAlign: "center" }}
        >
          {category}
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
