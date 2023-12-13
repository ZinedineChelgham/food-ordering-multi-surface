import React from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Header from "./SpecialPhone/Header";
import NavBar from "./NavBar";
import FoodItemList from "./FoodItemList";
import OrderBar from "./SpecialPhone/OrderBar";

function NavPlusList(props) {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const isLandscape = useMediaQuery('(orientation: landscape)');

    return (
        <div style={{ width: '100vw', height:'100%', overflow: 'hidden',display: 'flex',
            flexdirection: 'row', justifyContent: 'space-between'}}>
            <div style={{ height: '20%', }}>
                <NavBar />
            </div>
            <div style={{ width: '75%', overflow: 'hidden' }}>
                <FoodItemList />
            </div>
        </div>
    );
}

export default NavPlusList;
