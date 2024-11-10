import React, { createContext, useContext, useState } from "react";

const LocalizationContext = createContext();

export const useLocalization = () => useContext(LocalizationContext);

export const LocalizationProvider = ({ children }) => {
  const [language, setLanguage] = useState("en");

  const changeLanguage = (lang) => {
    setLanguage(lang);
  };

  const translations = {
    en: { hello: "Hello", bye: "Goodbye" },
    da: { hello: "Hej", bye: "Farvel" },
  };

  return (
    <LocalizationContext.Provider value={{ language, changeLanguage, translations }}>
      {children}
    </LocalizationContext.Provider>
  );
};
