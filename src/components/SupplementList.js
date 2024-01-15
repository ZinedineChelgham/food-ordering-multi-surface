import React from "react";
import Grid from "@mui/material/Grid";
import IconWithLabelCard from "./common/IconWithLabelCard";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import SupplementItem from "./common/Supplement";
import Button from "@mui/material/Button";
import { getSupplementsFromCategory } from "../DataFetcher";

function SupplementList({
  type,
  index,
  setIndex,
  setIsSupplement,
  isMultiOrder,
}) {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isLandscape = useMediaQuery("(orientation: landscape)");

  const [supplements, setSupplements] = React.useState([]);

  console.log("on supléments");

  React.useEffect(() => {
    const getSupplements = async () => {
      try {
        const data = await getSupplementsFromCategory(type.toLocaleLowerCase());
        return data;
      } catch (error) {
        console.error(error);
        return []; // return an empty array in case of error
      }
    };
    const fetchData = async () => {
      const items = await getSupplements();
      console.log(items);
      setSupplements(items);
    };
    fetchData();
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
      <div
        style={{
          height: "auto",
          fontSize: isLandscape ? "3vw" : "3vh",
          marginBottom: isLandscape ? "1vw" : "1vh",
        }}
      >
        <p>{type === "Divers" ? type : type + "s"}</p>
      </div>
      <div style={{ height: isLandscape ? "45%" : "52%", overflow: "auto" }}>
        {supplements.map((supplement) => (
          <SupplementItem
            key={supplement._id}
            name={supplement.shortName}
            price={supplement.price}
            url={supplement.image}
            item={supplement}
            isMultiOrder={isMultiOrder}
          />
        ))}
      </div>
      <div style={{ textAlign: "end", width: "100%" }}>
        <Button
          variant="contained"
          color="primary"
          style={{
            marginTop: "2vh",
            fontSize: isLandscape ? "2vw" : "2vh",
            textTransform: "none",
          }}
          // Add an onClick handler if needed
          onClick={() => {
            console.log("Clicked");
            if (index === 2) {
              setIndex(-1);
              setIsSupplement(false);
            } else {
              setIndex(index + 1);
            }
          }}
        >
          Suivant
        </Button>
      </div>
    </div>
  );
}

export default SupplementList;
