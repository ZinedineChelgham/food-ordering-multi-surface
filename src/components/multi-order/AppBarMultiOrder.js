import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const AppBarMultiOrder = ({ title, decreaseFunction }) => {
  return (
    <AppBar position="sticky">
      <Toolbar>
        {/* IconButton with ArrowBackIcon */}
        <IconButton
          edge="start"
          color="inherit"
          aria-label="back"
          onClick={decreaseFunction}
        >
          <ArrowBackIcon />
        </IconButton>

        {/* Typography for Title */}
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          {title}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default AppBarMultiOrder;
