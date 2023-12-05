import React from 'react';
import Grid from '@mui/material/Grid';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import NavBar from "../NavBar";
import FoodItemList from "../FoodItemList";

function HomePhone(props) {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Grid container direction={isSmallScreen ? 'column' : 'row'}>
            <div style={{width:'100%',display:"flex",flexDirection:'column'}}>
                <div>
                    <NavBar/>
                </div>
                <div>
                    <FoodItemList/>
                </div>
                <div>
                    <NavBar/>
                </div>
                <div>
                    <NavBar/>
                </div>
            </div>
        </Grid>
    );
}

export default HomePhone;
