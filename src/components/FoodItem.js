import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import burger from '../assets/img/burger/burger.png';

function FoodItem (props) {

    return (
        <Card sx={{ maxWidth: 200 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image={burger}
                    alt="big burger"
                />
                <CardContent sx={ { textAlign: 'center' } }>
                    <Typography gutterBottom variant="h5" component="div">
                        Big Burger
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                         5.99€
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}

export default FoodItem;
