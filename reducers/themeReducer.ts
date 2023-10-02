enum ThemeActionTypes {
  TOGGLE_THEME = "TOGGLE_THEME",
}

interface ThemeState {
  theme: "light" | "dark";
}

interface ToggleThemeAction {
  type: ThemeActionTypes.TOGGLE_THEME;
}

type ThemeAction = ToggleThemeAction;

const themeReducer = (state: ThemeState, action: ThemeAction): ThemeState => {
  switch (action.type) {
    case ThemeActionTypes.TOGGLE_THEME:
      return { theme: state.theme === "light" ? "dark" : "light" };
    default:
      return state;
  }
};

export { ThemeActionTypes };
export type { ThemeState };
export default themeReducer;
