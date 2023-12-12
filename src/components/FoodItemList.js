import Grid from "@mui/material/Grid";
import FoodItemCard from "./common/FoodItemCard";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

function FoodItemsList(props) {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Grid
            container
            spacing={2}
            direction="row"
            justifyContent="center"
            alignItems="center"
            xs={12}
            sx={{
                height:'105%',
                backgroundColor: 'blue',
                overflow: 'auto',
                '&::-webkit-scrollbar': {
                    display: 'none',
                },
            }}
        >
            {Array.from(Array(400).keys()).map((index) => (
                <Grid key={index} item xs={isSmallScreen ? 12 : 2.75}>
                    <FoodItemCard props={{ test: "hello" }} />
                </Grid>
            ))}
        </Grid>
    );
}

export default FoodItemsList;
