import React from "react"; // 작성된 파일 불러와 App 함수의 return 값에 jsx 문법으로 사용

import { Link, Route, Routes } from "react-router-dom"; // route 관련 라이브 러리
import About from "./pages/About"; // page 불러오기
import Home from "./pages/Home";

function App() {
  return (
    // jsx 문법 > className > class
    <div className="App">
      <h1>Testing</h1>
      <hr />
      <nav>
        {/* <a href="/">Home</a> 동일 */}
        {/* Link는 a태그로 변환 적용 */}
        <Link to="/">Home</Link>&nbsp;&nbsp;&nbsp;<Link to="/about">About</Link>
      </nav>
      <hr />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <hr />
    </div>
  );
}

export default App;
