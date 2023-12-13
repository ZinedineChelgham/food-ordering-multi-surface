// ModeRushList.js
import React, { useState } from 'react';
import { Grid } from '@mui/material';
import ProductCard from "./common/ProductCard";
import image1 from '../assets/img/rush/image_1.png';
import image2 from '../assets/img/rush/image_2.png';
import image3 from "../assets/img/rush/image_3.png";
import image4 from "../assets/img/rush/image_4.png";
import image5 from "../assets/img/rush/image_5.png";
import image6 from "../assets/img/rush/image_6.png";
import image7 from "../assets/img/rush/image_7.png";
import image8 from "../assets/img/rush/image_8.png";
import image9 from "../assets/img/rush/image_9.png";
import image10 from "../assets/img/rush/image_10.png";
import image11 from "../assets/img/rush/image_11.png";
import image12 from "../assets/img/rush/image_12.png";


const ModeRushList = () => {
    const initialImages = [
        image1, image2, image3, image4, image5, image6, 
        image7, image8, image9, image10, image11, image12
    ];
    
    const [images, setImages] = useState(initialImages);

    const handleRemove = (indexToRemove) => {
        setImages(currentImages => currentImages.filter((_, index) => index !== indexToRemove));
    };

    return (
        <Grid container
            direction="column"
            justifyContent="center"
            alignItems="center"
            sx={{ width: '100%', height: '100%', backgroundColor: 'white' }}
            // item xs={12} sm={6} md={4} lg={3} style={{ width: '100%' }}
        >
            {images.map((image, index) => (
                <ProductCard
                    key={index}
                    image={image}
                    onRemove={handleRemove}
                    index={index}
                    isFirstItem={index === 0}
                    isLastItem={index === images.length - 1}
                />
            ))}
        </Grid>
    );
    // return (
    //     <Grid container
    //         direction="column"
    //         justifyContent="center"
    //         alignItems="center"
    //         sx={{ maxWidth: '100%', height: '100%', backgroundColor: 'white', margin: 'auto' }}
    //     >
    //         {images.map((image, index) => (
    //             <Grid item xs={12} sm={6} md={4} lg={3} key={index} style={{ width: '100%' }}> {/* Adjust the 'sm', 'md', 'lg' values as needed */}
    //                 <ProductCard
    //                     image={image}
    //                     onRemove={handleRemove}
    //                     index={index}
    //                     isFirstItem={index === 0}
    //                     isLastItem={index === images.length - 1}
    //                 />
    //             </Grid>
    //         ))}
    //     </Grid>
    // );
};

export default ModeRushList;
