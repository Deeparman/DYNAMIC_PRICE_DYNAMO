import React from "react";
import "./StatsOverview.css";

const stats = [
  { icon: "🛍️", label: "Total Products", value: "120", color: "blue" },
  { icon: "📦", label: "Total Orders", value: "890", color: "green" },
  { icon: "👥", label: "Total Customers", value: "540", color: "orange" },
  { icon: "💰", label: "Total Revenue", value: "₹2,45,000", color: "purple" },
  { icon: "⚠️", label: "Low Stock Items", value: "8", color: "red" },
  { icon: "💸", label: "Pending Refunds", value: "12", color: "yellow" },
];

const StatsOverview = () => {
  return (
    <div className="stats-section">
      <h2>Business Overview</h2>
      <div className="stats-grid">
        {stats.map((stat, index) => (
          <div className={`stat-card ${stat.color}`} key={index}>
            <span>{stat.icon}</span>
            <h3>{stat.value}</h3>
            <p>{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatsOverview;
