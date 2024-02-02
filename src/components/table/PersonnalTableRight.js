import React from "react";
import "./PersonnalTableRight.css";
import NavBarTable from "./NavBarTable";

function PersonnalRight() {
    return (
        <div className="personalTableRight">
            <div style={{borderRight: "solid 1px"}}>Perso1</div>
            <div style={{borderRight: "solid 1px"}}>
                <NavBarTable></NavBarTable>
            </div>
            <div >perso3</div>

        </div>
    );
}

export default PersonnalRight;
