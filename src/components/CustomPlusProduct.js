import React from "react";
import PropTypes from "prop-types";
import { Button, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

const TelephoneComponent = ({ buttonText, textContent, otherComponent }) => {
  const containerStyle = {
    backgroundColor: "#87CEEB", // Couleur bleu ciel
    overflow: "hidden",
  };

  const divStyle = {
    height: "500px", // 70% de la hauteur du conteneur
  };

  return (
    <Grid
      container
      spacing={2}
      justifyContent="center"
      alignItems="center"
      style={containerStyle}
    >
      {/* 1/6 du haut avec le bouton */}
      <Grid item xs={8}>
        <Button variant="contained" fullWidth sx={{ marginTop: "20px" }}>
          {buttonText}
        </Button>
      </Grid>

      {/* Deuxième 1/6 avec le texte */}
      <Grid item xs={12}>
        <Typography align="center">{textContent}</Typography>
      </Grid>

      {/* Dernier 4/6 avec l'autre composant */}
      <Grid item xs={10} style={divStyle} textAlign="center">
        {otherComponent}
      </Grid>
    </Grid>
  );
};

TelephoneComponent.propTypes = {
  buttonText: PropTypes.string.isRequired,
  textContent: PropTypes.string.isRequired,
  otherComponent: PropTypes.element.isRequired,
};

export default TelephoneComponent;
