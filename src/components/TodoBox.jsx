import "../App.css";
import Todo from "./Todo";
import { useSelector } from "react-redux";

function TodoBox() {
  // 구조 객체 분해를 하여 실제 todo > list 의 주소에 접근
  const { list } = useSelector((state) => state.todoStore);

  return (
    <div className="TodoBox">
      <h1 className="pstyle">Working.. 🔥</h1>
      {list.map((todo) => {
        if (todo.isDone == 0) {
          return (
            // !!! 중앙상태관리를 쓴다고 props를 안쓴다는 생각을 버리자
            <Todo key={todo.id} title={todo.title} content={todo.content} />
          );
        } else {
          return null;
        }
      })}
      <h1 className="pstyle">Done..! 🎉</h1>
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
