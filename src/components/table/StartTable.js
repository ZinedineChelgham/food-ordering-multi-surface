import React from "react";
import "./StartTable.css";
import PersonnalTableLeft from "./PersonnalTableLeft";
import PersonnalTableRight from "./PersonnalTableRight";

function StartTable() {
    return (
        <div className="globalTable">
            <div className="part rotation" id="table1">
                <PersonnalTableRight></PersonnalTableRight>
            </div>
            <div className="part rotation" id="table2">
                <PersonnalTableLeft></PersonnalTableLeft>
            </div>
            <div className="part" id="table3">
                <PersonnalTableLeft></PersonnalTableLeft>
            </div>
            <div className="part" id="table4">
                <PersonnalTableRight></PersonnalTableRight>
            </div>
        </div>
    );
}

export default StartTable;
