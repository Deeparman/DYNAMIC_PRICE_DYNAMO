// src/components/Users.jsx
import React from "react";
import "./User.css";

const User = () => {
  const users = [
    { id: 1, name: "Arjun", email: "arjun@example.com" },
    { id: 2, name: "Simran", email: "simran@example.com" },
    { id: 3, name: "Kiran", email: "kiran@example.com" },
  ];

  return (
    <div className="users-page">
      <h2>Users</h2>
      <table className="user-table">
        <thead>
          <tr>
            <th>ID</th><th>Name</th><th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u) => (
            <tr key={u.id}>
              <td>{u.id}</td><td>{u.name}</td><td>{u.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default User;
