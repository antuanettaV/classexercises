import React, { createContext, useContext, useState } from "react";

const AccordionContext = createContext();

export const useAccordion = () => useContext(AccordionContext);

export const AccordionProvider = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const onChange = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <AccordionContext.Provider value={{ activeIndex, onChange }}>
      {children}
    </AccordionContext.Provider>
  );
};
