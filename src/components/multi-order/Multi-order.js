import React, {useState} from "react";
import Header from "../SpecialPhone/Header.js";
import OrderHeader from "../OrderHeader.js";
import CustomHeader from "./CustomHeader";
import AppBarMultiOrder from "./AppBarMultiOrder";
import foodItems from "../../data";
import NavPlusList from "../NavPlusListBorn";
import OrderContainer from "../OrderContainer";
import CartContext from "../../context/CartContext";
import {useNavigate} from "react-router-dom";
const MultiOrder = () => {
    const navigate = useNavigate();
    const { cartItems, removeItem } = React.useContext(CartContext);
  const [category1, setCategory1] = React.useState("menus");
  const [category2, setCategory2] = React.useState("menus");
  const [category3, setCategory3] = React.useState("menus");
  const [order1Items, setOrder1Items] = useState([]);
  const [order2Items, setOrder2Items] = useState([]);
  const [order3Items, setOrder3Items] = useState([]);

  const handleCategoryChange1 = (cat) => {
    setCategory1(cat.toLowerCase());
    console.log("clicked" + cat);
  };  const handleCategoryChange2 = (cat) => {
    setCategory2(cat.toLowerCase());
    console.log("clicked" + cat);
  };  const handleCategoryChange3 = (cat) => {
    setCategory3(cat.toLowerCase());
    console.log("clicked" + cat);
  };
  const handleViewOrderButtonClick = () => {
      //navigate('/ordersummary', { state: { cartItems } });
  };
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
      }}
    >
      {/* Emplacements de commandes */}
      <div
        style={{
          height: "80%",
          display: "flex",
          flexDirection: "row",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
          }}
        >
          <AppBarMultiOrder
            title="Commande 1"
          />
          <NavPlusList
            handleCategoryChange={handleCategoryChange1}
            foodItems={foodItems[category1]}
            currCat={category1}
            isMultiOrder={true}
          />
        </div>

        {/* Deuxième commande */}
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
          }}
        >
          <AppBarMultiOrder
            title="Commande 2"
          />
          <NavPlusList
            handleCategoryChange={handleCategoryChange2}
            foodItems={foodItems[category2]}
            currCat={category2}
            isMultiOrder={true}
          />
        </div>

        {/* Troisième commande */}
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
          }}
        >
          <AppBarMultiOrder
            title="Commande 3"
          />
          <NavPlusList
            handleCategoryChange={handleCategoryChange3}
            foodItems={foodItems[category3]}
            currCat={category3}
            isMultiOrder={true}
          />
        </div>
      </div>

      {/* Total partagé */}
      <div style={{ height: "35%", overflow: "hidden" }}>
        <OrderContainer />
      </div>
    </div>
  );
};

export default MultiOrder;
