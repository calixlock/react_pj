import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

// Ref 변화 > 렌더링 x > 변수값 유지됨
// state 변화 > 렌더링 o > ref에 저장된 값 변화 x 유지됨

// import "../App.css";
function Ex_useRef() {
  const [showTimer, setShowTimer] = useState(false);

  return (
    <>
      <div></div>
    </>
  );
}

export default Ex_useRef;

// toggle을 클릭하면 Timer가 실행되고 Timer의 인터벌 함수에 의해 1s마다 반복됨
