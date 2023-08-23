import React, { useState } from "react";

const InputTxt2 = () => {
  // 초기 생성자라고 보면됨
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    tel: "",
  });

  const onChangeText = (e) => {
    const value = e.target.value;
    const id = e.target.id;

    // inputs[id] = value
    setInputs({
      ...inputs, // 깊은 복사로 새로 만들어낸다.
      [id]: value,
    });
  };
  // const {name, email, tel} = inputs;
  // 분해 inputs.name > name / inputs.email > email / inputs.tel > tel
  return (
    <div>
      <div>
        <label>이름</label>
        <input
          type="text"
          id="name"
          value={inputs.name}
          onChange={onChangeText}
        ></input>
        <br />
      </div>
      <div>
        <label>이메일</label>
        <input
          type="text"
          id="email"
          value={inputs.email}
          onChange={onChangeText}
        ></input>
        <br />
      </div>
      <div>
        <label>전화</label>
        <input
          type="text"
          id="tel"
          value={inputs.tel}
          onChange={onChangeText}
        ></input>
        <br />
      </div>
      <div>
        <p>name : {inputs.name}</p>
        <p>email : {inputs.email}</p>
        <p>tel : {inputs.tel}</p>
      </div>
    </div>
  );
};

export default InputTxt2;
