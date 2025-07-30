import React from "react";

function RequestCard({ user, onAccept, onIgnore }) {
  return (
    <div className="flex items-center bg-white shadow-sm p-4 rounded-md gap-4">
      <img src={user.avatar} alt={user.name} className="w-12 h-12 rounded-full" />
      <div className="flex-1">
        <h3 className="font-semibold">{user.name}</h3>
        <p className="text-sm text-gray-500">{user.title}</p>
      </div>
      <div className="flex gap-2">
        <button
          onClick={() => onAccept(user.id)}
          className="bg-blue-600 text-white px-3 py-1 rounded text-sm"
        >
          Accept
        </button>
        <button
          onClick={() => onIgnore(user.id)}
          className="bg-gray-200 text-sm px-3 py-1 rounded"
        >
          Ignore
        </button>
      </div>
    </div>
  );
}

export default RequestCard;