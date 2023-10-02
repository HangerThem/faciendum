import React, { useState } from "react";
import { categories } from "@/data/categories";
import { v4 as uuidv4 } from "uuid";
import Select from "react-select";
import { useTodoContext } from "@/contexts/todoAppContext";
import { AddTodoButton } from "./addTodoDialogStyles";

interface AddTodoDialogProps {
  dialogRef: React.RefObject<HTMLDialogElement>;
}

function AddTodoDialog({ dialogRef }: AddTodoDialogProps) {
  const [title, setTitle] = useState<string>("");
  const [category, setCategory] = useState<Category>(categories[0]);
  const todoContext = useTodoContext();

  const handleAddTodo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!title) return;
    const id = uuidv4();
    todoContext.addTodo({
      id,
      title,
      category: category,
      completed: false,
      hidden: false,
    });
    setTitle("");
    dialogRef.current?.close();
  };

  return (
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
        <AddTodoButton type="submit" disabled={title.length <= 0}>
          Add
        </AddTodoButton>
      </form>
    </dialog>
  );
}
export default AddTodoDialog;
