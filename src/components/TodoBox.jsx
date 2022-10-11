import "../App.css";
import styled from "styled-components";
import Todo from "./Todo";
import { useSelector } from "react-redux";

function TodoBox() {
  // 구조 객체 분해를 하여 실제 todo > list 의 주소에 접근
  const { list } = useSelector((state) => state.todoStore);

  return (
    <form>
      <StH1>Working.. 🔥</StH1>
      <StTodoBox>
        {list.map((todo) => {
          if (todo.isDone == 0) {
            return (
              // !!! 중앙상태관리를 쓴다고 props를 안쓴다는 생각을 버리자
              <Todo
                key={todo.id}
                title={todo.title}
                content={todo.content}
                todo={todo}
              />
            );
          } else {
            return null;
          }
        })}
      </StTodoBox>
      <StHr />
      <StH1>Done..! 🎉</StH1>
      <StTodoBox>
        {list.map((todo) => {
          if (todo.isDone == 1) {
            return (
              <Todo
                key={todo.id}
                title={todo.title}
                content={todo.content}
                todo={todo}
              />
            );
          } else {
            return null;
          }
        })}
      </StTodoBox>
    </form>
  );
}

export default TodoBox;

const StTodoBox = styled.div`
  height: 240px;
  background-color: transparent;
  flex-direction: row;
  display: flex;
`;

const StH1 = styled.h1`
  font-size: 1.5rem;
  color: #ffffff;
  text-shadow: 2px 2px 2px black;
  text-align: left;
  margin-left: 20px;
`;

const StHr = styled.hr`
  width: 90vw;
  height: 2px;
  max-width: 1150px;
  min-width: 800px;
  text-align: left;
  top: 420px;
  margin-left: 15px;
  margin-top: 60px;
  position: absolute;
  background-color: #1177eb2f;
`;
