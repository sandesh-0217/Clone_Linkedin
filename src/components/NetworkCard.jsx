import React from "react";

function NetworkCard({ person, onConnect }) {
  return (
    <div className="flex items-center bg-white shadow-sm p-4 rounded-md gap-4">
      <img
        src={person.avatar}
        alt={person.name}
        className="w-12 h-12 rounded-full"
      />
      <div className="flex-1">
        <h3 className="font-semibold">{person.name}</h3>
        <p className="text-sm text-gray-500">{person.title}</p>
      </div>
      <button
        onClick={() => onConnect(person.id)}
        className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm hover:bg-blue-700"
      >
        Connect
      </button>
    </div>
  );
}

export default NetworkCard;