import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import OrderSummaryPage from "./components/OrderSummaryPage.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartState from "./context/CartState.js";
import MultiOrder from "./components/multi-order/Multi-order";
import HomeBorne from "./components/HomeBorne.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <CartState>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeBorne />} />
        <Route path="/start" element={<App />} />
        <Route path="/ordersummary" element={<OrderSummaryPage />} />
        <Route path="/multiorder" element={<MultiOrder />} />
      </Routes>
    </BrowserRouter>
  </CartState>
);
