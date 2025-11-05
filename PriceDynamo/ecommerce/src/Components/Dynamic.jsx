import React from "react";
import { useNavigate } from "react-router-dom";
import "./Dynamic.css";

const Dynamic = () => {
  const navigate = useNavigate();

  const handleSimulation = () => {
    navigate("/simulate");
  };

  return (
    <div className="dynamic-price-feature">
      <h2>⚙️ Dynamic Price Dynamo</h2>
      <p className="feature-desc">
        Our signature feature intelligently adjusts product prices based on demand,
        time, and user behavior — maximizing profits while keeping customers happy.
      </p>

      <div className="feature-card">
        <h3>Simulate Dynamic Pricing</h3>
        <p>Try out the dynamic pricing model and see real-time adjustments in action.</p>
        <button className="try-btn" onClick={handleSimulation}>
          Run Price Simulation
        </button>
      </div>
    </div>
  );
};

export default Dynamic;
