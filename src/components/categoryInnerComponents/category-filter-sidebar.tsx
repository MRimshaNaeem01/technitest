export type FilterCategory = {
  label: string;
  count: number;
};

type CategoryFilterSidebarProps = {
  categories: FilterCategory[];
  levels: FilterCategory[];
};

export function CategoryFilterSidebar({
  categories,
  levels,
}: CategoryFilterSidebarProps) {
  return (
    <aside className="w-full shrink-0 lg:w-[260px]">
      <div className="rounded-xl bg-white p-6 shadow-sm">
        <h3 className="mb-4 font-semibold text-black">Select by Category</h3>
        <ul className="space-y-3">
          {categories.map((cat) => (
            <li key={cat.label}>
              <label className="flex cursor-pointer items-center gap-2 text-sm text-gray-600">
                <input
                  type="checkbox"
                  className="size-4 accent-brand"
                  defaultChecked={cat.label === "Health & Wellness"}
                />
                <span className="flex-1">{cat.label}</span>
                <span className="text-xs text-gray-400">({cat.count})</span>
              </label>
            </li>
          ))}
        </ul>

        <hr className="my-5 border-gray-100" />

        <h3 className="mb-4 font-semibold text-black">Checked</h3>
        <ul className="space-y-3">
          {levels.map((level) => (
            <li key={level.label}>
              <label className="flex cursor-pointer items-center gap-2 text-sm text-gray-600">
                <input
                  type="checkbox"
                  className="size-4 accent-brand"
                />
                <span className="flex-1">{level.label}</span>
                <span className="text-xs text-gray-400">({level.count})</span>
              </label>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
