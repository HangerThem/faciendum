import { styled } from "styled-components";

interface TodoItemContainerProps {
  category?: "personal" | "work" | "hobby";
}

export const TodoItemContainer = styled.div<TodoItemContainerProps>`
  background: #fff;
  border-radius: 8px;
  margin-top: 8px;
  padding: 16px;
  position: relative;
  width: 250px;
  height: fit-content;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  display: flex;
  justify-content: space-between;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 10px;
    background: ${({ category }) =>
      category === "personal"
        ? "#ff8080"
        : category === "work"
        ? "#80b3ff"
        : "#80ff80"};
  }

  [type="checkbox"] {
    display: none;
  }

  label {
    cursor: pointer;
    display: block;
    margin-top: 15px;
    font-size: 18px;
    max-width: 80%;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    font-family: "Open Sans", sans-serif;
  }

  [type="checkbox"]:checked + label {
    text-decoration: line-through;
  }

  button {
    border: none;
    cursor: pointer;
    background-color: transparent;
    color: #f66;
    transition: color 0.125s ease-in;
  }

  button:hover {
    color: #f00;
  }
`;

export const CategoryContainer = styled.div`
  position: absolute;
  top: 5px;
  left: 15px;
  font-size: 12px;
  text-transform: uppercase;
  font-weight: bold;
  color: #555;
`;

export const DeleteButton = styled.button`
  background-color: transparent !important;
`;
