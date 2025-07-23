import { createContext, useContext, useState } from "react";

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [languageFa, setLanguageFa] = useState(() => {
    const stored = localStorage.getItem("LanguageFa");
    return stored ? JSON.parse(stored) : false;
  });

  const toggleLanguage = () => {
    setLanguageFa((prev) => {
      localStorage.setItem("LanguageFa", JSON.stringify(!prev));
      return !prev;
    });
  };

  return (
    <LanguageContext.Provider value={{ languageFa, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}