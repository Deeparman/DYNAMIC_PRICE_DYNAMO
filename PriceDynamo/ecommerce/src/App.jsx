import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import CategoryPage from "./Pages/CategoryPage";
import "./App.css";
import AdminHome from "./Pages/AdminHome";
import Users from "./Components/User";
import Order from "./Components/Order";
import Category from "./Components/Category";
import SimulatePage from "./Pages/SimulatePage";
import { ProductProvider } from "./Context/ProductContext";
import Login from "./Pages/Login";

function App() {
  return (
    <>
      <ProductProvider>
        <Router>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Home />} />
            <Route path="/admin" element={<AdminHome />} />
            <Route path="/category/:categoryName" element={<CategoryPage />} />
            <Route path="/admin/users" element={<Users />} />
            <Route path="/admin/orders" element={<Order />} />
            <Route path="/productlist" element={<Category />} />
            <Route path="/simulate" element={<SimulatePage />} />
          </Routes>
        </Router>
      </ProductProvider>
    </>
  );
}

export default App;
