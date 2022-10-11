import "../App.css";
import styled from "styled-components";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { redirectTodo } from "../redux/modules/todoStore";

function Detail() {
  const dispatch = useDispatch();
  const todo = useSelector((state) => state.todoStore.void);
  console.log(todo);
  /* useParams 로 라우터 페이지의 파라미터를 받아오는 거임. 뭐시기냐, props 기능이 절대 아님
  주소에 들어가는 데이터는 모두 STRING*/
  const { id } = useParams();
  /* 렌더링 시 바로 dispatch , 의존성 배열 사용 */
  useEffect(() => {
    /* 문자열로 만들어지기 때문에 정수화를 해야됨 */
    dispatch(redirectTodo(+id));
  }, [dispatch, id]);
  const navigate = useNavigate();
  // console.log(param);
  return (
    <StDetail>
      <BtnBack type="button" onClick={() => navigate("/")}>
        이전으로
      </BtnBack>
      <StId>ID : {id}</StId>
      <StTitle> {todo.title} </StTitle>
      <StContent> {todo.content} </StContent>
    </StDetail>
  );
}

export default Detail;

const StDetail = styled.div`
  max-width: 1200px;
  min-width: 800px;
  height: 600px;
  margin: 10vh auto;
  padding: 10px;
  background: rgba(255, 255, 255, 0.767);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border-radius: 45px;
  border: 1px solid rgba(255, 255, 255, 0.28);
`;

const BtnBack = styled.button`
  width: 100px;
  height: 40px;
  margin-left: 1000px;
  margin-top: 20px;
  font-size: 1.2rem;
  color: #ffffff;
  text-shadow: 1px 1px 0 rgba(0, 0, 0, 255);
  background-color: #7f44d8c1;
  box-shadow: 0 8px 22px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(9px);
  -webkit-backdrop-filter: blur(9px);
  border: none;
  border-radius: 10px;
  justify-content: right;
  display: inline;

  :active {
    background-color: #6b2dc98d;
  }
`;

const StId = styled.h2`
  text-align: center;
  font-size: 1.5rem;
  color: #313131;
`;

const StTitle = styled(StId)`
  text-align: center;
  font-size: 1.5rem;
  color: #313131;
`;

const StContent = styled(StId)`
  text-align: center;
  font-size: 1.5rem;
  color: #313131;
`;
