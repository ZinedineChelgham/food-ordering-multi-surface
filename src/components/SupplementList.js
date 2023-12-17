import React from "react";
import Grid from "@mui/material/Grid";
import IconWithLabelCard from "./common/IconWithLabelCard";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import SupplementItem from "./common/Supplement";
import Button from "@mui/material/Button";

function SupplementList({ type, index, setIndex }) {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isLandscape = useMediaQuery("(orientation: landscape)");

  const [supplements, setSupplements] = React.useState([]);

  React.useEffect(() => {
    fetch("http://localhost:3001/supplements/" + type)
      .then((res) => res.json())
      .then((data) => setSupplements(data));
  }, [type]);

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
        <p>{type}</p>
      </div>
      <div style={{ height: "50%", overflow: "auto" }}>
        {supplements.map((supplement) => (
          <SupplementItem
            key={supplement.id}
            name={supplement.name}
            price={supplement.price}
            url={supplement.urlImage}
            item={supplement}
          />
        ))}
      </div>
      <Button
        variant="contained"
        color="primary"
        style={{ marginTop: "2vh" }}
        // Add an onClick handler if needed
        onClick={() => {
          console.log("Clicked");
          setIndex(index + 1);
        }}
      >
        Passer à la suite
      </Button>
    </div>
  );
}

export default SupplementList;
