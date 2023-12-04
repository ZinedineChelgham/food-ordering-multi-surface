import FoodItemCard from './components/common/FoodItemCard';
import FoodItemsList from "./components/FoodItemList";
import IconWithLabelCard from "./components/common/IconWithLabelCard";
import NavBar from "./components/NavBar";
import CustomPlusProduct from "./components/CustomPlusProduct";
import Grid2 from "@mui/material/Unstable_Grid2";


function App() {

    return (
        <CustomPlusProduct textContent={"Nos burgers:"} buttonText={"Custome ton burger"} otherComponent={<FoodItemsList/>}/>
    );
}

export default App;
