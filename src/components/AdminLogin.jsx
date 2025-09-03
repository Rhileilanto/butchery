import React, { useState } from "react";
import GlowingButton from "./GlowingButton";
import "../App.css";

export default function AdminLogin({ onLogin }) {
  const [credentials, setCredentials] = useState({ username: "", password: "" });
  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    // Simple hardcoded credentials - in production, use proper authentication
    if (credentials.username === "admin" && credentials.password === "butchery123") {
      onLogin(true);
      setError("");
    } else {
      setError("Invalid credentials. Try admin/butchery123");
    }
  }

  function handleChange(e) {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  }

  return (
    <div className="admin-login">
      <h2>Admin Login</h2>
      <form onSubmit={handleSubmit} className="login-form">
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={credentials.username}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={credentials.password}
          onChange={handleChange}
          required
        />
        {error && <p className="error-message">{error}</p>}
        <GlowingButton type="submit">Login</GlowingButton>
      </form>
      <p className="login-hint">Hint: admin / butchery123</p>
    </div>
  );
} 