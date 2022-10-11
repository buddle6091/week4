import "../App.css";
import styled from "styled-components";
import { useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import { sendTodo } from "../redux/modules/todoStore"; // action이 다수면, 해당 함수의 action 객체를 import

function TodoForm() {
  const dispatch = useDispatch();
  //const todos = useSelector((state) => state.todoData);
  //const [original, SetOriginal] = useState("");
  const refTitle = useRef();
  const refContent = useRef(); // ref or event.target usually recomended?
  const todoId = useRef(3);

  // useEffect hook으로 먼저 렌더링될때 dom을 지정하면 된다고 하기는 함..

  const sendItem = (event) => {
    const title = refTitle.current.value;
    const content = refContent.current.value;
    //console.log(original); // useState 확인 용

    event.preventDefault();
    if (title.trim() === "" || content.trim() === "") return null;

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
    <StTdForm>
      <form>
        <StIContainer>
          <h2>title</h2>
          <StInput
            type="text"
            name="title"
            ref={refTitle}
            placeholder="Type here"
          />
        </StIContainer>
        <StIContainer>
          <h2>content</h2>
          <StInput
            type="text"
            name="content"
            ref={refContent}
            placeholder="Type here"
            //onKeyUp={keyControl}
            //onKeyPress={enterItem}
            // -> this feature is no longer recommended
          />
        </StIContainer>
        <StButton
          type="button"
          className="btn glass ml-[10px]"
          onClick={sendItem}>
          Add Item
        </StButton>
      </form>
    </StTdForm>
  );
}

export default TodoForm;

const StTdForm = styled.div`
  width: 100%;
  height: 130px;
  max-width: inherit;
  min-width: inherit;
  text-align: left;
  margin-left: 0px !important;
  margin-bottom: 60px;
  background: rgba(255, 255, 255, 0.6);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border-radius: 45px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  flex-direction: row;
`;

const StIContainer = styled.div`
  width: 40%;
  height: inherit;
  margin-left: 60px;
  flex-direction: row;
  display: inline-block;
`;

const StInput = styled.input`
  margin-top: -10px;
  font-size: 20px;
  padding: 10px;
  //margin: 10px;
  background: rgba(32, 32, 32, 0.2);
  box-shadow: 0 8px 22px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(9px);
  -webkit-backdrop-filter: blur(9px);
  border: none;
  border-radius: 10px;
  //border-radius: 3px;
  ::placeholder {
    color: #50505086;
  }
  :focus {
    background: rgba(255, 255, 255, 0.9);
    box-shadow: 0 8px 22px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(9px);
    -webkit-backdrop-filter: blur(9px);
    border: none;
    border-radius: 10px;
  }
  :after {
    background: rgba(255, 255, 255, 0.9);
  }
`;

const StButton = styled.button`
  width: 100px;
  height: 40px;
  margin-right: -20px !important;
  margin-bottom: 60px;
  padding: 10px;
  font-size: 1.2rem;
  color: #ffffff;
  text-shadow: 1px 1px 0 rgba(0, 0, 0, 255);
  background-color: #8248d8e6;
  box-shadow: 0 8px 22px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(9px);
  -webkit-backdrop-filter: blur(9px);
  border: none;
  border-radius: 10px;
  justify-content: right;
  display: inline;

  :active {
    background-color: #585261e6;
  }
`;
