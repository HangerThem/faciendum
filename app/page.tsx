"use client";

import { useTodoContext } from "@/contexts/todoAppContext";
import { useThemeContext } from "@/contexts/themeAppContext";
import TodoList from "@/components/todoList";
import PlusIcon from "@/icons/plusIcon";
import DarkIcon from "@/icons/darkIcon";
import LightIcon from "@/icons/lightIcon";
import TrashIcon from "@/icons/trashIcon";
import { categories } from "@/data/categories";
import { v4 as uuidv4 } from "uuid";
import { useRef, useState } from "react";
import Select from "react-select";
import React from "react";

const App = () => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const todoContext = useTodoContext();
  const themeContext = useThemeContext();
  const [title, setTitle] = useState<string>("");
  const [category, setCategory] = useState<Category>(categories[0]);

  const handleAddTodo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!title) return;
    const id = uuidv4();
    todoContext.addTodo({
      id,
      title,
      category: category,
      completed: false,
    });
    setTitle("");
    dialogRef.current?.close();
  };

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
      <dialog ref={dialogRef}>
        <form onSubmit={handleAddTodo}>
          <Select
            options={categories}
            styles={{
              control: (base: any, state: any) => ({
                ...base,
                border: state.isFocused ? 0 : 0,
                boxShadow: state.isFocused ? 0 : 0,
                color: "#fff",
                "&:hover": {
                  border: state.isFocused ? 0 : 0,
                },
              }),
              option: (providers: any, state: any) => ({
                ...providers,
                backgroundColor:
                  state.isSelected || state.isFocused ? "#555" : "#000",
                cursor: state.isSelected ? "default" : "pointer",
                color: "#fff",
                outline: "none",
              }),
              singleValue: (providers: any) => ({
                ...providers,
                color: "#000",
                outline: "none",
              }),
              menu: (providers: any) => ({
                ...providers,
                backgroundColor: "#000",
                color: "#fff",
                outline: "none",
              }),
            }}
            isSearchable={false}
            defaultValue={category}
            onChange={(e: any) => setCategory(e as Category)}
          />
          <input
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
          <button type="submit">Add</button>
        </form>
      </dialog>
      <TodoList />
    </div>
  );
};

export default React.memo(App);
