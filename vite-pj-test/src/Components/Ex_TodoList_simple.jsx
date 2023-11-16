import { useState } from "react";
import ExTodoListBoard from "./Ex_TodoList_board";
export default function Ex_TodoListSimple() {
  const [inputValue, setInputValue] = useState("");
  const [todoList, setTodoList] = useState([]);
  const addItem = () => {
    setTodoList([...todoList, inputValue]);
  };
  // console.log("todoList : ", todoList);
  return (
    <>
      <input
        value={inputValue}
        type="text"
        onChange={(e) => setInputValue(e.target.value)}
      ></input>
      <button onClick={addItem}>add</button>

      <ExTodoListBoard todoList={todoList} />
    </>
  );
}
