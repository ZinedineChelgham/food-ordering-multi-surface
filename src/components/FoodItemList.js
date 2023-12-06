import Grid2 from "@mui/material/Unstable_Grid2";
import FoodItemCard from "./common/FoodItemCard";
import {useTheme} from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

function FoodItemsList(props) {

    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Grid2
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            xs={12}
            sx={{
                //height: isSmallScreen? '59vh':'100%',
                //height:'59vh',
                height: '100%',
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
