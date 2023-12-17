import React, { useState } from 'react';

const SupplementItem = ({ name, price,url }) => {
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
                {console.log(url)}
                <img src={url} alt={name} style={{ width: '100px', height: '100px' }} />
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
