// OrderSummaryPage.js
import React from 'react';
import OrderSection from './common/OrderSection';
import burger from '../assets/img/burger/burger.png';
import cheeseburger from '../assets/img/burger/cheeseburger.jpg';
import frites from '../assets/img/frites/frites.jpg';
import coca from '../assets/img/boisson/cocacola.jpg';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import  './OrderSummaryPage.css'


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
    );
};

export default OrderSummaryPage;