import "./App.css";
import { useSelector, useDispatch } from "react-redux";

import Header from "./components/Header";
import TodoBox from "./components/TodoBox";
import TodoForm from "./components/TodoForm";

function App() {
  const tdStore = useSelector((state) => state.list);

  console.log(tdStore);
  return (
    <div className="App">
      <Header />
      <TodoForm />
      <TodoBox />
    </div>
  );
}

export default App;
