import React from 'react';
import PropTypes from 'prop-types';
import { Button, Grid, Typography } from '@mui/material';

const TelephoneComponent = ({ buttonText, textContent, otherComponent }) => {
    const containerStyle = {
        backgroundColor: '#87CEEB', // Couleur bleu ciel
        height: '100vh',
        padding: '20px', // Ajustez la marge intérieure selon vos besoins
    };

    return (
        <Grid container spacing={1} justifyContent="center" alignItems="center" style={containerStyle}>
            {/* 1/6 du haut avec le bouton */}
            <Grid item xs={8}>
                <Button variant="contained" fullWidth>
                    {buttonText}
                </Button>
            </Grid>

            {/* Deuxième 1/6 avec le texte */}
            <Grid item xs={12}>
                <Typography align="center">{textContent}</Typography>
            </Grid>

            {/* Dernier 4/6 avec l'autre composant */}
            <Grid item xs={11} textAlign="center">
                {otherComponent}
            </Grid>
        </Grid>
    );
};

TelephoneComponent.propTypes = {
    buttonText: PropTypes.string.isRequired,
    textContent: PropTypes.string.isRequired,
    otherComponent: PropTypes.element.isRequired,
};

export default TelephoneComponent;
