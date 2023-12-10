import Header from "../../components/SpecialPhone/Header";
import OrderBar from "../../components/SpecialPhone/OrderBar";
import NavBar from "../NavBar";
import FoodItemsList from "../FoodItemList";
import CommandList from "../CommandList";
import React from "react";
const MultiOrder = () => {
    // Vous pouvez stocker l'état des commandes ici
    const [orders, setOrders] = React.useState([
        { id: 1, items: [] },
        { id: 2, items: [] },
        { id: 3, items: [] },
    ]);

    // Calculer le total en fonction de toutes les commandes
    const calculateTotal = () => {
        const total = orders.reduce((acc, order) => {
            return acc + order.items.reduce((itemAcc, item) => itemAcc + item.price, 0);
        }, 0);

        return total;
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
            <Header />
            <OrderBar />

            <div style={{ display: 'flex', flexDirection: 'row', height: '100%', width: '100%' }}>
                <div style={{ display: 'flex', flexDirection: 'column', width: '20vw', height: '100%' }}>
                    <NavBar />
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', width: '80vw', height: '100%' }}>
                    <div style={{ display: 'flex', flexDirection: 'row', height: '100%', width: '100%' }}>
                        {/* Interface pour la première commande */}
                        <div style={{ display: 'flex', flexDirection: 'column', width: '33.33%', height: '100%' }}>
                            <FoodItemsList orderId={1} orders={orders} setOrders={setOrders} />
                            <CommandList orderId={1} orders={orders} />
                        </div>

                        {/* Interface pour la deuxième commande */}
                        <div style={{ display: 'flex', flexDirection: 'column', width: '33.33%', height: '100%' }}>
                            <FoodItemsList orderId={2} orders={orders} setOrders={setOrders} />
                            <CommandList orderId={2} orders={orders} />
                        </div>

                        {/* Interface pour la troisième commande */}
                        <div style={{ display: 'flex', flexDirection: 'column', width: '33.33%', height: '100%' }}>
                            <FoodItemsList orderId={3} orders={orders} setOrders={setOrders} />
                            <CommandList orderId={3} orders={orders} />
                        </div>
                    </div>
                </div>
            </div>

            {/* Afficher le total partagé */}
            <div style={{ alignSelf: 'flex-end', marginRight: '10px' }}>
                <p>Total: {calculateTotal()} €</p>
            </div>
        </div>
    );
};

export default MultiOrder;
