import "../App.css";
import { useRef, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sendTodo } from "../redux/modules/todoStore"; // action이 다수면, 해당 함수의 action 객체를 import

function TodoForm() {
  const dispatch = useDispatch();
  //const todos = useSelector((state) => state.todoData);
  //const [original, SetOriginal] = useState("");
  const refTitle = useRef();
  const refContent = useRef(); // ref or event.target usually recomended?
  const todoId = useRef(3);

  // useEffect hook으로 먼저 렌더링될때 dom을 지정하면 된다고 하기는 함..

  const sendItem = () => {
    const title = refTitle.current.value;
    const content = refContent.current.value;
    //console.log(original); // useState 확인 용

    if (title == "" || content == "") return null;

    dispatch(
      sendTodo({
        id: todoId.current,
        title: title,
        content: content,
        isDone: false,
      })
    );
    refTitle.current.value = "";
    refContent.current.value = "";
    todoId.current += 1;
  };

  useEffect(() => {
    refContent.current.addEventListener("keypress", function (event) {
      if (event.key === "Enter") {
        sendItem();
      }
    });
  });

  /* event 객체 이용 */
  /*   const keyControl = (event) => {
    if (event.key === "Enter") {
      // first alphabet must be upper case
      console.log(event);
      sendItem();
    }
  }; */

  return (
    <div className="TodoForm">
      <form>
        <h2>title</h2>
        <input
          type="text"
          name="title"
          ref={refTitle}
          placeholder="Type here"
        />
        <h2>content</h2>
        <input
          type="text"
          name="content"
          ref={refContent}
          placeholder="Type here"
          //onKeyUp={keyControl}
          //onKeyPress={enterItem}
          // -> this feature is no longer recommended
        />
        <button
          type="button"
          className="btn glass ml-[10px]"
          onClick={sendItem}>
          Add Item
        </button>
      </form>
    </div>
  );
}

export default TodoForm;
