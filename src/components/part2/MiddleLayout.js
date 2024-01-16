import React from "react";
import "./styles/_MiddleLayout.css";
import OrderItem from "./OrderItem";

function MiddleLayout() {
  const items = [
    {
      name: "Item 1",
      image:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.shutterstock.com%2Ffr%2Fsearch%2Fburger&psig=AOvVaw1Z-NDtAKm0MybBOBGDTiw1&ust=1705479922657000&source=images&cd=vfe&ved=0CBIQjRxqFwoTCOil8Pm94YMDFQAAAAAdAAAAABAE",
      price: 10.99,
    },
    {
      name: "Item 2",
      image:
        "https://img.freepik.com/photos-gratuite/burger-explosif-legumes-fromage-fondu-fond-noir-generative-ai_157027-1734.jpg",
      price: 15.49,
    },
    {
      name: "Item 3",
      image:
        "https://media.istockphoto.com/id/1206323282/photo/juicy-hamburger-on-white-background.jpg?s=612x612&w=0&k=20&c=K0DxyiChLwewXcCy8aLjjOqkc8QXPgQMAW-vwRCzqG4=",
      price: 7.99,
    },
    // Add more items as needed
  ];

  return (
    <div id="middle">
      {items.map((item) => (
        <OrderItem
          key={item.name}
          name={item.name}
          image={item.image}
          price={item.price}
        />
      ))}
    </div>
  );
}

export default MiddleLayout;
