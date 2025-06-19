import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [backendMessage, setBackendMessage] = useState("Connecting...");

  useEffect(() => {
    axios.get("https://network-automation-backend-production.up.railway.app")  // <-- Replace with deployed backend URL
      .then(res => {
        console.log("Backend says:", res.data);
        setBackendMessage(res.data.message);
      })
      .catch(err => {
        console.error("Backend not reachable:", err);
        setBackendMessage("❌ Backend not reachable");
      });
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white shadow p-6 rounded">
        <h1 className="text-2xl font-semibold mb-4">🔌 Frontend Connected</h1>
        <p className="text-lg">{backendMessage}</p>
      </div>
    </div>
  );
}

export default App;
