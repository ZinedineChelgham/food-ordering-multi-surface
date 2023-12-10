import FoodItemCard from './components/common/FoodItemCard';
import FoodItemsList from "./components/FoodItemList";
import IconWithLabelCard from "./components/common/IconWithLabelCard";
import NavBar from "./components/NavBar";
import CustomPlusProduct from "./components/CustomPlusProduct";
import Grid2 from "@mui/material/Unstable_Grid2";
import OrderHeader from './components/OrderHeader';
import CommandList from './components/CommandList';
import ModeRush from './components/ModeRush';
import {Link} from "react-router-dom";
import OrderSummaryPage from "./components/OrderSummaryPage.js";
import PhonePageHome from "./components/SpecialPhone/PhonePageHome";
import Header from "./components/SpecialPhone/Header";
import OrderBar from "./components/SpecialPhone/OrderBar";

function App() {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
            <Header/>
            <OrderBar/>
            <div style={{ display: 'flex', flexDirection: 'row', height: '100%', width: '100%' }}>
                <div style={{ display: 'flex', flexDirection: 'column', width: '20vw', height: '100%' }}>
                    <NavBar/>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', width: '80vw', height: '100%' }}>
                    <div style={{ display: 'flex', flexDirection: 'row', height: '100%', width: '100%' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', width: '80%', height: '100%' }}>
                            <FoodItemsList/>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', width: '20%', height: '100%' }}>
                            <CommandList/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
    
}

export default App;
