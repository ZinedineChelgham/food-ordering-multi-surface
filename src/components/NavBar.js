import Grid2 from "@mui/material/Unstable_Grid2";
import IconWithLabelCard from "./common/IconWithLabelCard";
import LunchDiningIcon from '@mui/icons-material/LunchDining';
import CookieIcon from '@mui/icons-material/Cookie';
import FoodBankIcon from '@mui/icons-material/FoodBank';
import LocalDrinkIcon from '@mui/icons-material/LocalDrink';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import { Link } from 'react-router-dom';



function NavBar(props) {

    const iconsInfos = [
        { icon: LunchDiningIcon, route: '/lunch', label: 'Nos burgers' },
        { icon: CookieIcon, route: '/cookie', label: 'Nos desserts' },
        { icon: FoodBankIcon, route: '/food', label: 'Nos plats' },
        { icon: LocalDrinkIcon, route: '/drink', label: 'Nos boissons' },
        { icon: FastfoodIcon, route: '/fastfood', label: 'Nos menus' },
    ];

    return (
        <Grid2 container
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={1}
            sx={{ backgroundColor: 'red', padding: '8px', maxWidth: 200 }}
        >
            {iconsInfos.map((icoInfo, index) => (
                <Grid2 xs={12} key={index}>
                    <IconWithLabelCard props={icoInfo} />
                </Grid2>
            ))}
        </Grid2>
    )
}

export default NavBar;
