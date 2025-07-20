import { createContext, useState } from "react";

// Create the context
export const MyContext = createContext();

// Create a provider component
export function MyProvider({ children }) {
  const [value, setValue] = useState();

  return (
    <MyContext.Provider value={{ value, setValue }}>
      {children}
    </MyContext.Provider>
  );
}