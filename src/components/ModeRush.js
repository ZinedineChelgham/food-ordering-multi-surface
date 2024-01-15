import React, { useState, useEffect, useMemo } from 'react';
import { Grid, Button } from '@mui/material';
import ProductCard from "./common/ProductCard";
import image1 from '../assets/img/rush/pain1.png';
import image12 from "../assets/img/rush/pain2.png";
import CartContext from '../context/CartContext';
import { useContext } from 'react';


const ModeRushList = ({ ingredients,currentChoice }) => {
    // Combine all images into a single object for easier mapping
    const cartItems = useContext(CartContext);
    console.log("mon choix est :",currentChoice.name," d'id:",currentChoice.id," et de prix:",currentChoice.price, "et de recette :",currentChoice.recipe);
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
        // creer un tableau avec les images des ingredient
        // le code pour crrer un tab avec les images des ingredients
        const tab = ingredients;
        console.log("la recette tab :", tab);
    const [rushImages, setRushImages] = useState([]);
    const [currentView, setCurrentView] = useState('ingredients'); // New state to control the view
    

    // Handle the generation of images for each category
    useEffect(() => {
        setRushImages([
            ...ingredients.map(ingredient => allImages[ingredient + '.png']).filter(Boolean),
            
        ]);

    }, [ingredients]);

    // Handle removal of images
    const handleRemove = (index, images, setImages) => {
        setImages(currentImages => currentImages.filter((_, idx) => idx !== index));
        ingredients.splice(index, 1);
        console.log("la recette :", ingredients);
    

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
            default:
                return null;
        }
    };

    // Effects
    const handleNext = () => {
        console.log("la recette :", ingredients);
        cartItems.updateRecipe(currentChoice.id,ingredients);
        console.log("le cart: ",cartItems);

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

