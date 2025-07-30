import React from "react";
import { useNavigate } from "react-router-dom";
import RegisterForm from "../components/RegisterForm";
import Navbar from "../components/Navbar";

function Register() {
  const navigate = useNavigate();
  const handleRegister = (e) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <RegisterForm onRegister={handleRegister} />
    </div>
  );
}

export default Register;