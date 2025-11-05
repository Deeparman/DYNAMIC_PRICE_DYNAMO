import React from "react";
import "./AdminNav.css";
import { useNavigate } from "react-router-dom";

const AdminNav = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("userRole");
    navigate("/login");
  };

  return (
    <nav className="admin-navbar">
      <div className="nav-left">
        <h1 className="brand">⚡ Admin Panel</h1>
      </div>

      <div className="admin-nav-actions">
        <button className="nav-btn">Profile</button>
        <button className="nav-btn logout" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </nav>
  );
};

export default AdminNav;
