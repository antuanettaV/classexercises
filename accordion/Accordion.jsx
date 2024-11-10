import React from "react";
import { useAccordion } from "./AccordionContext";
import { useLocalization } from "./LocalizationContext";
import clsx from "clsx";

const Panel = ({ title, children, index }) => {
  const { activeIndex, onChange } = useAccordion();
  const { language, translations } = useLocalization();

  const isOpen = activeIndex === index;

  return (
    <div className="p-2 border-t border-t-black flex flex-col justify-center items-center">
      <h2 className="text-xl font-bold">{translations[language][title]}</h2>
      <div className={clsx({ hidden: !isOpen })}>{children}</div>
      {!isOpen && (
        <button
          className="border border-blue-500 rounded text-blue-500"
          onClick={() => onChange(index)}
        >
          Show more
        </button>
      )}
    </div>
  );
};

const Accordion = () => {
  return (
    <div className="flex flex-col border border-black rounded">
      <Panel title="hello" index={1}>
        Content 1
      </Panel>
      <Panel title="bye" index={2}>
        Content 2
      </Panel>
    </div>
  );
};

export default Accordion;
