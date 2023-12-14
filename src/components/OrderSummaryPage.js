// OrderSummaryPage.js
import React, { useEffect, useState } from "react";
import OrderSection from "./common/OrderSection";
import burger from "../assets/img/burger/burger.png";
import cheeseburger from "../assets/img/burger/cheeseburger.jpg";
import frites from "../assets/img/frites/frites.jpg";
import coca from "../assets/img/boisson/cocacola.jpg";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import "./OrderSummaryPage.css";
import PaidIcon from "@mui/icons-material/Paid";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

const OrderSummaryPage = () => {
  const burgers = [
    { id: 1, name: "Hamburger", image: burger, price: 5.0 },
    { id: 2, name: "Cheeseburger", image: cheeseburger, price: 6.5 },
  ];
  const supplements = [{ id: 3, name: "Frites", image: frites, price: 2 }];
  const drinks = [
    { id: 5, name: "Coca", image: coca, price: 1.5 },
    { id: 6, name: "Coca", image: coca, price: 1.5 },
    { id: 7, name: "Coca", image: coca, price: 1.5 },
    { id: 8, name: "Coca", image: coca, price: 1.5 },
    { id: 9, name: "Coca", image: coca, price: 1.5 },
    { id: 10, name: "Coca", image: coca, price: 1.5 },
    { id: 11, name: "Coca", image: coca, price: 1.5 },
  ];
  const theme = useTheme();
  // Utilisez useMediaQuery pour détecter la taille de l'écran
  const isMobile = useMediaQuery(theme.breakpoints.down("sm")); // Définissez la taille maximale pour considérer comme mobile
  const [isScrolling, setIsScrolling] = useState(false);

  // Définissez le style conditionnel pour le bouton de paiement
  const paymentButtonStyle = {
    width: isMobile ? "100%" : "auto",
    marginLeft: isMobile ? 0 : "10px", // Supprime la marge à gauche en mode mobile
    backgroundColor: isScrolling ? "transparent" : "",
    fontSize: isMobile ? "14px" : "16px", // Ajuste la taille de la police en mode mobile
    transition: "background-color 0.3s ease", // Ajoutez une transition pour une animation fluide
  };
  // État pour stocker le prix total
  const [totalPrice, setTotalPrice] = useState(0);

  // Effet pour recalculer le prix total à chaque changement d'articles
  useEffect(() => {
    const calculateTotalPrice = () => {
      const allItems = [...burgers, ...supplements, ...drinks];
      const newTotalPrice = allItems.reduce((acc, item) => acc + item.price, 0);
      setTotalPrice(newTotalPrice);
    };

    calculateTotalPrice();
  }, [burgers, supplements, drinks]);
  useEffect(() => {
    let scrollTimer;

    const handleScroll = () => {
      setIsScrolling(true);
      clearTimeout(scrollTimer);

      scrollTimer = setTimeout(() => {
        setIsScrolling(false);
      }, 200); // Ajustez la durée du délai selon vos besoins
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div style={{ overflowX: "hidden" }}>
      <h1>Récapitulatif de la commande </h1>
      <Grid container spacing={2} className="order-summary-container">
        <Grid item xs={12}>
          <Paper className="order-section" elevation={3}>
            <OrderSection title="Burgers" items={burgers} />
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className="order-section" elevation={3}>
            <OrderSection title="Suppléments" items={supplements} />
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className="order-section" elevation={3}>
            <OrderSection title="Boissons" items={drinks} />
          </Paper>
        </Grid>
      </Grid>
      {/* Ajoutez le bouton de paiement en bas à droite */}
      <div className="payment-button-container">
        <Button
          id="payment_button"
          variant="contained"
          color="success"
          size="large"
          endIcon={<PaidIcon id="paid_icon" />}
          style={paymentButtonStyle} // Appliquez le style conditionnel ici
        >
          Payer {totalPrice} €
        </Button>
      </div>
    </div>
  );
};

export default OrderSummaryPage;
