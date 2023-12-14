import React from 'react';
import Header from '../SpecialPhone/Header.js';
import OrderHeader from '../OrderHeader.js';
import NavBarPlusListMultiOrder from "./NavBarPlusListMultiOrder";
import CustomHeader from "./CustomHeader";
import AppBarMultiOrder from "./AppBarMultiOrder";

const MultiOrder = () => {
    const handleBackButtonClick = () => {
        // Logique pour le bouton Retour
    };

    const handleViewOrderButtonClick = () => {
        // Logique pour le bouton Voir la commande
    };
return (
        <div style={{ height:'100vh', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
            {/* Emplacements de commandes */}
            <div style={{ height:'80%', display: 'flex', flexDirection: 'row',overflow: 'hidden' }}>
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
                    <AppBarMultiOrder title="Commande 1" showBackButton onBackButtonClick={handleBackButtonClick} showViewOrderButton onViewOrderButtonClick={handleViewOrderButtonClick()} />
                    <NavBarPlusListMultiOrder />
                </div>

                {/* Deuxième commande */}
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
                    <NavBarPlusListMultiOrder />
                </div>

                {/* Troisième commande */}
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
                    <NavBarPlusListMultiOrder />
                </div>
            </div>

            {/* Total partagé */}
            <div style={{ height: '10%', overflow: 'hidden' }}>
                <OrderHeader />
            </div>
        </div>
    );
};

export default MultiOrder;

