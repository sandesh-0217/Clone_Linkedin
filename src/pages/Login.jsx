// File: /src/pages/Login.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginForm from "../components/LoginForm";
import { users } from "../data/users";
import CryptoJS from "crypto-js";
import Navbar from "../components/Navbar";

function Login() {
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    const user = users.find((u) => u.email === email);
    if (!user) {
      setError("User not found");
      return;
    }

    const decryptedPass = CryptoJS.AES.decrypt(
      user.password,
      "linkedin-secret-key"
    ).toString(CryptoJS.enc.Utf8);

    if (decryptedPass !== password) {
      setError("Invalid credentials");
      return;
    }

    // Save user in localStorage
    localStorage.setItem("user", JSON.stringify(user));
    navigate("/home");
  };

  return (
    
    <div className="flex items-center justify-center min-h-screen bg-[#0077B5]">
      <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-sm">
        <LoginForm onLogin={handleLogin} />
        {error && <p className="text-red-500 text-center mt-3">{error}</p>}
      </div>
    </div>
  );
}

export default Login;