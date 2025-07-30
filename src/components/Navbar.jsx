import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-white shadow p-4 flex justify-between items-center">
      <div className="text-xl font-bold text-blue-600">LinkedIn Clone</div>
      <div className="space-x-4">
        <Link to="/home" className="text-gray-700 hover:text-blue-600">Home</Link>
        <Link to="/network" className="text-gray-700 hover:text-blue-600">My Network</Link>
        <Link to="/jobs" className="text-gray-700 hover:text-blue-600">Jobs</Link>
        <Link to="/profile/1" className="text-gray-700 hover:text-blue-600">Profile</Link>
        <Link to="/" className="text-gray-700 hover:text-blue-600">Logout</Link>
      </div>
    </nav>
  );
}

export default Navbar;