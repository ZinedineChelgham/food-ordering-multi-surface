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
import foodItems from './components/SpecialPhone/mock.js';

function App() {
    return (
        <PhonePageHome/>
    );
    
}

export default App;
