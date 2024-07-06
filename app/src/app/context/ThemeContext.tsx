"use client";

import {
  createContext,
  useState,
  useContext,
  ReactNode,
  useEffect,
  MouseEventHandler,
} from "react";

const ThemeContext = createContext<any | null>(null);

interface ThemeContextProps {
  isToggled: boolean;
  toggleTheme: MouseEventHandler<HTMLButtonElement> | undefined;
  theme: string;
}

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [isToggled, setIsToggled] = useState(false);
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const toggleTheme = (): void => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const themeValues: ThemeContextProps = { isToggled, toggleTheme, theme };

  return (
    <ThemeContext.Provider value={themeValues}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  return useContext(ThemeContext);
};
