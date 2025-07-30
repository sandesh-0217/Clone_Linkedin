import React from "react";

function LoginForm({ onLogin }) {
  return (
    <form className="bg-white p-6 rounded shadow-md w-full max-w-sm" onSubmit={onLogin}>
      <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
      <input type="email" placeholder="Email" className="w-full mb-3 p-2 border rounded" required />
      <input type="password" placeholder="Password" className="w-full mb-3 p-2 border rounded" required />
      <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700">Login</button>
    </form>
  );
}

export default LoginForm;