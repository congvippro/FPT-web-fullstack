// LoginPage.js

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginPage.css";
function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === "123456") {
      navigate("/home");
    } else if (username === "admin" && password === "admin") {
      navigate("/docs-admin");
    } else {
      alert("Sai thông tin đăng nhập");
    }
  };

  return (
    <div className="login-page">
      <div className="div-login">
        <h1>Đăng Nhập</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Username:</label>
            <input
              type="text"
              value={username}
              className="login_input"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              className="login_input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit">Đăng Nhập</button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
