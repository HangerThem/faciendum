import { styled } from "styled-components";

export const AddTodoButton = styled.button`
  background-color: #4f00d9;
  font-family: "K2D", sans-serif;
  color: #fff;
  padding: 0.625rem 1.25rem;
  border: 1px solid #4f00d9;
  border-radius: 0.3125em;
  cursor: pointer;
  font-size: 1rem;
  font-weight: bold;
  transition: all 0.125s ease-in-out;

  &:hover {
    background-color: #7424ff;
  }

  &:disabled {
    background-color: #bbb;
    color: #fff;
    border: 1px solid #bbb;
    cursor: default;
  }
`;
