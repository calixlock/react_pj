import React from "react";
import Box from "../Component/Box";
import "../style/box.css";

export default function Test() {
  return (
    <main>
      <Box name="네이버" num="1" site="http://naver.com" />
      <Box name="다음" num="2" />
      <Box name="구글" num="3" />
    </main>
  );
}
