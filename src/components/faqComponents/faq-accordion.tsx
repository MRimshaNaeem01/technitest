"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

export type FaqItem = {
  question: string;
  answer: string;
};

type FaqAccordionProps = {
  items: FaqItem[];
};

export function FaqAccordion({ items }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <div className="flex-1">
      {items.map((item, i) => (
        <div key={i}>
          <button
            onClick={() => toggle(i)}
            className="flex w-full items-center justify-between py-5 text-left"
          >
            <span className="text-[14px] font-medium text-[#111111]">
              {item.question}
            </span>
            <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-gray-100">
              {openIndex === i ? (
                <Minus className="size-4 text-gray-500" />
              ) : (
                <Plus className="size-4 text-gray-500" />
              )}
            </span>
          </button>
          {openIndex === i && (
            <p className="pb-5 text-sm leading-relaxed text-[#5F5F6B]">
              {item.answer}
            </p>
          )}
          <hr className="border-gray-100" />
        </div>
      ))}
    </div>
  );
}
