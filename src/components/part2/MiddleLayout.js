import React from "react";
import "./styles/_MiddleLayout.css";
import OrderItem from "./OrderItem";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import { useNavigate } from "react-router";
import { getMenuFromCategory } from "../../DataFetcher";
import { fillCommand, startReservation } from "../../DataPoster";

function MiddleLayout() {
  const navigate = useNavigate();
  const [items, setItems] = React.useState([]);

  React.useEffect(() => {
    getMenuFromCategory("entrées").then((data) => {
      setItems(data);
      console.log(data);
    });

    startReservation();
  }, []);

  const handleOnDragStart = (e, item) => {
    console.log("draging item", item);
    e.dataTransfer.setData("menuItem", JSON.stringify(item));
  };

  const handleCheckboxChange = () => {
    // Check if all checkboxes are checked
    const allCheckboxesChecked =
      document.querySelectorAll('input[type="checkbox"]:checked').length === 4;

    // If all checkboxes are checked, navigate to "/recap"
    if (allCheckboxesChecked) {
      navigate("/recap");
    }
  };

  return (
    <div id="middle">
      <div id="left-cb" className="cb-container">
        <FormControlLabel
          key={10}
          required
          control={<Checkbox onChange={handleCheckboxChange} />}
          label=""
        />
        <h2>Passer au plats !</h2>
        <FormControlLabel
          key={20}
          required
          control={<Checkbox onChange={handleCheckboxChange} />}
          label=""
        />
      </div>
      <div id="middle-items-container">
        {items.map((item, i) => (
          <div key={i} className="middle-items" draggable>
            <OrderItem
              key={item.shortName}
              item={item}
              handleOnDragStart={(e) => handleOnDragStart(e, item)}
            />
          </div>
        ))}
      </div>

      <div id="right-cb" className="cb-container">
        <FormControlLabel
          key={30}
          required
          control={<Checkbox onChange={handleCheckboxChange} />}
          label=""
        />
        <h2>Passer au plats !</h2>
        <FormControlLabel
          key={40}
          required
          control={<Checkbox onChange={handleCheckboxChange} />}
          label=""
        />
      </div>
    </div>
  );
}

export default MiddleLayout;
