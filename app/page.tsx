"use client";

import { useTodoContext } from "@/contexts/todoAppContext";
import { useThemeContext } from "@/contexts/themeAppContext";
import TodoList from "@/components/todoList";
import PlusIcon from "@/icons/plusIcon";
import DarkIcon from "@/icons/darkIcon";
import LightIcon from "@/icons/lightIcon";
import TrashIcon from "@/icons/trashIcon";
import { useRef } from "react";
import AddTodoDialog from "@/components/addTodoDialog";
import React from "react";

const App = () => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const todoContext = useTodoContext();
  const themeContext = useThemeContext();

  const openDialog = () => dialogRef.current?.showModal();

  return (
    <div id="root" className={themeContext.theme.theme}>
      <nav>
        <h1>Faciendum</h1>
        <div>
          <button onClick={openDialog}>
            <PlusIcon />
          </button>
          <button onClick={todoContext.removeAllTodos}>
            <TrashIcon />
          </button>
          <button onClick={themeContext.toggleTheme}>
            {themeContext.theme.theme === "dark" ? <LightIcon /> : <DarkIcon />}
          </button>
        </div>
      </nav>
      <AddTodoDialog dialogRef={dialogRef} />
      <TodoList />
    </div>
  );
};

export default React.memo(App);
