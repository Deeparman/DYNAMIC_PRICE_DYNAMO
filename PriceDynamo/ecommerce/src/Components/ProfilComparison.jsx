import React, { useState, useEffect } from "react";
import "./ProfitComparison.css";

const ProfitComparison = () => {
  const [profitData, setProfitData] = useState({
    oldProfit: 0,
    newProfit: 0,
    change: 0,
    history: [],
  });

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("profitHistory")) || [];
    if (stored.length > 0) {
      const latest = stored[stored.length - 1];
      setProfitData({
        oldProfit: latest.oldProfit,
        newProfit: latest.newProfit,
        change: latest.change,
        history: stored.slice(-5).reverse(), // last 5 updates
      });
    }
  }, []);

  return (
    <div className="profit-comparison">
      <h2>📈 Profit Comparison</h2>
      <div className="profit-cards">
        <div className="card">
          <h3>Old Profit</h3>
          <p>₹{profitData.oldProfit}</p>
        </div>
        <div className="card">
          <h3>New Profit</h3>
          <p>₹{profitData.newProfit}</p>
        </div>
        <div className={`card ${profitData.change >= 0 ? "positive" : "negative"}`}>
          <h3>Change</h3>
          <p>
            {profitData.change >= 0 ? "▲" : "▼"} {Math.abs(profitData.change)}%
          </p>
        </div>
      </div>

      <h4>Recent Updates</h4>
      <ul className="history-list">
        {profitData.history.map((item, index) => (
          <li key={index}>
            {item.product}: ₹{item.oldProfit} → ₹{item.newProfit} ({item.change}%)
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProfitComparison;
