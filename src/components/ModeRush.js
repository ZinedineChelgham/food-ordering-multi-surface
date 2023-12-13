import React, { useState,useEffect,useMemo } from 'react';
import { Grid } from '@mui/material';
import ProductCard from "./common/ProductCard";
import image1 from '../assets/img/rush/pain1.png';
import image12 from "../assets/img/rush/pain2.png";


const ModeRushList = ({ ingredients }) => {

    const images = useMemo(() => {
        const reqImages = require.context('../assets/img/rush', false, /\.(png|jpe?g|svg)$/);
        return reqImages.keys().reduce((imageObj, item) => {
            const key = item.replace('./', '');
            imageObj[key] = reqImages(item);
            return imageObj;
        }, {});
    }, []);

   const [rushImages, setRushImages] = useState([]);

    useEffect(() => {
        const generateImages = (ingredientsList) => {
            return [
                image1,
                ...ingredientsList.map(ingredient => images[ingredient + '.png']).filter(Boolean),
                image12
            ];
        };
        
        setRushImages(generateImages(ingredients));
    }, [ingredients]); 

    const handleRemove = (indexToRemove) => {
        if (indexToRemove !== 0 && indexToRemove !== rushImages.length - 1) {
            setRushImages(currentImages => currentImages.filter((_, index) => index !== indexToRemove));
        }
    };

    return (
        <Grid container
            direction="column"
            justifyContent="center"
            alignItems="center"
            sx={{ width: '100%', minHeight: '100vh', backgroundColor: 'white', overflowY: 'auto' }}
        >
            {rushImages.map((image, index) => (
                <ProductCard
                    key={index}
                    image={image}
                    onRemove={handleRemove}
                    index={index}
                    isFirstItem={index === 0}
                    isLastItem={index === rushImages.length - 1}
                />
            ))}
        </Grid>
    )
};

export default ModeRushList;



