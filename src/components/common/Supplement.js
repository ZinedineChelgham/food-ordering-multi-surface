import React, {useState, useContext} from "react";
import CartContext from "../../context/CartContext";
import {useTheme} from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const SupplementItem = ({name, price, url, item}) => {
    const [quantity, setQuantity] = useState(0);
    const cart = React.useContext(CartContext);
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
    const isLandscape = useMediaQuery("(orientation: landscape)");

    const handleIncrease = () => {
        cart.addToCart(item, 1);
        setQuantity((prevQuantity) => prevQuantity + 1);
        console.log(cart);
    };

    const handleDecrease = () => {
        if (quantity > 0) {
            setQuantity((prevQuantity) => prevQuantity - 1);
            //cart.removeItem(item.id);
        }
    };
    return (
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginRight: '10vw'}}>
            <div style={{flex: '1', marginRight: isLandscape ? '1vw' : '1vh'}}>
                {console.log(url)}
                <img src={url} alt={name}
                     style={{width: isLandscape ? '9vw' : '11vh', height: isLandscape ? '9vw' : '11vh'}}/>
            </div>
            <div style={{flex: '2', textAlign: 'left', fontSize: isLandscape ? '2vw' : '2vh'}}>
                <div>{name}</div>
                <div>{price} €</div>
            </div>
            <div style={{flex: '1', display: 'flex', alignItems: 'center'}}>
                <button onClick={handleDecrease} style={{
                    width: isLandscape ? '2vw' : '2vh',
                    marginRight: isLandscape ? '1vw' : '1vh',
                    fontSize: isLandscape ? '2vw' : '2vh'
                }}>-
                </button>
                <div
                    style={{fontSize: isLandscape ? '2vw' : '2vh'}}
                >{quantity}</div>
                <button onClick={handleIncrease} style={{
                    width: isLandscape ? '2vw' : '2vh',
                    marginLeft: isLandscape ? '1vw' : '1vh',
                    fontSize: isLandscape ? '2vw' : '2vh'
                }}>+
                </button>
            </div>
        </div>
    );
};

export default SupplementItem;
