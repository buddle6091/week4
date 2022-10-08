import "../App.css";
import { useSelector } from "react-redux";

function Todo() {
  const data = useSelector((state) => state.list);

  return (
    <div className="Todo">
      <h2> {data.title} </h2>
      <p>{data.content}</p>
    </div>
  );
}

export default Todo;
