// import React from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./Navbar.jsx";
import Routing from "./Routing.jsx";
import "./index.css";
ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <div>
    <div>
      <Navbar />
      <Routing />
    </div>
  </div>
  // </React.StrictMode>
);
