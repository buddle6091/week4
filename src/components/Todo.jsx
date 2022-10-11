import "../App.css";
import { useSelector, useDispatch } from "react-redux";
import { deleteTodo, updateTodo } from "../redux/modules/todoStore";
import { useLocation, useParams, Link } from "react-router-dom";

function Todo({ todo, title, content }) {
  const findId = useSelector((state) => state.todoStore.list);
  const location = useLocation();
  const param = useParams();
  console.log(param);
  const dispatch = useDispatch();

  const deleteItem = (id) => {
    dispatch(deleteTodo(id));
  };

  const doneItem = (id) => {
    dispatch(updateTodo(id));
  };

  return (
    <div className="Todo">
      <Link to={`/detail/${todo.id}`} key={todo.id}>
        {/* useNavigation = <a> 브라우저 새로고침되어 데이터 전달을 못함 -> 초기화 되서
      이걸 <Link> 가 지켜준데 */}
        <h2>상세보기</h2>
      </Link>
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
