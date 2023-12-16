import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const AppBarMultiOrder = ({
  title,
  showViewOrderButton,
  onViewOrderButtonClick,
}) => {
  return (
    <AppBar position="sticky">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          {title}
        </Typography>
        {showViewOrderButton && (
          <Button color="inherit" onClick={onViewOrderButtonClick}>
            Voir la commande
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default AppBarMultiOrder;
