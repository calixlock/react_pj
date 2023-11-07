import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";

// state 변화 > 렌더링 > 컴포넌트 내부 변수들 초기화

import { useEffect, useState } from "react";
// import "../App.css";
function Ex_useEffect() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  const countUp = () => {
    setCount(count + 1);
  };
  // 렌더링 될때 마다 실행
  useEffect(() => {
    console.log("렌더링 됨");
  }, [count]); // []에 들어간 컴퍼넌트가 변할때에만 렌더링됨 // count 함수 작동시 렌더링 됨
  const handleInputChange = (e) => {
    setName(e.target.value);
  };

  return (
    <>
      <div>
        <div>count : {count}</div>
        <button type="button" onClick={countUp}>
          Up
        </button>
        <input type="text" value={name} onChange={handleInputChange} />
        <div>name : {name}</div>
      </div>
    </>
  );
}

export default Ex_useEffect;
