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

    console.log("la recette :", ingredients);

    const [rushImages, setRushImages] = useState([]);
    const [drinkImages, setDrinkImages] = useState([]);
    const [dessertImages, setDessertImages] = useState([]);
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

    const generateCardsBoissonDessert = (items, setItems) => {
        return items.map((item) => {
            return (
                <div style={{ margin: '10px' }}>
                    <ProductCard
                        key={item.id}
                        image={item.src} // Utilisez la propriété src pour l'image
                        canRemove={true} // Ou votre logique de condition de suppression
                        onRemove={() => handleRemove(item.id, items, setItems)} // Votre fonction de suppression
                    />
                    <div>{item.name} </div>
                    <div >{item.price}</div>
                </div>
            );
        });
    };

    // const updateOrder = () => {
    // };

    // Conditional rendering based on the current view
    const renderView = () => {
        switch (currentView) {
            case 'ingredients':
                return generateCards(rushImages, setRushImages, true);
            // case 'drinks':
            //     return generateCardsBoissonDessert(drinkImages, setDrinkImages);
            // case 'desserts':
            //     return generateCardsBoissonDessert(dessertImages, setDessertImages);
            // Add more cases for other views if necessary
            default:
                return null;
        }
    };

    // Effects
    const handleNext = () => {
        if (currentView === 'ingredients') {
            setCurrentView('drinks');
        } else if (currentView === 'drinks') {
            setCurrentView('desserts');
        } else if (currentView === 'desserts') {
            // If you have more steps, set to the next one, otherwise handle the completion of the process
            // For example, update the cart or navigate to a different page
        }
        // Add more conditions for other views if necessary
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
                    Valider
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

