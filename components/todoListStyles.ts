import { styled } from "styled-components";

export const TodoListContainer = styled.div`
  height: calc(100vh - 85px);
  background-color: var(--primary-color);
  padding-top: 85px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const TodoItemsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: center;
  padding: 16px;

  p {
    color: var(--secondary-color);
  }
`;
