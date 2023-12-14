import React from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Header from "./SpecialPhone/Header";
import NavBar from "./NavBar";
import FoodItemList from "./FoodItemList";
import OrderBar from "./SpecialPhone/OrderBar";
import OrderHeader from "./OrderHeader";
import NavPlusList from "./NavPlusListBorn";
import OrderContainer from './OrderContainer';

function GlobalPage(props) {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const isLandscape = useMediaQuery('(orientation: landscape)');

    return (
        <div style={{ height: '100vh', overflow: 'hidden'}}>
            <div style={{ height: '5%', overflow: 'hidden' }}>
                <Header />
            </div>
            <div style={{ height: '70%', overflow: 'hidden' }}>
                {/* Le composant OrderBar prendra tout l'espace disponible */}
                <NavPlusList/>
            </div>
            <div style={{ height: '25%' }}>
                <OrderContainer/>
            </div>
        </div>
    );
}

export default GlobalPage;
