import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import OrderSummaryPage from "./components/OrderSummaryPage.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartState from "./context/CartState.js";
import MultiOrder from "./components/multi-order/Multi-order";
import HomeBorne from "./components/HomeBorne.js";
import ThankYouComponent from "./components/ThankYouComponent";
import StartingLayout from "./components/part2/StartingLayout.js";
import GamePage from "./components/part2/GamePage.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <CartState>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StartingLayout />} />
        <Route path="/start" element={<App />} />
        <Route path="/ordersummary" element={<OrderSummaryPage />} />
        <Route path="/multiorder" element={<MultiOrder />} />
        <Route path="/end" element={<ThankYouComponent />} />
        <Route path="/game" element={<GamePage/>} />
      </Routes>
    </BrowserRouter>
  </CartState>
);
