// 작성된 파일 불러와 App 함수의 return 값에 jsx 문법으로 사용
import Home from "./pages/Home";
import HomeClass from "./pages/HomeClass";

function App() {
  return (
    // jsx 문법 > className > class
    <div className="App">
      <p>test 중</p>
      <hr />
      <Home />
      <hr />
      <HomeClass />;
    </div>
  );
}

export default App;
