import React from 'react';
import Grid from '@mui/material/Grid';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import NavBar from "../NavBar";
import FoodItemList from "../FoodItemList";
import OrderBar from "./OrderBar";
import Header from "./Header";

function HomePhone(props) {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <div style={{ height: '100vh', overflow: 'hidden'}}>
            <div style={{ height: '7%', overflow: 'hidden' }}>
                <Header />
            </div>
            <div style={{ height: '76%', overflow: 'hidden' ,display: 'flex',
                justifyContent: 'center'}}>
                <FoodItemList />
            </div>
            <div style={{ height: '7%', overflow: 'hidden' }}>
                {/* Le composant OrderBar prendra tout l'espace disponible */}
                <OrderBar />
            </div>
            <div style={{ height: '7%' }}>
                <NavBar />
            </div>
        </div>
    );
}

export default HomePhone;
