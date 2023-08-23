import { useState } from "react";
import "./App.css";
import Sub from "./Sub";

function App() {
  // 다운로드 받은 유저의 데이터 상태

  console.log("App실행"); // App 실행 확인 로그
  let sample = [
    {
      id: 1,
      name: "Hong",
    },
    {
      id: 2,
      name: "Kim",
    },
    {
      id: 3,
      name: "Ahn",
    },
  ];
  console.log(sample.length);
  const [users, setUsers] = useState([...sample]); // reference가 변경되어야 동작됨
  let [num, setNum] = useState(sample.length + 1);
  const download = () => {
    // setUsers([...users, ...sample]); // 같은 내용 추가됨
    // setUsers(sample); // 초기 data와 reference가 같아 동작x
    // setUsers([...sample]); //reference가 달라 동작o /

    // 데이터 추가
    /// #1 concat 방식
    // const newUsers = sample.concat({ id: 4, name: "Song" });
    // setUsers(newUsers);

    /// #2 spread 방식
    setNum(num + 1);
    setUsers([...users, { id: num, name: "Song" }]);
    console.log(sample);
  };

  // 랜더링 시점 = 상태값 변경
  return (
    <div>
      <div>
        <h1>Test page</h1>
        <button onClick={download}>Download</button>
        <div>
          {users.map((u) => (
            <p>
              {u.id} : {u.name}
            </p>
          ))}
        </div>
      </div>
      <div>
        <Sub />
      </div>
    </div>
  );
}

export default App;
