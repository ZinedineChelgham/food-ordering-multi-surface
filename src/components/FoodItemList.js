import Grid from "@mui/material/Grid";
import FoodItemCard from "./common/FoodItemCard";
import {useTheme} from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import SupplementList from "./SupplementList";
import {useState} from "react";

function FoodItemsList({foodItems, currCat}) {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
    const [isSupplement, setIsSupplement] = useState(false);
    const [currentIndexBurger, setcurrentIndexBurger] = useState(0);
    const supplementBurger = ["Fromage","Viande","Divers"];



    function setSupplement(bool) {
        setIsSupplement(bool);
    }

    return (
        <Grid
            container
            spacing={2}
            direction="row"
            justifyContent="center"
            alignItems="center"
            xs={12}
            style={{
                display: isSmallScreen ? "" : "flex",
                justifyContent: isSmallScreen ? "" : "space-around",
                alignContent: isSmallScreen ? "" : "flex-start",
                overflow:isSupplement? "hidden":"",
            }}
            sx={{
                height: "100%",
                marginLeft: "0",
                marginTop: "0",
                backgroundColor: "#8b8f8f",
                overflow: "auto",
                "&::-webkit-scrollbar": {
                    display: "none",
                },
            }}
        >{isSupplement ?
            <SupplementList type={supplementBurger[currentIndexBurger]} index={currentIndexBurger} setIndex={setcurrentIndexBurger}/>
            : foodItems.map((item, index) => (
                <Grid
                    key={index}
                    item
                    xs={isSmallScreen ? 12 : 2.75}
                    style={{
                        padding: "0",
                        marginBottom: isSmallScreen ? "0" : "2vh",
                        marginTop: "2vh",
                    }}
                >
                    <FoodItemCard item={item} setSupplement={setSupplement}/>
                </Grid>
            ))}

        </Grid>
    );
}

export default FoodItemsList;
