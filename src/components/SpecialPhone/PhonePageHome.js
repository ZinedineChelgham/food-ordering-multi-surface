import React from 'react';
import Grid from '@mui/material/Grid';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import NavBar from "../NavBar";

function HomePhone(props) {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Grid container direction={isSmallScreen ? 'column' : 'row'}>
            <div style={{width:'100%'}}>
                <NavBar/>
            </div>
        </Grid>
    );
}

export default HomePhone;
