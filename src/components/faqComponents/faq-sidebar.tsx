export type FaqCategory = {
  label: string;
};

type FaqSidebarProps = {
  categories: FaqCategory[];
  activeIndex?: number;
};

export function FaqSidebar({
  categories,
  activeIndex = 0,
}: FaqSidebarProps) {
  return (
    <aside className="w-full shrink-0 lg:w-[220px]">
      <div className="rounded-xl bg-white p-6 shadow-sm">
        <ul className="space-y-1">
          {categories.map((cat, i) => (
            <li key={cat.label}>
              <button
                className={`w-full rounded-lg px-4 py-2.5 text-left text-sm transition-colors ${
                  i === activeIndex
                    ? "bg-brand text-white font-medium"
                    : "text-gray-600 hover:bg-gray-50"
                }`}
              >
                {cat.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
