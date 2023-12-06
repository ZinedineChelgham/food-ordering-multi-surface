import { Card, CardActionArea, CardContent } from '@mui/material';
import Grid2 from "@mui/material/Unstable_Grid2";
import React, { useState } from 'react';
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

function BasicCard({ style, actionArea, content }) {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const [isClicked, setIsClicked] = useState(false);

    const handleCardClick = () => {
        setIsClicked(!isClicked); // Toggle the state when the card is clicked
    };

    return (
        <Grid2
            direction="row"
            sx={{
                backgroundColor: isClicked ? '#dad8d8' : 'white',
                width: 'inherit',
                margin: isSmallScreen ? '1vw' : '1vh',
                alignItems: 'center', // Align the content vertically in the center
            }}
            onClick={handleCardClick}
        >
            <CardActionArea>
                {actionArea}
                <CardContent sx={{ textAlign: 'center', padding: '0' }}>
                    {content}
                </CardContent>
            </CardActionArea>
        </Grid2>
    );
}

export default BasicCard;
