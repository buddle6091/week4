import "../App.css";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { deleteTodo, updateTodo } from "../redux/modules/todoStore";
import { useLocation, useParams, Link } from "react-router-dom";

function Todo({ todo, title, content }) {
  //const findId = useSelector((state) => state.todoStore.list);
  //const location = useLocation();
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
    <StTodo>
      <StLink to={`/detail/${todo.id}`} key={todo.id}>
        {/* useNavigation = <a> 브라우저 새로고침되어 데이터 전달을 못함 -> 초기화 되서
      이걸 <Link> 가 지켜준데 */}
        <p>상세보기</p>
      </StLink>
      <StTitle> {title} </StTitle>
      <p>{content}</p>
      {/* 즉시 실행 함수를 썬 이유는 Clouser 개념*/}
      <StButton type="button" onClick={() => deleteItem(todo.id)}>
        Delete
      </StButton>
      <StButton2 type="button" onClick={() => doneItem(todo.id)}>
        {/* 나는 컴포넌트로 나눴기에 props로 부모 컴포넌트의 map의 current value인 'todo'를 받아와야 한다. */}
        {todo.isDone ? "Cancle" : "Done!"}
      </StButton2>
    </StTodo>
  );
}

export default Todo;

const StTodo = styled.div`
  width: 220px;
  height: 200px;
  text-align: center;
  margin-top: 15px;
  margin-left: 10px;
  background: rgba(255, 255, 255, 0.75);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  flex-direction: row;
`;

const StLink = styled(Link)`
  font-size: 1rem;
  font-weight: bold;
  text-decoration: none;
  color: #5102acd3;
  text-align: right;
  left: -30px;
  display: absolute;
`;

const StTitle = styled.h2`
  font-size: 1.5rem;
  color: #313131;
  text-align: center;
`;

const StContent = styled.p`
  font-size: 1.5rem;
  color: #313131;
  text-align: center;
`;

const StButton = styled.button`
  width: 70px;
  height: 30px;
  margin-right: 10px;
  margin-bottom: 60px;
  padding: 8px;
  font-size: 0.8rem;
  color: #ffffff;
  text-shadow: 1px 1px 0 rgba(0, 0, 0, 255);
  background-color: #e73737;
  box-shadow: 0 4px 9px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(9px);
  -webkit-backdrop-filter: blur(9px);
  border: none;
  border-radius: 7px;
  //justify-content: left;
  display: inline;

  :active {
    box-shadow: inset 2px 2px 2px 2px #2424243e;
  }
`;

const StButton2 = styled(StButton)`
  margin-right: 5px !important;
  background-color: #0bc041;
`;
