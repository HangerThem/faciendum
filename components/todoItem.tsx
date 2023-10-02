"use client";

import { useTodoContext } from "@/contexts/todoAppContext";
import {
  TodoItemContainer,
  CategoryContainer,
  DeleteButton,
} from "./todoItemStyles";
import TrashIcon from "@/icons/trashIcon";

interface TodoItemProps {
  todo: TodoItem;
}

function TodoItem({ todo }: TodoItemProps) {
  const { changeCompleted, removeTodo } = useTodoContext();

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    changeCompleted(todo.id, e.target.checked);
  };

  return (
    <TodoItemContainer category={todo.category.value}>
      <CategoryContainer className="category">
        {todo.category.label}
      </CategoryContainer>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={handleCheckboxChange}
        id={todo.id}
      />
      <label htmlFor={todo.id}>{todo.title}</label>
      <DeleteButton onClick={() => removeTodo?.(todo.id)}>
        <TrashIcon />
      </DeleteButton>
    </TodoItemContainer>
  );
}

export default TodoItem;
