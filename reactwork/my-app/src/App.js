import { useState } from "react";
import "./App.css";

function App() {
  // let num = 1; // 상태값 아닌 상태
  const [num, setNum] = useState(1); // react의 hooks 라이브러리 > 상태값 사용
  const add = () => {
    setNum(num + 1); // react num 값 변경 요청
    console.log(`add: ${num}`);
  };

  // 랜더링 시점 = 상태값 변경
  return (
    <div>
      <div>
        <h1>숫자 : {num} </h1>
        <button onClick={add}>+</button>
      </div>
    </div>
  );
}

export default App;
