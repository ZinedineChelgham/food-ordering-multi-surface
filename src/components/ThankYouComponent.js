import React, { useState, useEffect } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import './ThankYouComponent.css';
import {useNavigate} from "react-router";

const ThankYouComponent = () => {
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const timerLoading = setTimeout(() => {
            setIsLoading(false);
        }, 3000); // Attendre 3 secondes avant de cacher le loader

        const timerRedirect = setTimeout(() => {
            navigate('/start');
        }, 10000); // Redirige après 5 secondes (pas 10, pour correspondre au code)

        return () => {
            clearTimeout(timerLoading); // Nettoyer le timer de chargement
            clearTimeout(timerRedirect); // Nettoyer le timer de redirection
        };
    }, [navigate]);
    return (
        <div className="thank-you-container">
            {isLoading ? (
                <>
                    <CircularProgress style={{ color: 'yellow', fontSize: 100, }} />
                    <h1 className="thank-you-message" style={{textAlign: 'center'}}>Commande en cours de traitement</h1>
                </>
            ) : (
                <>
                    <CheckCircleIcon style={{ color: 'green', fontSize: 100 , }} />
                    <h1 className="thank-you-message" style={{textAlign: 'center'}}>Merci pour votre commande</h1>
                </>
            )}
        </div>
    );
};

export default ThankYouComponent;
