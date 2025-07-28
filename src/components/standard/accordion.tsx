"use client";
import { MinusIcon, PlusIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import * as motion from "motion/react-client";
import clsx from "clsx";

export interface AccordionItem {
  title: string;
  content: string;
}

interface Props {
  items: AccordionItem[];
  className?: string;
}
export default function Accordion({ items, className }: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    // close everything if clicked on same item
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={clsx("flex flex-col gap-4 w-full", className)}>
      {items.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <div
            key={index}
            className="p-4 rounded-md bg-white hover:scale-[1.02] transition-transform cursor-pointer"
            onClick={() => toggleAccordion(index)}
          >
            <div className="flex justify-between w-full mb-1 items-center">
              <h3 className="font-semibold">{item.title}</h3>
              <div>
                {isOpen ? (
                  <MinusIcon className="size-5" />
                ) : (
                  <PlusIcon className="size-5" />
                )}
              </div>
            </div>

            <motion.div
              initial={{ display: "none" }}
              animate={{
                height: isOpen ? "auto" : 0,
                opacity: isOpen ? 1 : 0,
                display: isOpen ? "block" : "none",
              }}
            >
              <div className="text-sm">{item.content}</div>
            </motion.div>
          </div>
        );
      })}
    </div>
  );
}
