import "../App.css";
import { useSelector, useDispatch } from "react-redux";
import { deleteTodo, updateTodo } from "../redux/modules/todoStore";
//import { useNavigate } from "react-router-dom";

function Todo({ todo, title, content }) {
  //const navigate = useNavigate();
  //const list = useSelector((state) => state.todoStore.list);
  const dispatch = useDispatch();

  const deleteItem = (id) => {
    dispatch(deleteTodo(id));
    /*     const temp = list.map((todo) => todo.id !== id);
    return temp; */
  };

  const doneItem = (id) => {
    dispatch(updateTodo(id));
  };

  return (
    <div className="Todo">
      <h1>상세보기</h1>
      <h2> {title} </h2>
      <p>{content}</p>
      {/* 즉시 실행 함수를 썬 이유는 Clouser 개념*/}
      <button type="button" onClick={() => deleteItem(todo.id)}>
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
