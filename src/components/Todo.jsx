import "../App.css";
import { useSelector, useDispatch } from "react-redux";
import { todoData } from "../redux/modules/todoStore";

function Todo({ id, title, content }) {
  const todos = useSelector((state) => state);
  const dispatch = useDispatch();

  const deleteItem = () => {
    dispatch(
      todoData({
        //id: todoId.current,
        title: title,
        content: content,
      })
    );
    const temp = todos.map((todo) => todo.id !== id);
    return temp;
  };

  const doneItem = () => {};

  return (
    <div className="Todo">
      <h2> {title} </h2>
      <p>{content}</p>
      <button type="button" onClick={deleteItem}>
        Delete
      </button>
      <button type="button">Done!</button>
    </div>
  );
}

export default Todo;
