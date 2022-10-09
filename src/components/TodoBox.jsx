import "../App.css";
import Todo from "./Todo";
import { useSelector } from "react-redux";

function TodoBox() {
  const { list } = useSelector((state) => state.todoStore);

  return (
    <div className="TodoBox">
      <p className="pstyle">Working.. 🔥</p>
      {list.map((todo) => {
        if (todo.isDone == 0) {
          return (
            <Todo key={todo.id} title={todo.title} content={todo.content} />
          );
        } else {
          return null;
        }
      })}
      <p className="pstyle">Done..! 🎉</p>
      {list.map((todo) => {
        if (todo.isDone == 1) {
          return (
            <Todo key={todo.id} title={todo.title} content={todo.content} />
          );
        } else {
          return null;
        }
      })}
    </div>
  );
}

export default TodoBox;
