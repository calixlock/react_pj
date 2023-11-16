import ExTodoListItem from "./Ex_TodoList_Item";
export default function ExTodoListBoard(props) {
  //   console.log("ExTodoListBoard : ", props.todoList);
  return (
    <div className="todo-board">
      <h1>Todo List</h1>
      {props.todoList.map((item) => (
        <ExTodoListItem item={item} />
      ))}
      {/* <ExTodoListItem /> */}
    </div>
  );
}
