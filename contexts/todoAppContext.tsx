"use client";

import {
  createContext,
  useContext,
  ReactNode,
  useReducer,
  useState,
  useEffect,
} from "react";
import todoReducer from "@/reducers/todoReducer";

interface TodoContextData {
  todos: TodoItem[];
  search: string;
  addTodo: (todo: TodoItem) => void;
  changeCompleted: (id: string, completed: boolean) => void;
  removeTodo: (id: string) => void;
  removeAllTodos: () => void;
  setSearch: (search: string) => void;
}

const TodoContext = createContext<TodoContextData>({} as TodoContextData);

export const TodoProvider = ({ children }: { children: ReactNode }) => {
  const [todos, dispatch] = useReducer(todoReducer, []);
  const [initialized, setInitialized] = useState<Boolean>(false);
  const { search } = useTodoContext();

  useEffect(() => {
    try {
      const storedTodos = JSON.parse(localStorage.getItem("todos") || "[]");
      dispatch({ type: "SET_TODOS", payload: storedTodos });
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    if (initialized) {
      saveTodos(todos);
    } else {
      setInitialized(true);
    }
  }, [todos]);

  const addTodo = (todo: TodoItem) => {
    dispatch({ type: "ADD_TODO", payload: todo });
  };

  const changeCompleted = (id: string, completed: boolean) => {
    dispatch({ type: "CHANGE_COMPLETED", payload: { id, completed } });
    saveTodos([...todos]);
  };

  const removeTodo = (id: string) => {
    dispatch({ type: "REMOVE_TODO", payload: { id } });
    saveTodos([...todos]);
  };

  const removeAllTodos = () => {
    dispatch({ type: "REMOVE_ALL_TODOS" });
    saveTodos([]);
  };

  const saveTodos = (newTodos: TodoItem[]) => {
    localStorage.setItem("todos", JSON.stringify(newTodos));
  };

  const setSearch = (search: string) => {
    dispatch({ type: "SET_SEARCH", payload: search });
  };

  const value = {
    todos,
    search,
    addTodo,
    changeCompleted,
    removeTodo,
    removeAllTodos,
    setSearch,
  };

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
};

export const useTodoContext = () => {
  const context = useContext(TodoContext);
  if (!context)
    throw new Error("useTodoContext must be used within a TodoProvider");
  return context;
};
