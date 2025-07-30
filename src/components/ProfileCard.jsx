import React from "react";

function ProfileCard() {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="bg-white p-4 rounded shadow text-center">
      <img src="https://via.placeholder.com/100" alt="Profile" className="rounded-full mb-2 mx-auto" />
      <h3 className="font-semibold">{user?.name}</h3>
      <p className="text-sm text-gray-500">{user?.role}</p>
    </div>
  );
}

export default ProfileCard;