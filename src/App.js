import FoodItemCard from './components/common/FoodItemCard';
import FoodItemsList from "./components/FoodItemList";
import IconWithLabelCard from "./components/common/IconWithLabelCard";
import NavBar from "./components/NavBar";
import Grid2 from "@mui/material/Unstable_Grid2";
import {Link} from "react-router-dom";
import OrderSummaryPage from "./components/OrderSummaryPage.js";


function App() {

    return (
        <Grid2 container
            direction="row"
            width={'100%'}
            height={'100%'}
            xs={12}
            margin={0}
            padding={0}
            boxSizing={'border-box'}
            backgroundColor={'violet'}
        >
            <NavBar />
            <FoodItemsList />
        </Grid2>
    );
}

export default App;
