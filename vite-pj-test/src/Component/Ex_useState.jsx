import { useState } from "react";

export default function Ex_useState() {
  let startNum = 0; // update시 계속 0로
  const [count, setCount] = useState(startNum);
  let tCount = count;
  const countUp = () => {
    tCount += 1;
    setCount(count + 1);
    startNum += 1;
    // useState 함수가 끝나고 반영되는 비동기 형태
    console.log(`startNum: ${startNum} tCount: ${tCount}, setCount: ${count}`);
  };
  return (
    <>
      <div>App Page</div>
      <div>startNum : {startNum}</div>
      <div>Count : {tCount}</div>
      <div>setCount : {count}</div>
      <button onClick={countUp}>Up</button>
    </>
  );
}
