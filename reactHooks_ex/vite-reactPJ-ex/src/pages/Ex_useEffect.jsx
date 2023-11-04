import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { useState } from "react";
// import "../App.css";
function Ex_useEffect() {
  const [count, setCount] = useState(0);

  const countUp = () => {
    setCount(count + 1);
  };

  return (
    <>
      <div>
        <div>count : {count}</div>
        <button type="button" onClick={countUp}>
          Up
        </button>
      </div>
    </>
  );
}

export default Ex_useEffect;
