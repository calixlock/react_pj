// 리엑트 라우트 기능 넣어 네브바 만들어 구현 필요
// useState 에러 구현 필요

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { useState } from "react";
import "../App.css";

//callback 적용 >> 불필요한 불러오기(=같은 작업 반복) 방지
const heavyWork = () => {
  console.log("무거운 작업 수행");
  return ["홍길동", "라인"];
};

function Ex_useState() {
  // count : 함수 및 설정
  const [count, setCount] = useState(0);
  const upClick = () => {
    setCount(count + 1);
  };
  const downClick = () => {
    setCount(count - 1);
  };
  const resetClick = () => {
    setCount(0);
  };

  // upload :
  const [names, setNames] = useState(() => {
    return heavyWork();
  });
  const [input, setInput] = useState("");

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };
  // callback 형태 적용
  const handleUpload = () => {
    setNames((prevState) => {
      return [...prevState, input];
    });
  };
  //   const handleUpload2 = () => {
  //     setNames([...names, input]);
  //   };
  return (
    <>
      {/* count 관련 */}
      <div>test 중 / count : {count} </div>
      <button onClick={upClick}>Up</button>
      <button onClick={downClick}>Down</button>
      <button onClick={resetClick}>Reset</button>
      {/* upload 관련 */}
      <div>test 중 / upload </div>
      <input type="text" value={input} onChange={handleInputChange} />
      <button onClick={handleUpload}>Upload</button>
      <div>
        {names.map((name, idx) => {
          return (
            <p key={idx}>
              {idx} : {name}
            </p>
          );
        })}
      </div>
    </>
  );
}

export default Ex_useState;
