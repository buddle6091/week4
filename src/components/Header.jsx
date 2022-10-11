import "../App.css";
import styled from "styled-components";

function Header() {
  return (
    <StHeader>
      <p>My Todo List</p>
      <p>React</p>
    </StHeader>
  );
}

export default Header;

const StHeader = styled.div`
  max-width: 1200px;
  min-width: 800px;
  height: 5rem;
  margin: 10px auto;
  padding: 10px;
  p {
    font-size: 1.4rem;
    text-align: left;
    //display: flex;
    position: absolute;
  }
  p + p {
    text-align: right;
    //display: block;
    position: relative;
  }
  background-color: #e9e9e978;
  border-radius: 10px;
`;
