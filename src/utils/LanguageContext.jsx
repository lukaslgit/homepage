import { createContext, useState, useEffect } from "react";
import { getItem, setItem } from "./localStorage.js";

export const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    const value = getItem("lang");
    return value ? value : "eng";
  });

  useEffect(() => {
    setItem("lang", lang);
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
}