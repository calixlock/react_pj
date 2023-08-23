import { useState } from "react";
import "./App.css";
import Sub from "./Sub";

function App() {
  // 다운로드 받은 유저의 데이터 상태
  const [users, setUsers] = useState([]);
  const download = () => {};

  // 랜더링 시점 = 상태값 변경
  return (
    <div>
      <div>
        <h1>Test page</h1>
        <button onClick={download}>Download</button>
      </div>
      <div>
        <Sub />
      </div>
    </div>
  );
}

export default App;
