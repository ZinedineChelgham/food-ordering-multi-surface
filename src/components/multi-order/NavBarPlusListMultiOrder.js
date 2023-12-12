import React from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import NavBar from "../NavBar";
import FoodItemList from "../FoodItemList";


function NavPlusListMultiOrder() {

    return (
        <div style={{ width: '50vw', height:'100%', overflow: 'hidden',display: 'flex',flexdirection: 'row', justifyContent: 'space-between'}}>
            <div style={{ height: '20%', }}>
                <NavBar isMultiOrder />
            </div>
            <div style={{ width: '75%', overflow: 'hidden',marginRight:'2vw' }}>
                <FoodItemList />
            </div>
        </div>
    );
}

export default NavPlusListMultiOrder;