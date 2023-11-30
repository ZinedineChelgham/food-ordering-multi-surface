import Grid2 from "@mui/material/Unstable_Grid2";
import IconContainer from "./IconContainer";
import LunchDiningIcon from '@mui/icons-material/LunchDining';
import CookieIcon from '@mui/icons-material/Cookie';
import FoodBankIcon from '@mui/icons-material/FoodBank';
import LocalDrinkIcon from '@mui/icons-material/LocalDrink';
import FastfoodIcon from '@mui/icons-material/Fastfood';



function NavBar(props) {



    return (
        <div style={{ backgroundColor: 'red', padding: '8px', borderRadius: 8, maxWidth: 200 }}> {/* Rouge, coins arrondis, centré */}
            <Grid2 container direction="row" justifyContent="center" alignItems="center" spacing={1}>
                {Array.from(Array(5).keys()).map((index) => (
                    <Grid2 item key={index} xs={12}>
                        <IconContainer props={{ test: "hello" }} />
                    </Grid2>
                ))}
            </Grid2>
        </div>
    )
}

export default NavBar;
