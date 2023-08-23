import React from "react"; // jsx > javascript에서 xml문법 사용 지원
import ReactDOM from "react-dom/client";
import App from "./App"; // render에 사용되는 src/App.js 불러오기
import "./index.css"; // index의 css 속성
import reportWebVitals from "./reportWebVitals"; // 웹 퍼포먼스 콘솔 출력 라이브러리

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // public/index.html에서 태그 id = root에 렌더링 됨
  // <React.StrictMode>
  <App /> //App.js 내용 반영
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
// reportWebVitals();
