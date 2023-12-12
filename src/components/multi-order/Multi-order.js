import React from 'react';
import Header from '../SpecialPhone/Header.js';
import OrderHeader from '../OrderHeader.js';
import NavBarPlusListMultiOrder from "./NavBarPlusListMultiOrder";
import CustomHeader from "./CustomHeader";

const MultiOrder = () => {
return (
        <div style={{ height:'100vh', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
            {/* Emplacements de commandes */}
            <div style={{ height:'80%', display: 'flex', flexDirection: 'row',overflow: 'hidden' }}>
                {/* Première commande */}
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
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
            <div style={{ height: '33%', overflow: 'hidden' }}>
                <OrderHeader />
            </div>
        </div>
    );
};

export default MultiOrder;

