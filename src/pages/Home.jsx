import "../App.css";
import Router from "../router/Router";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import Header from "../components/Header";
import TodoBox from "../components/TodoBox";
import TodoForm from "../components/TodoForm";

function Home() {
  return (
    <div className="Home">
      <Router />
      <Header />
      <TodoForm />
      <TodoBox />
    </div>
  );
}

export default Home;
