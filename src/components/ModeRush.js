// ModeRushList.js
import React from 'react';
import { Grid } from '@mui/material';
import ProductCard from "./common/ProductCard";
import image1 from '../assets/img/burger/image_1.png';
import image2 from '../assets/img/burger/image_2.png';
import image3 from "../assets/img/burger/image_3.png";
import image4 from "../assets/img/burger/image_4.png";
import image5 from "../assets/img/burger/image_5.png";
import image6 from "../assets/img/burger/image_6.png";
import image7 from "../assets/img/burger/image_7.png";
import image8 from "../assets/img/burger/image_8.png";
import image9 from "../assets/img/burger/image_9.png";
import image10 from "../assets/img/burger/image_10.png";
import image11 from "../assets/img/burger/image_11.png";
import image12 from "../assets/img/burger/image_12.png";

const images = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    image10,
    image11,
    image12
];

function ModeRushList(props) {
    return (
        <Grid container
            direction="column"
            justifyContent="center"
            alignItems="center"
            xs={5}
            sx={{ backgroundColor: 'white' }}
        >
            {images.map((image, index) => (
                <ProductCard
                    key={index}
                    image={image}
                   //buttonText="-"
                    isFirstItem={index === 0}
                    isLastItem={index === images.length - 1}
                />
            ))}
        </Grid>
    );
}

export default ModeRushList;
