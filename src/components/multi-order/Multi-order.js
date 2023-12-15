import React from "react";
import Header from "../SpecialPhone/Header.js";
import OrderHeader from "../OrderHeader.js";
import CustomHeader from "./CustomHeader";
import AppBarMultiOrder from "./AppBarMultiOrder";
import foodItems from "../../data";
import NavPlusList from "../NavPlusListBorn";
import OrderContainer from "../OrderContainer";
const MultiOrder = () => {
  const [category, setCategory] = React.useState("menus");

  const handleCategoryChange = (cat) => {
    setCategory(cat.toLowerCase());
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
            showBackButton
            onBackButtonClick={handleBackButtonClick}
            showViewOrderButton
            onViewOrderButtonClick={handleViewOrderButtonClick()}
          />
          <NavPlusList
            handleCategoryChange={handleCategoryChange}
            foodItems={foodItems[category]}
            currCat={category}
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
            showBackButton
            onBackButtonClick={handleBackButtonClick}
          />
          <NavPlusList
            handleCategoryChange={handleCategoryChange}
            foodItems={foodItems[category]}
            currCat={category}
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
            showBackButton
            onBackButtonClick={handleBackButtonClick}
          />
          <NavPlusList
            handleCategoryChange={handleCategoryChange}
            foodItems={foodItems[category]}
            currCat={category}
            isMultiOrder={true}
          />
        </div>
      </div>

      {/* Total partagé */}
      <div style={{ height: "10%", overflow: "hidden" }}>
        <OrderContainer />
      </div>
    </div>
  );
};

export default MultiOrder;