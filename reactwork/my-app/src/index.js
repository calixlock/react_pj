import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(
  // document.getElementById("root") // public 폴더의 index.html의 id가 root인 태그 찾아 실행
  document.querySelector("#root"),
);
root.render(
  // <React.StrictMode>
  <App />, // jsx 문법
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log); // js 웹 퍼포먼스 측정 라이브러리
