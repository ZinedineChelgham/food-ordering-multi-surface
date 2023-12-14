import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import OrderSummaryPage from "./components/OrderSummaryPage.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartState from "./context/CartState.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <CartState>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/ordersummary" element={<OrderSummaryPage />} />
      </Routes>
    </BrowserRouter>
  </CartState>
);
