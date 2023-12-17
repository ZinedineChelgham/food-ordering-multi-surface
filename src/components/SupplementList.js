import React from "react";
import Grid from "@mui/material/Grid";
import IconWithLabelCard from "./common/IconWithLabelCard";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import SupplementItem from "./common/Supplement";

function SupplementList(props) {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isLandscape = useMediaQuery("(orientation: landscape)");

  const supplements = [
    { id: 1, name: "Nom du produit 1", price: "1.50" },
    { id: 2, name: "Nom du produit 1", price: "20" },
    { id: 3, name: "Nom du produit 1", price: "20" },
    { id: 4, name: "Nom du produit 1", price: "20" },
    { id: 5, name: "Nom du produit 1", price: "20" },
    { id: 6, name: "Nom du produit 1", price: "20" },
    { id: 7, name: "Nom du produit 1", price: "20" },
    { id: 8, name: "Nom du produit 1", price: "20" },
    { id: 9, name: "Nom du produit 1", price: "20" },
    { id: 10, name: "Nom du produit 1", price: "20" },
    { id: 11, name: "Nom du produit 1", price: "20" },
    { id: 12, name: "Nom du produit 1", price: "20" },
    { id: 13, name: "Nom du produit 1", price: "20" },

    // ...d'autres produits
  ];

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div style={{ height: "auto" }}>
        <p>SUPPLEMENTS</p>
      </div>
      <div style={{ height: "150%", overflow: "auto" }}>
        {supplements.map((supplement) => (
          <SupplementItem
            key={supplement.id}
            name={supplement.name}
            price={supplement.price}
          />
        ))}
      </div>
    </div>
  );
}

export default SupplementList;
