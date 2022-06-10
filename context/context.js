import { createContext, useState } from "react";

export const Context = createContext();

export const ContextProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(true);

  const handleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <Context.Provider value={{ darkMode, handleDarkMode }}>
      {children}
    </Context.Provider>
  );
};
