import React, { useState, useEffect, useMemo } from 'react';
import { Grid, Button } from '@mui/material';
import ProductCard from "./common/ProductCard";
import image1 from '../assets/img/rush/pain1.png';
import image12 from "../assets/img/rush/pain2.png";

const ModeRushList = ({ ingredients }) => {
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
    const [currentView, setCurrentView] = useState('ingredients'); // New state to control the view

    // Handle the generation of images for each category
    useEffect(() => {
        setRushImages([
            image1,
            ...ingredients.map(ingredient => allImages[ingredient + '.png']).filter(Boolean),
            image12
        ]);

    }, [ingredients]);

    // Handle removal of images
    const handleRemove = (index, images, setImages) => {
        setImages(currentImages => currentImages.filter((_, idx) => idx !== index));
    };

    const generateCards = (images, setImages, canRemoveAll, isBurger = false) => {
        return images.map((image, index) => {
            const canRemove = isBurger ? index !== 0 && index !== images.length - 1 : canRemoveAll;
            return (
                <div style={{ margin: '10px', textAlign: 'center' }}>
                    <ProductCard
                        key={`${image}-${index}`}
                        image={image}
                        onRemove={() => canRemove && handleRemove(index, images, setImages)}
                        canRemove={canRemove}
                    />
                </div>
            );
        });
    };

    // Conditional rendering based on the current view
    const renderView = () => {
        switch (currentView) {
            case 'ingredients':
                return generateCards(rushImages, setRushImages, true);
            default:
                return null;
        }
    };

    // Effects
    const handleNext = () => {

    };


    //Render the button conditionally based on currentView
    const renderNextButton = () => {
        if (currentView === 'ingredients' || currentView === 'drinks'  ) {
            return (
                <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    style={{ marginTop: '20px' }}
                >
                    Suivant
                </Button>
            );
        }
        // No button for the last step, or you can change the label to "Finish" or similar
    };

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            //justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
            backgroundColor: 'white',
            overflowY: 'auto'
        }}>
            {renderView()}
           {renderNextButton()}
        </div>
    );
};

export default ModeRushList;

