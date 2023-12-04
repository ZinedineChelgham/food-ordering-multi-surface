// OrderSummaryPage.js
import React from 'react';
import OrderSection from './common/OrderSection';
import burger from '../assets/img/burger/burger.png';
import cheeseburger from '../assets/img/burger/cheeseburger.jpg';
import frites from '../assets/img/frites/frites.jpg';
import coca from '../assets/img/boisson/cocacola.jpg';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import  './OrderSummaryPage.css'
import PaidIcon from '@mui/icons-material/Paid';


const OrderSummaryPage = () => {
    const burgers = [
        { id: 1, name: 'Hamburger', image: burger  },
        { id: 2, name: 'Cheeseburger', image: cheeseburger },
        ];
    const supplements = [
        { id: 3, name: 'Frites', image: frites },
        ];
    const drinks = [
        { id: 5, name: 'Coca', image: coca },
        ];

    return (
        <div>
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
                <Button id="payment_button" variant="contained" color="success" size="large" endIcon={<PaidIcon id="paid_icon"/>}>
                    Payer 5€
                </Button>
            </div>
        </div>
    );
};

export default OrderSummaryPage;