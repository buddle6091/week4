import "../App.css";
import { useRef, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { todoData } from "../redux/modules/todoStore";

function TodoForm() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todoData);
  const [original, SetOriginal] = useState("");
  const refTitle = useRef();
  const refContent = useRef(); // ref or event.target usually recomended?
  const todoId = useRef(3);

  // useEffect hook으로 먼저 렌더링될때 dom을 지정하면 된다고 하기는 함..

  /*   useEffect(() => {
    refContent.addEventListener("keypress", function (event) {
      if (event.key === "Enter") {
        sendItem();
      }
    });
    return () => {
      refContent.removeEventListener("keypress", function (event) {
        if (event.key === "Enter") {
          sendItem();
        }
      });
    };
  });
 */
  const sendItem = () => {
    const title = refTitle.current.value;
    const content = refContent.current.value;
    console.log(original); // useState 확인 용

    if (title == "" || content == "") return null;

    dispatch(
      todoData({
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

  const keyControl = (event) => {
    if (event.key === "Enter") {
      // first alphabet must be upper case
      console.log(event);
      sendItem();
    }
  };

  /*   const keyss = (event) => {
    event.value.addEventListener("keypress", function (event) {
      if (event.key === "enter") {
        sendItem();
      }
    }); // 이거 안됨...
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
          onKeyUp={keyControl}
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
