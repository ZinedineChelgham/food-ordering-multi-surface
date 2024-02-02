import React from "react";
import "./PersonnalTableLeft.css";
import NavBarTable from "./NavBarTable";

function PersonnalLeft() {
    return (
        <div className="personalTableLeft">
            <div style={{borderRight: "solid 1px"}}>Perso1</div>
            <div style={{borderRight: "solid 1px"}}>
                <NavBarTable></NavBarTable>
            </div>
            <div >perso3</div>

        </div>
    );
}

export default PersonnalLeft;
