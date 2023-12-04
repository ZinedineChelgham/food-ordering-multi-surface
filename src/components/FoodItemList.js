import Grid2 from "@mui/material/Unstable_Grid2";
import FoodItemCard from "./common/FoodItemCard";


function FoodItemsList(props) {

    return (
        <Grid2 container
            direction="row"
            justifyContent="center"
            alignItems="center"
            xs={5}
            sx={{ backgroundColor: 'blue' }}
        >
            {Array.from(Array(10).keys()).map((index) => (
                <FoodItemCard key={index} props={{ test: "helo" }} />
            ))}
        </Grid2>
    )
}

export default FoodItemsList;
