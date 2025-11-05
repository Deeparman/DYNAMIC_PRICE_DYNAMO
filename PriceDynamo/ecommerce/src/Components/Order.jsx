// src/components/Orders.jsx
import React from "react";
import "./Order.css";

const Order = () => {
  const orders = [
    { id: 101, user: "Arjun", total: 2400, status: "Delivered" },
    { id: 102, user: "Simran", total: 1299, status: "Pending" },
    { id: 103, user: "Kiran", total: 850, status: "Shipped" },
  ];

  return (
    <div className="orders-page">
      <h2>Orders</h2>
      <table className="orders-table">
        <thead>
          <tr>
            <th>Order ID</th>
            <th>User</th>
            <th>Total</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((o) => (
            <tr key={o.id}>
              <td>{o.id}</td>
              <td>{o.user}</td>
              <td>₹{o.total}</td>
              <td className={`status ${o.status.toLowerCase()}`}>{o.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Order;
