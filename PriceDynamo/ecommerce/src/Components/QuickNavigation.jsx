import React from "react";
import "./QuickNavigation.css";
import { Link } from "react-router-dom";

const QuickNavigation = () => {
  return (
    <div className="quick-nav">
      <h2>Quick Navigation</h2>
      <div className="nav-links">
        <Link to={"/productlist"}>
          <button className="nav-card">🛍️ Products</button>
        </Link>
        <Link to={"/admin/orders"}>
          <button className="nav-card">📦 Orders</button>
        </Link>
        <Link to={"/admin/users"}>
          <button className="nav-card">👥 Customers</button>
        </Link>
      </div>
    </div>
  );
};

export default QuickNavigation;
