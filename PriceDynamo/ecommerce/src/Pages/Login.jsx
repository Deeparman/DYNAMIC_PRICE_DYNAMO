import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("user");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Hardcoded admin credentials
    const adminEmail = "admin123987@gmail.com";
    const adminPassword = "password";

    if (role === "admin") {
      if (email === adminEmail && password === adminPassword) {
        localStorage.setItem("userRole", "admin");
        // optional: store user info
        localStorage.setItem("userEmail", email);
        navigate("/admin");
      } else {
        alert("Invalid admin credentials. Please check email/password.");
      }
      return;
    }

    // Simple (demo) user login: any non-empty email/password allowed
    if (role === "user") {
      if (email.trim() === "" || password.trim() === "") {
        alert("Please enter email and password.");
        return;
      }
      localStorage.setItem("userRole", "user");
      localStorage.setItem("userEmail", email);
      navigate("/");
      return;
    }

    alert("Invalid login attempt.");
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <label>Email:</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label>Password:</label>
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <label>Login as:</label>
          <select value={role} onChange={(e) => setRole(e.target.value)}>
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>

          <button type="submit" className="login-btn">Login</button>
        </form>
      </div>
    </div>
  );
}
