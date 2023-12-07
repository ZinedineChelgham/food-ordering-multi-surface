import Grid2 from "@mui/material/Unstable_Grid2";
import FoodItemCard from "./common/FoodItemCard";

function FoodItemsList(props) {
    return (
        <Grid2
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            xs={12}
            sx={{
                height:'100%',
                backgroundColor: 'blue',
                overflow: 'auto',
                '&::-webkit-scrollbar': {
                    display: 'none',
                },
            }}
        >
            {Array.from(Array(400).keys()).map((index) => (
                <FoodItemCard key={index} props={{ test: "hello" }} />
            ))}
        </Grid2>
    )
}

export default FoodItemsList;
