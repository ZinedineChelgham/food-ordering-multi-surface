import { Card, CardActionArea, CardContent } from '@mui/material';
import React, { useState } from 'react';

function BasicCard({ style, actionArea, content }) {
    const [isClicked, setIsClicked] = useState(false);

    const handleCardClick = () => {
        setIsClicked(!isClicked); // Toggle the state when the card is clicked
    };

    return (
        <Card sx={{ backgroundColor: isClicked ? '#dad8d8' : 'white' }}
            onClick={handleCardClick}>
            <CardActionArea>
                {actionArea}
                <CardContent sx={{ textAlign: 'center' }}>
                    {content}
                </CardContent>
            </CardActionArea>
        </Card>
    );
}

export default BasicCard;
