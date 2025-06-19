import React, { useEffect } from "react";
import axios from "axios";

function App() {
  useEffect(() => {
    axios.get("http://localhost:5000/ping")
      .then(res => console.log("Backend says:", res.data))
      .catch(err => console.error("Backend not reachable:", err));
  }, []);

