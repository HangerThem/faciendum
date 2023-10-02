"use client";

import { useTodoContext } from "@/contexts/todoAppContext";
import { TodoListContainer, TodoItemsContainer } from "./todoListStyles";
import TodoItem from "@/components/todoItem";

const TodoList: React.FC = () => {
  const { todos } = useTodoContext();

  return (
    <TodoListContainer>
      <TodoItemsContainer>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
        {todos.length === 0 && <p>No todos! Hurray! 🎉</p>}
      </TodoItemsContainer>
    </TodoListContainer>
  );
};

export default TodoList;
