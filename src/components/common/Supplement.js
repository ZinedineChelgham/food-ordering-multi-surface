import React, { useState } from 'react';

const SupplementItem = ({ name, price }) => {
    const [quantity, setQuantity] = useState(0);

    const handleIncrease = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
    };

    const handleDecrease = () => {
        if (quantity > 0) {
            setQuantity(prevQuantity => prevQuantity - 1);
        }
    };

    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between',marginRight:'10vw' }}>
            <div style={{ flex: '1' }}>
                {/* Vous pouvez remplacer `src` avec le chemin de votre image */}
                <img src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQS8o97J7lEbF0s02-u743soPj1o5wbj88xIZzt7j1IY9LWg-KxPmsJ4GTNs05biVqOvghSuDPqeiVQn0qfJgNhLcBmvKVahjfeyZIc8IpqrhZ8JqmwSAVicB5FtjY-SSEEUoBNYzRLUz0&usqp=CAc" alt={name} style={{ width: '100px', height: '100px' }} />
            </div>
            <div style={{ flex: '2', textAlign: 'left' }}>
                <div>{name}</div>
                <div>{price} €</div>
            </div>
            <div style={{ flex: '1', display: 'flex', alignItems: 'center' }}>
                <button onClick={handleDecrease} style={{ width: '30px', height: '30px', marginRight: '5px' }}>-</button>
                <div>{quantity}</div>
                <button onClick={handleIncrease} style={{ width: '30px', height: '30px', marginLeft: '5px' }}>+</button>
            </div>
        </div>
    );
};

export default SupplementItem;
