import React from "react";
import Header from "../SpecialPhone/Header.js";
import OrderHeader from "../OrderHeader.js";
import CustomHeader from "./CustomHeader";
import AppBarMultiOrder from "./AppBarMultiOrder";
import foodItems from "../../data";
import NavPlusList from "../NavPlusListBorn";
import OrderContainer from "../OrderContainer";
const MultiOrder = () => {
  const [category1, setCategory1] = React.useState("menus");
  const [category2, setCategory2] = React.useState("menus");
  const [category3, setCategory3] = React.useState("menus");


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

  const handleBackButtonClick = () => {
    // Logique pour le bouton Retour
  };

  const handleViewOrderButtonClick = () => {
    // Logique pour le bouton Voir la commande
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
            showViewOrderButton
            onViewOrderButtonClick={handleViewOrderButtonClick()}
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
