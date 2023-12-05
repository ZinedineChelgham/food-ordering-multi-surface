import { Card, CardActionArea, CardContent } from '@mui/material';
import React, { useState } from 'react';
import {useTheme} from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

function BasicCard({ style, actionArea, content }) {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const [isClicked, setIsClicked] = useState(false);

    const handleCardClick = () => {
        setIsClicked(!isClicked); // Toggle the state when the card is clicked
    };

    return (
        <Card sx={{ backgroundColor: isClicked ? '#dad8d8' : 'white', height: '100%',width:isSmallScreen? '17.75vw':'inherit', margin:isSmallScreen? '1vw':'1vh',}}
            onClick={handleCardClick}>
            <CardActionArea>
                {actionArea}
                <CardContent sx={{ textAlign: 'center', padding: '0' }}>
                    {content}
                </CardContent>
            </CardActionArea>
        </Card>
    );
}

export default BasicCard;
