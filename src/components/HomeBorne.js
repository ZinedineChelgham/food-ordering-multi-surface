import React from "react";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import IconButton from "@mui/material/IconButton";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router";

const HomeBorne = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isLandscape = useMediaQuery("(orientation: landscape)");
  const navigate = useNavigate();

  function onCardClick() {
    navigate("/start");
  }

  const styles = {
    backButtonHeader: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "1vh",
    },
    title: {
      flexGrow: 1,
      textAlign: "center",
      letterSpacing: "0.1em",
      textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
      fontSize: isSmallScreen ? "5vw" : isLandscape ? "6vh" : "6vw",
      fontWeight: "bold",
    },
    mainContainer: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "80vh",
      width: "100vw",
      fontSize: "24px",
      backgroundColor: "#f5f5f5",
    },
    header: {
      fontSize: "2.1vw",
    },
    buttonContainer: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-around",
      width: "100%",
    },
    button: {
      padding: "10vw 10vw",
      margin: "1em",
      borderRadius: "15px",
      border: "2px solid black",
      fontSize: "4vw",
      cursor: "pointer",
      fontWeight: "bold",
      boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.75)",
      backgroundColor: "green",
    },
  };

  function BackButtonHeaderr() {
    return (
      <div style={styles.backButtonHeader}>
        <Typography variant="h4" component="h1" style={styles.title}>
          Borne'n'Go
        </Typography>
      </div>
    );
  }

  return (
    <>
      <BackButtonHeaderr />
      <div style={styles.mainContainer}>
        <h1 style={styles.header}>Commander ici</h1>
        <div style={styles.buttonContainer}>
          <button style={styles.button} onClick={onCardClick}>
            Sur place
          </button>
          <button style={styles.button} onClick={onCardClick}>
            À emporter
          </button>
        </div>
      </div>
    </>
  );
};

export default HomeBorne;
