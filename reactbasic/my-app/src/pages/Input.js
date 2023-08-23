import React, { useState } from "react";

const InputTxt = () => {
  const [txtValue, setTxtValue] = useState("");

  const onChangeText = (e) => {
    setTxtValue(e.target.value);
  };

  return (
    <div>
      <input type="text" value={txtValue} onChange={onChangeText}></input>
      <br />
      <p>{txtValue}</p>
    </div>
  );
};

export default InputTxt;
