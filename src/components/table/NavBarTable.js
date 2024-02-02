import React from "react";
import "./NavBarTable.css";
import LunchDiningIcon from "@mui/icons-material/LunchDining";
import LocalPizzaIcon from "@mui/icons-material/LocalPizza";
import LocalDrinkIcon from "@mui/icons-material/LocalDrink";
import IcecreamIcon from "@mui/icons-material/Icecream";

function NavBarTable() {
    const iconsInfos = [
        { icon: LunchDiningIcon, route: "/lunch", label: "Burgers" },
        { icon: LocalPizzaIcon, route: "/fastfood", label: "Pizzas" },
        { icon: LocalDrinkIcon, route: "/drink", label: "Boissons" },
        { icon: IcecreamIcon, route: "/cookie", label: "Desserts" },
    ];
    return (
        <div className="NavBarTable">
            <div>icone 1</div>
            <div>icone 2</div>
            <div>icone 3</div>
            <div>icone 3</div>

        </div>
    );
}

export default NavBarTable;
