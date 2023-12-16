import React, { useState, useEffect, useMemo } from 'react';
import { Grid } from '@mui/material';
import ProductCard from "./common/ProductCard";
import image1 from '../assets/img/rush/pain1.png';
import image12 from "../assets/img/rush/pain2.png";

const ModeRushList = ({ ingredients, drinks, desserts }) => {
    // Combine all images into a single object for easier mapping
    const allImages = useMemo(() => {
        const contexts = [
            require.context('../assets/img/rush', false, /\.(png|jpe?g|svg)$/),
            require.context('../assets/img/boisson', false, /\.(png|jpe?g|svg)$/),
            require.context('../assets/img/dessert', false, /\.(png|jpe?g|svg)$/)
        ];
        return contexts.reduce((imageObj, context) => {
            context.keys().forEach(item => {
                const key = item.replace('./', '');
                imageObj[key] = context(item);
            });
            return imageObj;
        }, {});
    }, []);

    const [rushImages, setRushImages] = useState([]);
    const [drinkImages, setDrinkImages] = useState([]);
    const [dessertImages, setDessertImages] = useState([]);

    // Handle the generation of images for each category
    useEffect(() => {
        setRushImages([
            image1,
            ...ingredients.map(ingredient => allImages[ingredient + '.png']).filter(Boolean),
            image12
        ]);
        setDrinkImages(drinks.map(drink => allImages[drink + '.png']).filter(Boolean));
        setDessertImages(desserts.map(dessert => allImages[dessert + '.png']).filter(Boolean));
    }, [ingredients, drinks, desserts, allImages]);

    // Handle removal of images
    const handleRemove = (index, images, setImages) => {
        setImages(currentImages => currentImages.filter((_, idx) => idx !== index));
    };

    const generateCards = (images, setImages, canRemoveAll, isBurger = false) => {
        return images.map((image, index) => {
          const canRemove = isBurger ? index !== 0 && index !== images.length - 1 : canRemoveAll;
      
          return (
            <ProductCard
              key={`${image}-${index}`}
              image={image}
              onRemove={() => canRemove && handleRemove(index, images, setImages)}
              canRemove={canRemove}
            />
          );
        });
      };

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
            backgroundColor: 'white',
            overflowY: 'auto'
        }}>
            <div style={{ marginRight: '40px' }}>
                {generateCards(rushImages, setRushImages, false, true)} 
            </div>
            <div style={{ marginRight: '40px' }}>
                {generateCards(drinkImages, setDrinkImages, true)} 
            </div>
            <div style={{ marginRight: '40px' }}>
                {generateCards(dessertImages, setDessertImages, true)} 
            </div>
        </div>
    );
};

export default ModeRushList;
