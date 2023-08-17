import "./App.css";

// 0. react > engine -> data변경 감지 > ui 대신 그려줌
// 1. 실행과정 (index.html만 사용 > page 바꾼다? > body의 내용 바꾼다 > SPA(single page application))
// 2. jsx 문법 > js에서 html 문법 사용하기 위해서

// (1) return시 하나의 dom만 리턴 가능하다
// (2) 변수 선언 > let / const 로만 > 파일 저장 x
// (3) if 사용 불가 > 삼항 연산 가능
// (4) 조건부 렌더링 > 조건이 참일 때 만 표현됨
// (5) css 디자인 /
// (5-1) 내부에 적기
// (5-2) 외부 파일에 적기 > App.css파일 활용
// (5-3) 라이브러리 사용(bootstrap / component-styled)
// (6) 반복

let a = 12;
const b = 13;

function App() {
  let c; // 선언만 하면 undefined > 값이 없는것 null
  console.log("c = ", c);

  // 5-1 내부에 적는 방법 > 비추천
  const mystyle = {
    color: "red",
  };
  let lit = [1, 2, 3];

  return (
    <div>
      {/* (1) */}
      <h1>h1</h1>
      <hr />
      <div style={mystyle}>안녕</div>
      <hr />
      {/* (2) */}
      <div className="box-style">
        a = {a} , a type = {typeof a}
        <br />a = {b} , b type = {typeof a}
      </div>
      <hr />
      {/* (3) 삼항연산 */}
      <div>삼항연산 a = b ? {a === b ? "같다" : "틀리다"}</div>
      {/* (4) 조건연산/참 */}
      <div>조건부 렌더링 {a === b && "a와 b는 같다"}</div>
      {/* (5) 반복 */}
      <div>
        <div>
          {lit.map((n) => (
            <h2>{n}</h2>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
