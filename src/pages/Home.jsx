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
    <>
      <Header />
      <StHome>
        <TodoForm />
        <TodoBox />
      </StHome>
    </>
  );
}

export default Home;

const StHome = styled.div`
  max-width: 1200px;
  min-width: 800px;
  max-height: 100vh;
  margin: 20px auto;
  padding: 10px;
  background: rgba(255, 255, 255, 0.35);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border-radius: 45px;
  border: 1px solid rgba(255, 255, 255, 0.28);
`;
