import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import burger from '../../assets/img/burger/burger.png';
import BasicCard from './BasicCard';

function FoodItemCard(props) {

    const getActionArea = () => {
        return (
            <CardMedia
                component="img"
                height="140"
                image={burger}
                alt="big burger"
            />
        )
    }

    const getContent = () => {
        return (
            <>
                <Typography gutterBottom variant="h5" component="div">
                    Big Burger
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    5.99€
                </Typography>
            </>
        )
    }


    return (
        <BasicCard
            //style={{ maxWidth: 200, border: 'none' }}
            actionArea={getActionArea()}
            content={getContent()}
        />
    )
}

export default FoodItemCard;
