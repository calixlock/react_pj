// import React from "react";
import "index.css";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  // strictMode 한번더 컴파일 되어 확인되는 작업(?)
  // <React.StrictMode>
  <>
    <App />
  </>
  // </React.StrictMode>
);
