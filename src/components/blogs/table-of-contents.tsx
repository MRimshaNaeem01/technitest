import { ChevronRight } from "lucide-react";

const items = [
  "1st Tip: Heading of 1st tip here",
  "2nd Tip: Heading of 2nd tip here",
  "3rd Tip: Heading of 3rd tip here",
  "4th Tip: Heading of 4th tip here",
  "5th Tip: Heading of 5th tip here",
];

export function TableOfContents() {
  return (
    <div className="rounded-2xl bg-white p-6 shadow-[0_10px_30px_rgba(0,0,0,0.08)]">
      <h3 className="mb-5 text-center text-[16px] font-semibold text-[#111111]">
        Table of Content
      </h3>
      <ul className="space-y-3">
        {items.map((item, i) => (
          <li key={i}>
            <button
              type="button"
              className={`flex w-full items-center gap-2 text-left text-sm transition-colors ${
                i === 0
                  ? "font-medium text-brand"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              <ChevronRight
                className={`h-3.5 w-3.5 shrink-0 ${
                  i === 0 ? "text-brand" : "text-gray-400"
                }`}
              />
              {item}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
