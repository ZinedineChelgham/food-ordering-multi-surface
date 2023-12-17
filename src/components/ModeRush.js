import React, { useState, useEffect, useMemo } from 'react';
import { Grid, Button } from '@mui/material';
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
    const [currentView, setCurrentView] = useState('ingredients'); // New state to control the view

    // Handle the generation of images for each category
    useEffect(() => {
        setRushImages([
            image1,
            ...ingredients.map(ingredient => allImages[ingredient + '.png']).filter(Boolean),
            image12
        ]);
        // const loadedDrinks = drinks.map(drink => allImages[drink + '.png']).filter(Boolean)
        // setDrinkImages(drinks.map(drink => allImages[drink + '.png']).filter(Boolean));
        // setDessertImages(desserts.map(dessert => allImages[dessert + '.png']).filter(Boolean));
        // console.log("Boissons après mappage :", loadedDrinks);



        // Générer les images pour les boissons en utilisant `imageName`
        setDrinkImages(drinks.map(drink => ({
            ...drink,
            src: allImages[`${drink.imageName}.png`]
        })).filter(Boolean));

        // Générer les images pour les desserts en utilisant `imageName`
        // setDessertImages(desserts.map(dessert => ({
        //     ...dessert,
        //     src: allImages[`${dessert.imageName}.png`]
        // })).filter(Boolean));

        const loadedDrinks = drinks.map(drink => ({
            ...drink,
            src: allImages[`${drink.imageName}.png`]
        })).filter(Boolean);

        console.log("Boissons après mappage :", loadedDrinks);

        const loadedDesserts = desserts.map(dessert => ({
            ...dessert,
            src: allImages[`${dessert.imageName}.png`]
        })).filter(Boolean);

        console.log("Desserts après mappage :", loadedDesserts);
        setDrinkImages(loadedDrinks);
        setDessertImages(loadedDesserts);


    }, [ingredients, drinks, desserts, allImages]);

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
                        canRemove={false} // Ou votre logique de condition de suppression
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

    const updateRush = () => {
        // You would call this when you want to transition to the drinks view
        setCurrentView('drinks');
        //setCurrentView('ingredients');

    };

    // Conditional rendering based on the current view
    const renderView = () => {
        switch (currentView) {
            case 'ingredients':
                return generateCards(rushImages, setRushImages, true);
            case 'drinks':
                return generateCardsBoissonDessert(drinkImages, setDrinkImages);
            case 'desserts':
                return generateCardsBoissonDessert(dessertImages, setDessertImages);
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
            justifyContent: 'center',
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

