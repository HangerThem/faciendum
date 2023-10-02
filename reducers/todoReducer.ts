interface TodoAction {
  type: string;
  payload?: any;
}

const todoReducer = (state: TodoItem[], action: TodoAction) => {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, action.payload];
    case "CHANGE_COMPLETED":
      return state.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, completed: action.payload.completed }
          : todo
      );
    case "REMOVE_TODO":
      return state.filter((todo) => todo.id !== action.payload.id);
    case "REMOVE_ALL_TODOS":
      return [];
    case "SET_TODOS":
      return action.payload;
    default:
      return state;
  }
};

export default todoReducer;
