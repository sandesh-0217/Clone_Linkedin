import React, { useState } from "react";
import NetworkCard from "../components/NetworkCard";
import RequestCard from "../components/RequestCard";
import ConnectionCard from "../components/ConnectionCard";
import Navbar from "../components/Navbar";

const peopleYouMayKnow = [
  { id: 1, name: "Anish Shrestha", title: "Backend Developer", avatar: "https://i.pravatar.cc/150?img=41" },
  { id: 2, name: "Nisha Lama", title: "UI/UX Designer", avatar: "https://i.pravatar.cc/150?img=42" },
  { id: 3, name: "Samir KC", title: "AI Engineer", avatar: "https://i.pravatar.cc/150?img=43" },
];

const connectionRequests = [
  { id: 4, name: "Kriti Rawal", title: "QA Engineer", avatar: "https://i.pravatar.cc/150?img=44" },
  { id: 5, name: "Suresh Karki", title: "React Developer", avatar: "https://i.pravatar.cc/150?img=45" },
];

function Network() {
  const [suggestions, setSuggestions] = useState(peopleYouMayKnow);
  const [requests, setRequests] = useState(connectionRequests);
  const [connections, setConnections] = useState([]);

  const handleConnect = (id) => {
    const user = suggestions.find((u) => u.id === id);
    if (user) {
      setConnections([...connections, user]);
      setSuggestions(suggestions.filter((u) => u.id !== id));
    }
  };

  const handleAccept = (id) => {
    const user = requests.find((u) => u.id === id);
    if (user) {
      setConnections([...connections, user]);
      setRequests(requests.filter((u) => u.id !== id));
    }
  };

  const handleIgnore = (id) => {
    setRequests(requests.filter((u) => u.id !== id));
  };

  return (
    
    <div className="p-6 max-w-4xl mx-auto space-y-8">
      {/* Section 1: Connection Requests */}
      <div>
        <h2 className="text-xl font-semibold mb-3">Connection Requests</h2>
        <div className="space-y-3">
          {requests.length > 0 ? (
            requests.map((user) => (
              <RequestCard
                key={user.id}
                user={user}
                onAccept={handleAccept}
                onIgnore={handleIgnore}
              />
            ))
          ) : (
            <p className="text-sm text-gray-500">No new requests</p>
          )}
        </div>
      </div>

      {/* Section 2: People You May Know */}
      <div>
        <h2 className="text-xl font-semibold mb-3">People You May Know</h2>
        <div className="space-y-3">
          {suggestions.length > 0 ? (
            suggestions.map((person) => (
              <NetworkCard
                key={person.id}
                person={person}
                onConnect={handleConnect}
              />
            ))
          ) : (
            <p className="text-sm text-gray-500">No more suggestions</p>
          )}
        </div>
      </div>

      {/* Section 3: My Connections */}
      <div>
        <h2 className="text-xl font-semibold mb-3">Your Connections</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {connections.length > 0 ? (
            connections.map((user) => (
              <ConnectionCard key={user.id} user={user} />
            ))
          ) : (
            <p className="text-sm text-gray-500">No connections yet</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Network;