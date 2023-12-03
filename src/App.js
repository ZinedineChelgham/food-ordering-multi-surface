import FoodItemCard from './components/common/FoodItemCard';
import FoodItemsList from "./components/FoodItemList";
import IconWithLabelCard from "./components/common/IconWithLabelCard";
import NavBar from "./components/NavBar";
import Grid2 from "@mui/material/Unstable_Grid2";
import {Link} from "react-router-dom";


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
            <Link to="/ordersummary"> {/* Utilisez Link pour créer le lien vers la page de récapitulatif */}
                <button>Recap de la commande</button>
            </Link>
        </Grid2>
    );
}

export default App;
