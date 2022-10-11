import "../App.css";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { redirectTodo } from "../redux/modules/todoStore";

function Detail() {
  const dispatch = useDispatch();
  /*  const todo = useSelector((state) => state.todoStore.void);
  console.log(todo); */
  /* useParams 로 라우터 페이지의 파라미터를 받아오는 거임. 뭐시기냐, props 기능이 절대 아님*/
  const { id } = useParams();
  /* 렌더/링 시 바로 dispatch , 의존성 배열 사용 */
  useEffect(() => {
    dispatch(redirectTodo(id));
  }, [dispatch, id]);
  const navigate = useNavigate();
  // console.log(param);
  return (
    <div className="Detail">
      <button type="button" onClick={() => navigate("/")}>
        이전으로
      </button>
      ID : {id}
      {/*   <div> {todo.title} </div>
      <div> {todo.content} </div> */}
    </div>
  );
}

export default Detail;
