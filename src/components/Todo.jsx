import "../App.css";
import { useSelector } from "react-redux";

function Todo({ id, title, content }) {
  //const data = useSelector((state) => state);

  return (
    <div className="Todo">
      <h2> {title} </h2>
      <p>{content}</p>
    </div>
  );
}

export default Todo;
