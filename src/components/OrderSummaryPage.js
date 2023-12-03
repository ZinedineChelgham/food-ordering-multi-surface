// OrderSummaryPage.js
import React from 'react';
import OrderSection from './common/OrderSection';
import burger from '../assets/img/burger/burger.png';
import cheeseburger from '../assets/img/burger/cheeseburger.jpg';
import frites from '../assets/img/frites/frites.jpg';
import coca from '../assets/img/boisson/cocacola.jpg';


const OrderSummaryPage = () => {
    const burgers = [
        { id: 1, name: 'Hamburger', image: burger  },
        { id: 2, name: 'Cheeseburger', image: cheeseburger },
        ];
    const supplements = [
        { id: 3, name: 'Frites', image: frites },
        ];
    const drinks = [
        { id: 5, name: 'Coca', image: coca },
        ];

    return (
        <div>
            <OrderSection title="Burgers" items={burgers} />
            <OrderSection title="Suppléments" items={supplements} />
            <OrderSection title="Boissons" items={drinks} />
        </div>
    );
};

export default OrderSummaryPage;
