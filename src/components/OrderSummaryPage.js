// OrderSummaryPage.js
import React, {useEffect, useState, useContext} from 'react';
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
import useMediaQuery from '@mui/material/useMediaQuery';
import {useTheme} from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Toolbar from "@mui/material/Toolbar";
import AppBar from "@mui/material/AppBar";
import {Slide, useScrollTrigger} from "@mui/material";
import { useLocation } from 'react-router-dom';
import CartContext from "../context/CartContext";




const OrderSummaryPage = () => {
    const location = useLocation();
    const [cartItems, setCartItems] = useState(location.state?.cartItems || []);
    const theme = useTheme();
    // Utilisez useMediaQuery pour détecter la taille de l'écran
    const isMobile = useMediaQuery(theme.breakpoints.down('sm')); // Définissez la taille maximale pour considérer comme mobile
    const [isScrolling, setIsScrolling] = useState(false);

    // Définissez le style conditionnel pour le bouton de paiement
    const paymentButtonStyle = {
        width: isMobile ? '100%' : 'auto',
        marginLeft: isMobile ? 0 : '10px', // Supprime la marge à gauche en mode mobile
        backgroundColor: isScrolling ? 'transparent' : '',
        fontSize: isMobile ? '14px' : '16px', // Ajuste la taille de la police en mode mobile
        transition: 'background-color 0.3s ease', // Ajoutez une transition pour une animation fluide

    };
    // État pour stocker le prix total
    const [totalPrice, setTotalPrice] = useState(0);
    useEffect(() => {
        const newTotalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
        setTotalPrice(newTotalPrice);
    }, [cartItems]);

    const categorizeItems = () => {
        // Cette fonction devrait diviser les cartItems en différentes catégories
        console.log(cartItems)
        const categorized = {
            burgers: cartItems.filter(item => item.type === 'burger'),
            menus: cartItems.filter(item => item.type === 'menu'),
            desserts: cartItems.filter(item => item.type === 'dessert'),
            boissons: cartItems.filter(item => item.type === 'boisson'),

            // Répétez pour les autres catégories...
        };
        return categorized;
    };

    const handleIncrease = (id) => {
        const updatedItems = cartItems.map(item =>
            item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        );
        setCartItems(updatedItems);
    };


    const handleDecrease = (id) => {
        const updatedItems = cartItems.map(item =>
            item.id === id ? { ...item, quantity: Math.max(item.quantity - 1, 0) } : item
        );
        setCartItems(updatedItems);
    };

    const handleDelete = (id) => {
        const updatedItems = cartItems.filter(item => item.id !== id);
        setCartItems(updatedItems);
    };

    const categorizedItems = categorizeItems();
    useEffect(() => {
        let scrollTimer;

        const handleScroll = () => {
            setIsScrolling(true);
            clearTimeout(scrollTimer);
            scrollTimer = setTimeout(() => {
                console.log('Stopped scrolling.');
                setIsScrolling(false);
            }, 200); // Ajustez la durée du délai selon vos besoins
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <div style={{ overflowX: 'hidden', marginTop:'10vh'}}>
                <AppBar position="fixed" style={{height:'10vh', display: 'flex',
                    justifyContent: 'center'}}>
                    <Toolbar style={{justifyContent: 'space-between' }}>
                        <Typography variant="h6">Récapitulatif de commande</Typography>
                        <Button color="inherit">Retour</Button>
                    </Toolbar>
                </AppBar>
            <Grid container spacing={2} className="order-summary-container" style={{marginTop:'0'}}>
                <Grid item xs={12} sx={{display: 'flex',
                    justifyContent: 'center'}}>
                    <Paper className="order-section" elevation={3}>
                        <OrderSection title="Burgers" items={categorizedItems.burgers}
                                      onIncrease={handleIncrease}
                                      onDecrease={handleDecrease}
                                      onDelete={handleDelete}/>
                    </Paper>
                </Grid>
                <Grid item xs={12} sx={{display: 'flex',
                    justifyContent: 'center'}}>
                    <Paper className="order-section" elevation={3}>
                        <OrderSection title="Menus" items={categorizedItems.menus}
                                      onIncrease={handleIncrease}
                                      onDecrease={handleDecrease}
                                      onDelete={handleDelete}/>
                    </Paper>
                </Grid>
                <Grid item xs={12} sx={{display: 'flex',
                    justifyContent: 'center'}}>
                    <Paper className="order-section" elevation={3}>
                        <OrderSection title="Desserts" items={categorizedItems.desserts}
                                      onIncrease={handleIncrease}
                                      onDecrease={handleDecrease}
                                      onDelete={handleDelete}/>
                    </Paper>
                </Grid>
                <Grid item xs={12} sx={{display: 'flex',
                    justifyContent: 'center'}}>
                    <Paper className="order-section" elevation={3}>
                        <OrderSection title="Boisson" items={categorizedItems.boissons}
                                      onIncrease={handleIncrease}
                                      onDecrease={handleDecrease}
                                      onDelete={handleDelete}/>
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
                    style={paymentButtonStyle}  // Appliquez le style conditionnel ici
                >
                    Payer {totalPrice} €
                </Button>
            </div>
        </div>
    );
};

export default OrderSummaryPage;
