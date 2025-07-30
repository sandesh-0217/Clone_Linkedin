import React, { useState } from "react";
import NetworkCard from "../components/NetworkCard";

const suggestedUsers = [
  {
    id: 1,
    name: "Anjali Koirala",
    title: "Marketing Manager at Daraz",
    avatar: "https://i.pravatar.cc/150?img=31",
  },
  {
    id: 2,
    name: "Bipin Thapa",
    title: "Backend Engineer at Logpoint",
    avatar: "https://i.pravatar.cc/150?img=32",
  },
  {
    id: 3,
    name: "Roshni Bhattarai",
    title: "Data Scientist at Fusemachines",
    avatar: "https://i.pravatar.cc/150?img=33",
  },
  {
    id: 4,
    name: "Arjun Magar",
    title: "Flutter Developer at eSewa",
    avatar: "https://i.pravatar.cc/150?img=34",
  },
];

function Network() {
  const [connections, setConnections] = useState([]);

  const handleFollow = (userId) => {
    setConnections([...connections, userId]);
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-xl font-bold mb-4">People You May Know</h1>
      <div className="space-y-4">
        {suggestedUsers.map((user) => (
          <NetworkCard
            key={user.id}
            person={user}
            onFollow={handleFollow}
          />
        ))}
      </div>

      {/* Followed Info */}
      {connections.length > 0 && (
        <div className="mt-6">
          <h2 className="text-md font-semibold">Following:</h2>
          <ul className="list-disc list-inside text-sm text-gray-600">
            {connections.map((id) => {
              const user = suggestedUsers.find((u) => u.id === id);
              return <li key={id}>{user?.name}</li>;
            })}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Network;