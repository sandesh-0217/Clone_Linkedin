import React from "react";

function ConnectionCard({ user }) {
  return (
    <div className="flex items-center gap-3 bg-gray-100 p-3 rounded-md">
      <img src={user.avatar} alt={user.name} className="w-10 h-10 rounded-full" />
      <div>
        <p className="font-medium text-sm">{user.name}</p>
        <p className="text-xs text-gray-600">{user.title}</p>
      </div>
    </div>
  );
}

export default ConnectionCard;