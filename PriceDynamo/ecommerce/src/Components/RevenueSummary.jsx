import React, { useEffect, useState } from "react";
import "./RevenueSummary.css";

const RevenueSummary = () => {
  const [summary, setSummary] = useState({
    oldRevenue: 0,
    newRevenue: 0,
    growth: 0,
  });

  useEffect(() => {
    // Load from stored profit history
    const history = JSON.parse(localStorage.getItem("profitHistory")) || [];

    if (history.length > 0) {
      // Calculate total old/new profit = simulated revenue
      const oldRevenue = history.reduce((sum, item) => sum + item.oldProfit, 0);
      const newRevenue = history.reduce((sum, item) => sum + item.newProfit, 0);

      const growth = (((newRevenue - oldRevenue) / (oldRevenue || 1)) * 100).toFixed(2);
      setSummary({ oldRevenue, newRevenue, growth });
    }
  }, []);

  return (
    <div className="revenue-summary">
      <h2>💹 Revenue Growth Summary</h2>
      <div className="revenue-cards">
        <div className="rev-card">
          <h3>Previous Revenue</h3>
          <p>₹{summary.oldRevenue.toLocaleString()}</p>
        </div>
        <div className="rev-card">
          <h3>Current Revenue</h3>
          <p>₹{summary.newRevenue.toLocaleString()}</p>
        </div>
        <div
          className={`rev-card growth ${
            summary.growth >= 0 ? "positive" : "negative"
          }`}
        >
          <h3>Revenue Change</h3>
          <p>
            {summary.growth >= 0 ? "▲" : "▼"} {Math.abs(summary.growth)}%
          </p>
        </div>
      </div>

      <p className="note">
        *Based on cumulative profit difference from all recent price adjustments.
      </p>
    </div>
  );
};

export default RevenueSummary;
