import React from "react";
import "./styles/_OrderRecapLayout.scss";
import beverage from "./img/beverage.png";
import "./OrderRecapLayout.css";
import CartContext from "../../context/CartContext";
import { useNavigate } from "react-router";
import { fillCommand, startReservation } from "../../DataPoster";

function OrderRecapLayout() {
  const navigate = useNavigate();
  const { cartItems } = React.useContext(CartContext);
  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <div className="recapScreen">
      <div style={{ marginTop: "2vh" }} className="greenTextXL rotate180">
        {" "}
        Recapitulatif des entrées{" "}
      </div>
      <div className="recapDiv">
        <div className="buttonStyle rotateMinus90">
          <div className="greenText"> Retour </div>
          <button className="buttonAction rotateMinus90"> > </button>
        </div>

        <div id="order-recap">
          <div className="price">{totalPrice}€</div>
          <ul className="circle-container">
            {cartItems.map((item) => (
              <li key={item.shortName}>
                <div className="circle">
                  <img src={item.image} alt="" />
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="buttonStyle rotate90">
          <div className="greenText">Suivant</div>
          <button
            className="buttonAction rotateMinus90"
            onClick={async () => {
              const res2 = await fillCommand(cartItems);
              //delay 4 second
              await new Promise((resolve) => setTimeout(resolve, 3000));

              navigate("/beforeGame");
            }}
          >
            {" "}
            >{" "}
          </button>
        </div>
      </div>
      <div style={{ marginBottom: "2vh" }} className="greenTextXL">
        {" "}
        Recapitulatif des entrées{" "}
      </div>
    </div>
  );
}

export default OrderRecapLayout;
