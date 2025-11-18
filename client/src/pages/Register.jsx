import React, { useState } from "react";
import "../assets/css/auth.css";
import bg from "../assets/images/main_bg.jpg";
import api from "../api";

function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await api.post("/auth/register", {
        username,
        email,
        password,
      });

      alert("Account Created Successfully!");
      window.location.href = "/login";
    } catch (err) {
      alert(err.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div
      className="auth-container"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="auth-left">
        <h1 className="brand">🍰 BakeBuddy</h1>
        <p>Where every bite feels like home.</p>
      </div>

      <div className="auth-right">
        <form className="auth-form" onSubmit={handleRegister}>
          <h2>Create Account</h2>

          <input
            type="text"
            placeholder="Full Name"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />

          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Create Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit">Register</button>

          <p>
            Already have an account? <a href="/login">Login here</a>
          </p>
        </form>
      </div>
      <a
        href="/admin-login"
        className="admin-access"
        style={{
          position: "absolute",
          bottom: "20px",
          right: "20px",
          padding: "10px 16px",
          background: "rgba(0, 0, 0, 0.5)",
          backdropFilter: "blur(6px)",
          borderRadius: "8px",
          color: "white",
          fontSize: "13px",
          fontWeight: "600",
          textDecoration: "none",
          border: "1px solid rgba(255,255,255,0.3)",
          cursor: "pointer",
          transition: "0.2s"
        }}
        onMouseEnter={(e) => { e.target.style.background = "rgba(0,0,0,0.7)" }}
        onMouseLeave={(e) => { e.target.style.background = "rgba(0,0,0,0.5)" }}
      >
        Admin Access
      </a>
    </div>
  );
}

export default Register;
