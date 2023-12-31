import React, { useEffect } from "react";

// const [time, setTime] = useState(0);

const Timer = (props) => {
  useEffect(() => {
    const timer = setInterval(() => {
      console.log("타이머 진행중");
    }, 1000);
    return () => {
      clearInterval(timer);
      console.log("타이머 종료");
    };
  }, []);
  return (
    <div>
      <span>타이머를 시작 / 콘솔 확인</span>
    </div>
  );
};

export default Timer;
