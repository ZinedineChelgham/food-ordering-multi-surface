import React, { useState, useEffect } from "react";
import Header from "../SpecialPhone/Header.js";
import OrderHeader from "../OrderHeader.js";
import CustomHeader from "./CustomHeader";
import AppBarMultiOrder from "./AppBarMultiOrder";
import NavPlusList from "../NavPlusListBorn";
import OrderContainer from "../OrderContainer";
import CartContext from "../../context/CartContext";
import { Divider } from "@mui/material";
import CartState from "../../context/CartState.js";
import { getMenuFromCategory } from "../../DataFetcher.js";

import { useNavigate } from "react-router-dom";
const MultiOrder = () => {
  const getItems = async (category) => {
    try {
      const data = await getMenuFromCategory(category.toLocaleLowerCase());
      return data;
    } catch (error) {
      console.error(error);
      return []; // return an empty array in case of error
    }
  };

  const [items, setItems] = useState({
    1: [],
    2: [],
    3: [],
  });

  const [category1, setCategory1] = React.useState("entrées");
  const [category2, setCategory2] = React.useState("entrées");
  const [category3, setCategory3] = React.useState("entrées");

  useEffect(() => {
    const fetchData = async () => {
      const items1 = await getItems(category1.toLocaleLowerCase());
      const items2 = await getItems(category2.toLocaleLowerCase());
      const items3 = await getItems(category3.toLocaleLowerCase());
      setItems({
        1: items1,
        2: items2,
        3: items3,
      });
    };
    fetchData();
  }, [category1, category2, category3]);

  const handleCategoryChange1 = (cat) => {
    setCategory1(cat.toLowerCase());
    console.log("clicked" + cat);
  };
  const handleCategoryChange2 = (cat) => {
    setCategory2(cat.toLowerCase());
    console.log("clicked" + cat);
  };
  const handleCategoryChange3 = (cat) => {
    setCategory3(cat.toLowerCase());
    console.log("clicked" + cat);
  };
  const handleViewOrderButtonClick = () => {
    //navigate('/ordersummary', { state: { cartItems } });
  };

  const [currentIndex, setCurrentIndex] = useState(-1);
  const [isSupplement, setIsSupplement] = useState(false);

  function decreaseFunction() {
    setCurrentIndex(currentIndex - 1);
    if (currentIndex === 0) {
      setIsSupplement(false);
    }
  }

  const [currentIndex2, setCurrentIndex2] = useState(-1);
  const [isSupplement2, setIsSupplement2] = useState(false);

  function decreaseFunction2() {
    setCurrentIndex(currentIndex - 1);
    if (currentIndex === 0) {
      setIsSupplement(false);
    }
  }

  const [currentIndex3, setCurrentIndex3] = useState(-1);
  const [isSupplement3, setIsSupplement3] = useState(false);

  function decreaseFunction3() {
    setCurrentIndex(currentIndex - 1);
    if (currentIndex === 0) {
      setIsSupplement(false);
    }
  }

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
            title="Commande du gérant 👑"
            decreaseFunction={decreaseFunction}
          />
          <NavPlusList
            handleCategoryChange={handleCategoryChange1}
            foodItems={items[1]}
            currCat={category1}
            isMultiOrder={true}
            indexSupplement={currentIndex}
            setIndexSupplement={setCurrentIndex}
            isSupplement={isSupplement}
            setIsSupplement={setIsSupplement}
          />
        </div>

        <Divider
          orientation="vertical"
          flexItem
          sx={{ width: "1vw", backgroundColor: "black" }}
        />

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
            decreaseFunction={decreaseFunction2}
          />
          <NavPlusList
            handleCategoryChange={handleCategoryChange2}
            foodItems={items[2]}
            currCat={category2}
            isMultiOrder={true}
            indexSupplement={currentIndex2}
            setIndexSupplement={setCurrentIndex2}
            isSupplement={isSupplement2}
            setIsSupplement={setIsSupplement2}
          />
        </div>

        {/* Troisième commande */}
        <Divider
          orientation="vertical"
          flexItem
          sx={{ width: "1vw", backgroundColor: "black" }}
        />

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
            decreaseFunction={decreaseFunction3}
          />
          <NavPlusList
            handleCategoryChange={handleCategoryChange3}
            foodItems={items[3]}
            currCat={category3}
            isMultiOrder={true}
            indexSupplement={currentIndex3}
            setIndexSupplement={setCurrentIndex3}
            isSupplement={isSupplement3}
            setIsSupplement={setIsSupplement3}
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
