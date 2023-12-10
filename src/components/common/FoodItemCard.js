import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import burger from "../../assets/img/burger/burger.png";
import BasicCard from "./BasicCard";

function FoodItemCard({ item }) {
  const getActionArea = () => {
    return (
      <CardMedia component="img" height="100" image={burger} alt="big burger" />
    );
  };

  const getContent = () => {
    return (
      <>
        <Typography gutterBottom variant="h5" component="div">
          {item.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {item.price} €
        </Typography>
      </>
    );
  };

  return <BasicCard actionArea={getActionArea()} content={getContent()} />;
}

export default FoodItemCard;
