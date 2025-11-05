import React from "react";
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const userRole = localStorage.getItem("userRole");

  const handleLogout = () => {
    localStorage.removeItem("userRole");
    navigate("/login");
  };

  return (
    <nav className="navbar-home">
      <div className="nav-container-home">
        <div className="nav-left-home">
          <h2 className="brand-name-home">ShopEase</h2>
        </div>

        <div className="nav-links-home">
          <Link to="/">
            <button className="nav-btn-home">Home</button>
          </Link>
          <Link to="/productlist">
            <button className="nav-btn-home">Categories</button>
          </Link>
          <Link >
            <button className="nav-btn-home">Deals</button>
          </Link>

          {userRole ? (
            <button className="nav-btn-home login-btn-home" onClick={handleLogout}>
              Logout
            </button>
          ) : (
            <Link to="/login">
              <button className="nav-btn-home login-btn-home">Login</button>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
