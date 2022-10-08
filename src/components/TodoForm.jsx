import "../App.css";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { todoData } from "../redux/modules/todoStore";

function TodoForm() {
  const dispatch = useDispatch();
  const refTitle = useRef();
  const refContent = useRef(); // ref or event.target usually recomended?
  const todoId = useRef(3);

  const sendItem = () => {
    dispatch(todoData(refTitle.current.value, refContent.current.value));
    refTitle.current.value = "";
    refContent.current.value = "";
    todoId.current += 1;
  };

  return (
    <div className="TodoForm">
      <h2>title</h2>
      <input type="text" name="title" ref={refTitle} placeholder="Type here" />
      <h2>content</h2>
      <input
        type="text"
        name="content"
        ref={refContent}
        placeholder="Type here"
      />
      <button type="button" className="btn glass ml-[10px]" onClick={sendItem}>
        Add Item
      </button>
    </div>
  );
}

export default TodoForm;
