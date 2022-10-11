import "../App.css";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import Header from "../components/Header";
import TodoBox from "../components/TodoBox";
import TodoForm from "../components/TodoForm";

function Home() {
  const todo = useSelector((state) => state.todoStore.list);
  const param = useParams();
  console.log(todo);
  console.log(param);
  return (
    <StHome>
      <Header />
      <TodoForm />
      <TodoBox />
    </StHome>
  );
}

export default Home;

const StHome = styled.div`
  max-width: 1200px;
  min-width: 800px;
`;
