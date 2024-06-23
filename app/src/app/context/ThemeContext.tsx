// src/ToggleContext.tsx
"use client"; // This directive ensures that the file is treated as a client component

import React, {
  createContext,
  useState,
  useContext,
  ReactNode,
  useEffect,
} from "react";

// Create a context
const ThemeContext = createContext<any | null>(null);

// Create a provider component
export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [isToggled, setIsToggled] = useState(false);
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const toggle = () => {
    setIsToggled((prevState) => !prevState);
  };

  return (
    <ThemeContext.Provider value={{ isToggled, toggle, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook to use the ToggleContext
export const useTheme = () => {
  return useContext(ThemeContext);
};
