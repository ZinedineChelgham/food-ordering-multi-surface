import FoodItemCard from './components/common/FoodItemCard';
import FoodItemsList from "./components/FoodItemList";
import IconWithLabelCard from "./components/common/IconWithLabelCard";
import NavBar from "./components/NavBar";
import Grid2 from "@mui/material/Unstable_Grid2";
import OrderHeader from './components/OrderHeader';
import CommandList from './components/CommandList';
import ModeRush from './components/ModeRush';




function App() {

    return (
        <Grid2 container direction="column" width={'100%'} height={'100%'} xs={12} margin={0} padding={0} boxSizing={'border-box'} backgroundColor={'violet'}>
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
            <Grid2 container
                direction="column"
                width={'100%'}
                height={'100%'}
                xs={12}
                margin={0}
                padding={0}
                boxSizing={'border-box'}
                backgroundColor={'violet'}>
                <OrderHeader />
                <CommandList />
                <ModeRush />
            </Grid2>
        </Grid2>
    );
    
}

export default App;
