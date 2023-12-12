import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import OrderSummaryPage from "./components/OrderSummaryPage.js";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import MultiOrder from "./components/multi-order/Multi-order.js";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
        <Route path="/" element={<App />} />
        <Route path="/ordersummary" element={<OrderSummaryPage/> } />
        <Route path="/multiorder" element={<MultiOrder />} />
    </Routes>
  </BrowserRouter>

);

