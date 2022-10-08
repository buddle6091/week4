import "../App.css";
import Todo from "./Todo";
import { useSelector } from "react-redux";

function TodoBox() {
  const data = useSelector((state) => state.list);

  return (
    <div className="TodoBox">
      {data.map((x) => {
        <Todo key={x.id} />;
      })}
    </div>
  );
}

export default TodoBox;
