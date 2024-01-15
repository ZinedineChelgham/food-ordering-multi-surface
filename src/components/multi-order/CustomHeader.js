import React from "react";
import Button from "@mui/material/Button";

const CustomHeader = (props) => {
  const { isMultiOrder, onBackClick, onFinishClick } = props;

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px",
        backgroundColor: "#f0f0f0",
      }}
    >
      {/* Section à gauche */}
      <div>
        {isMultiOrder ? (
          <>
            <span style={{ marginLeft: "10px" }}></span>{" "}
            {/* Ajoutez un espace entre les boutons */}
            <Button
              variant="contained"
              color="secondary"
              onClick={onFinishClick}
            >
              Finaliser Commande
            </Button>
          </>
        ) : (
          <Button variant="contained" color="primary" onClick={onBackClick}>
            Retour
          </Button>
        )}
      </div>

      {/* Section à droite */}
      {isMultiOrder && (
        <div>
          <Button variant="contained" color="primary" onClick={onBackClick}>
            Retour
          </Button>
        </div>
      )}
    </div>
  );
};

export default CustomHeader;
