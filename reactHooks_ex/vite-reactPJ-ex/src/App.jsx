import { useState } from "react";
import "./App.css";

function App() {
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

  return (
    <>
      <div>test 중 / count : {count} </div>
      <button onClick={upClick}>Up</button>
      <button onClick={downClick}>Down</button>
      <button onClick={resetClick}>Reset</button>
    </>
  );
}

export default App;
