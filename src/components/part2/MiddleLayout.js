import React from "react";
import "./styles/_MiddleLayout.css";
import OrderItem from "./OrderItem";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import { useNavigate } from "react-router";

function MiddleLayout() {
  const navigate = useNavigate();
  const items = [
    {
      name: "Item 1",
      image:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.shutterstock.com%2Ffr%2Fsearch%2Fburger&psig=AOvVaw1Z-NDtAKm0MybBOBGDTiw1&ust=1705479922657000&source=images&cd=vfe&ved=0CBIQjRxqFwoTCOil8Pm94YMDFQAAAAAdAAAAABAE",
      price: 10,
    },
    {
      name: "Item 2",
      image:
        "https://img.freepik.com/photos-gratuite/burger-explosif-legumes-fromage-fondu-fond-noir-generative-ai_157027-1734.jpg",
      price: 15,
    },
    {
      name: "Item 3",
      image:
        "https://media.istockphoto.com/id/1206323282/photo/juicy-hamburger-on-white-background.jpg?s=612x612&w=0&k=20&c=K0DxyiChLwewXcCy8aLjjOqkc8QXPgQMAW-vwRCzqG4=",
      price: 7,
    },
    // Add more items as needed
  ];

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
        {items.map((item) => (
          <div className="middle-items" draggable>
            <OrderItem
              key={item.name}
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
