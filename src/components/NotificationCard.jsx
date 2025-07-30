import React from "react";

function NotificationCard({ message }) {
  return (
    <div className="bg-white p-3 rounded shadow mb-2">
      <p className="text-gray-700">{message}</p>
    </div>
  );
}

export default NotificationCard;