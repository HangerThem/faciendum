"use client";

import { createContext, useContext, useReducer } from "react";
import themeReducer, {
  ThemeActionTypes,
  ThemeState,
} from "@/reducers/themeReducer";

interface ThemeContextData {
  theme: ThemeState;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextData>({
  theme: { theme: "light" },
  toggleTheme: () => {},
});

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, themeDispatch] = useReducer(themeReducer, { theme: "light" });

  const toggleTheme = () => {
    themeDispatch({ type: ThemeActionTypes.TOGGLE_THEME });
  };

  const value = { theme, toggleTheme };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export const useThemeContext = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  if (!theme || !toggleTheme) {
    throw new Error("useThemeContext must be used within a ThemeProvider");
  }
  return { theme, toggleTheme };
};
