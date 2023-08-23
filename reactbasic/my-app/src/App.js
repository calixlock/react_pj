import React from "react"; // 작성된 파일 불러와 App 함수의 return 값에 jsx 문법으로 사용

import { Link, Route, Routes } from "react-router-dom"; // route 관련 라이브 러리
// page 불러오기
import About from "./pages/About";
import Counter from "./pages/Counter";
import Home from "./pages/Home";
import Input from "./pages/Input";
import Input2 from "./pages/Input2";
import List from "./pages/List";

function App() {
  return (
    // jsx 문법 > className > class
    <div className="App">
      <h1>Testing</h1>
      <hr />
      <nav>
        {/* <a href="/">Home</a> 동일 */}
        {/* Link는 a태그로 변환 적용 */}
        <Link to="/">Home</Link> | <Link to="/about">About</Link> |{" "}
        <Link to="/Counter">Counter</Link> | <Link to="/Input">Input</Link> |{" "}
        <Link to="/Input2">Input2</Link> | <Link to="/List">List</Link>
      </nav>
      <hr />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Counter" element={<Counter />} />
        <Route path="/Input" element={<Input />} />
        <Route path="/Input2" element={<Input2 />} />
        <Route path="/List" element={<List />} />
      </Routes>
      <hr />
    </div>
  );
}

export default App;
