import Grid2 from "@mui/material/Unstable_Grid2";
import FoodItem from "./FoodItem"; // Grid version 2


function ItemContainer(props) {

    return (
        <Grid2 container direction="row" justifyContent="center" alignItems="center" spacing={8} xs={5}>
            {Array.from(Array(10).keys()).map((index) => (
                <FoodItem key={index} props={{test:"helo"}} />
            ))}
        </Grid2>
    )
}

export default ItemContainer;
