import React from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Unstable_Grid2/Grid2";

function OrderBar({ leftText, totalPrice, onClick }) {
  return (
    <Paper
      elevation={3}
      onClick={onClick}
      padding={4}
      sx={{
        height: "100%",
        width: "100%",
        backgroundColor: "yellow",
        display: "flex",
        justifyContent: "space-between",
        cursor: "pointer",
        transition: "background-color 0.3s",
        "&:hover": {
          backgroundColor: "lightyellow",
        },
      }}
    >
      <Grid container xs={11} justifyContent={"space-around"} padding={2}>
        <Typography
          variant="h6"
          sx={{ flexGrow: 1, fontSize: "3vw", fontFamily: "Arial" }}
        >
          Aller à la commande 🛒
        </Typography>
        <Typography
          variant="h6"
          style={{ fontSize: "3vw", fontFamily: "Arial" }}
        >
          Total : 10.90{totalPrice} €
        </Typography>
      </Grid>
    </Paper>
  );
}

export default OrderBar;
