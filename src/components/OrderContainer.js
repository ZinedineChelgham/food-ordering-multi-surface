import React, { useState, useEffect } from 'react';
import CommandList from './CommandList';
import OrderHeader from './OrderHeader';

const OrderContainer = () => {
    // This state will hold the order items and could be updated when items are added or removed
    const [orderItems, setOrderItems] = useState([]);

    const burgerItems = [
        { id: 1, name: 'Burger', price: 7.20, quantity: 1 },
        { id: 2, name: 'boisson', price: 2.50, quantity: 2 },
        { id: 3, name: 'frites', price: 0.99, quantity: 1 },
        { id: 4, name: 'frites', price: 0.99, quantity: 1 },
        { id: 5, name: 'Burger', price: 7.20, quantity: 1 },
        { id: 6, name: 'boisson', price: 2.50, quantity: 2 },
        { id: 7, name: 'frites', price: 0.99, quantity: 1 },
        { id: 8     , name: 'frites', price: 0.99, quantity: 1 }
    ];
    // const burgerItems = [];

    const handleItemUpdate = (item, action) => {
    };

    const handleCancelOrder = () => {
        // Logic to handle order cancellation
    };

    const handleValidateOrder = () => {
        // Logic to handle order validation
    };


    const addItemToOrder = item => {
        setOrderItems(prevItems => {
            // Check if the item is already in the order
            const existingItem = prevItems.find(i => i.id === item.id);
            if (existingItem) {
                // If it is, update the quantity
                return prevItems.map(i =>
                    i.id === item.id ? { ...i, quantity: i.quantity + item.quantity } : i
                );
            } else {
                // If it's not, add the new item with its original quantity
                return [...prevItems, item];
            }
        });
    };


    // Calculate the total amount of the order
    const calculateTotal = items => items.reduce((acc, item) => acc + item.price * item.quantity, 0);

    // Simulate adding items after component mounts
    useEffect(() => {
        burgerItems.forEach(item => {
            addItemToOrder(item);
        });
    }, []);

    return (
        <div>
            <OrderHeader total={calculateTotal(orderItems)} />
            <CommandList
                orderItems={orderItems}
                onItemUpdate={handleItemUpdate}
                onCancelOrder={handleCancelOrder}
                onValidateOrder={handleValidateOrder}
            />
        </div>
    );
};

export default OrderContainer;
