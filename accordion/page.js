import React from "react";
import Accordion from "./accordion/Accordion";
import { AccordionProvider } from "./accordion/AccordionContext";
import { LocalizationProvider } from "./accordion/LocalizationContext";

const Page = () => {
  return (
    <LocalizationProvider>
      <AccordionProvider>
        <div className="p-4">
          <h1 className="text-2xl font-bold mb-4">Accordion with Localization</h1>
          <Accordion />
        </div>
      </AccordionProvider>
    </LocalizationProvider>
  );
};

export default Page;
