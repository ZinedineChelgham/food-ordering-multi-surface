import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import LunchDiningIcon from '@mui/icons-material/LunchDining';
import CookieIcon from '@mui/icons-material/Cookie';
import FoodBankIcon from '@mui/icons-material/FoodBank';
import LocalDrinkIcon from '@mui/icons-material/LocalDrink';
import FastfoodIcon from '@mui/icons-material/Fastfood';


function IconContainer (props) {

    return (
        <Card sx={{ maxWidth: 200, border: 'none' }}>
            <CardActionArea>
                <CardMedia
                    sx={{ fontSize: 120, margin: 'auto', marginTop: '5%' }}
                    component={LunchDiningIcon}
                />
                <CardContent sx={{ textAlign: 'center' }}>
                    <Typography gutterBottom variant="h5" component="div">
                        Nos burgers
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}

export default IconContainer;
