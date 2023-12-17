import React from "react";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import IconButton from "@mui/material/IconButton";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router";

const HomeBorne = () => {
  // This state will hold the order items and could be updated when items are added or removed
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isLandscape = useMediaQuery("(orientation: landscape)");
  const navigate = useNavigate();

  function onCardClick() {
    navigate("/start");
  }

  function BackButtonHeaderr() {
    // Vous pouvez ajouter une fonction pour gérer l'événement onClick si nécessaire.
    const handleBack = () => {
      // Par exemple, naviguer vers la page précédente.
      console.log("Retour");
    };
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
    const isLandscape = useMediaQuery("(orientation: landscape)");

    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "1vh",
        }}
      >
        <Typography
          variant="h4"
          component="h1"
          style={{
            flexGrow: 1,
            textAlign: "center",
            letterSpacing: "0.1em",
            textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
            fontSize: isSmallScreen ? "5vw" : isLandscape ? "5vh" : "6vw",
            fontWeight: "bold",
          }}
        >
          Borne'n'Go
        </Typography>
      </div>
    );
  }

  return (
    <>
      <BackButtonHeaderr />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
          width: "100vw",
          fontSize: "24px",
          backgroundColor: "#f5f5f5",
        }}
      >
        <h1 style={{ fontSize: "1.3em", marginTop: "1.5em" }}>Commander ici</h1>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
            width: "100%",

            //maxWidth: "600px",
          }}
        >
          <button
            style={{
              padding: "5em 5em",
              margin: "1em",
              borderRadius: "15px",
              border: "2px solid black",
              fontSize: "1.5em",
              cursor: "pointer",
              fontWeight: "bold",
              boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.75)",
              backgroundColor: "green",
            }}
            onClick={onCardClick}
          >
            Sur place
          </button>
          <button
            style={{
              padding: "5em 5em",
              margin: "1em",
              borderRadius: "15px",
              border: "2px solid black",
              fontSize: "1.5em",
              cursor: "pointer",
              fontWeight: "bold",
              boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.75)",
              backgroundColor: "green",
            }}
            onClick={onCardClick}
          >
            À emporter
          </button>
        </div>
      </div>
    </>
  );
};

export default HomeBorne;
