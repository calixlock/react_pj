// import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  // strictMode 한번더 컴파일 되어 확인되는 작업(?)
  // <React.StrictMode>
  <>
    <App />
  </>
  // </React.StrictMode>
);
