import "../App.css";
import { useSelector, useDispatch } from "react-redux";
import { deleteTodo, updateTodo } from "../redux/modules/todoStore";

function Todo({ todo, title, content }) {
  const list = useSelector((state) => state.todoStore.list);
  const dispatch = useDispatch();

  const deleteItem = () => {
    dispatch(
      deleteTodo({
        //id: todoId.current,
        title: title,
        content: content,
      })
    );
    /*     const temp = list.map((todo) => todo.id !== id);
    return temp; */
  };

  const doneItem = (id) => {
    dispatch(updateTodo(id));
  };

  return (
    <div className="Todo">
      <h2> {title} </h2>
      <p>{content}</p>
      <button type="button" onClick={deleteItem}>
        Delete
      </button>
      <button type="button" onClick={() => doneItem(todo.id)}>
        {/* 나는 컴포넌트로 나눴기에 props로 부모 컴포넌트의 map의 current value인 'todo'를 받아와야 한다. */}
        {todo.isDone ? "Cancle" : "Done!"}
      </button>
    </div>
  );
}

export default Todo;
