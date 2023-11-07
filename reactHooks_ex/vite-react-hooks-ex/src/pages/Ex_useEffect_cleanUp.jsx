import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import Timer from "../component/Timer";

// import "../App.css";
function Ex_useEffect_cleanUp() {
  const [showTimer, setShowTimer] = useState(false);

  return (
    <>
      <div>
        {showTimer && <Timer />}
        <button onClick={() => setShowTimer(!showTimer)}>Toggle Timer</button>
      </div>
    </>
  );
}

export default Ex_useEffect_cleanUp;

// toggle을 클릭하면 Timer가 실행되고 Timer의 인터벌 함수에 의해 1s마다 반복됨
