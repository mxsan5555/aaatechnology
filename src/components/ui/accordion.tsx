import React, { useState, createContext, useContext } from "react";
import type { HTMLAttributes, ReactNode } from "react";
import { ChevronDown } from "lucide-react";

interface AccordionProps extends HTMLAttributes<HTMLDivElement> {
  type?: "single" | "multiple";
  collapsible?: boolean;
  children: ReactNode;
}

interface AccordionItemProps extends HTMLAttributes<HTMLDivElement> {
  value: string;
  children: ReactNode;
}

interface AccordionTriggerProps extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

interface AccordionContentProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

interface AccordionContextType {
  openItems: string[];
  toggleItem: (value: string) => void;
  type: "single" | "multiple";
}

const AccordionContext = createContext<AccordionContextType | null>(null);

const AccordionItemContext = createContext<{ value: string; isOpen: boolean } | null>(null);

const Accordion = ({ type = "single", collapsible = true, children, className = "", ...props }: AccordionProps) => {
  const [openItems, setOpenItems] = useState<string[]>([]);

  const toggleItem = (value: string) => {
    if (type === "single") {
      setOpenItems(openItems.includes(value) ? (collapsible ? [] : openItems) : [value]);
    } else {
      setOpenItems(
        openItems.includes(value)
          ? openItems.filter((item) => item !== value)
          : [...openItems, value]
      );
    }
  };

  return (
    <AccordionContext.Provider value={{ openItems, toggleItem, type }}>
      <div className={className} {...props}>
        {children}
      </div>
    </AccordionContext.Provider>
  );
};

const AccordionItem = ({ value, children, className = "", ...props }: AccordionItemProps) => {
  const context = useContext(AccordionContext);
  if (!context) {
    throw new Error("AccordionItem must be used within an Accordion");
  }

  const isOpen = context.openItems.includes(value);

  return (
    <AccordionItemContext.Provider value={{ value, isOpen }}>
      <div className={`border-b ${className}`} {...props}>
        {children}
      </div>
    </AccordionItemContext.Provider>
  );
};

const AccordionTrigger = ({ children, className = "", ...props }: AccordionTriggerProps) => {
  const accordionContext = useContext(AccordionContext);
  const itemContext = useContext(AccordionItemContext);

  if (!accordionContext || !itemContext) {
    throw new Error("AccordionTrigger must be used within an AccordionItem");
  }

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    accordionContext.toggleItem(itemContext.value);
    if (props.onClick) {
      props.onClick(e);
    }
  };

  return (
    <button
      className={`flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline w-full text-left ${className}`}
      {...props}
      onClick={handleClick}
    >
      {children}
      <ChevronDown className={`h-4 w-4 transition-transform duration-200 flex-shrink-0 ${itemContext.isOpen ? 'rotate-180' : ''}`} />
    </button>
  );
};

const AccordionContent = ({ children, className = "", ...props }: AccordionContentProps) => {
  const itemContext = useContext(AccordionItemContext);

  if (!itemContext) {
    throw new Error("AccordionContent must be used within an AccordionItem");
  }

  if (!itemContext.isOpen) return null;

  return (
    <div className={`pb-4 pt-0 ${className}`} {...props}>
      {children}
    </div>
  );
};

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };