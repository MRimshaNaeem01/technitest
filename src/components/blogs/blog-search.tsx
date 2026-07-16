import { Search } from "lucide-react";

export function BlogSearch() {
  return (
    <div className="rounded-2xl bg-[#f5f5f5] p-6 shadow-[0_10px_30px_rgba(0,0,0,0.08)]">
      <h3 className="mb-4 text-center text-[16px] font-semibold text-[#111111]">
        Search
      </h3>
      <div className="relative">
        <input
          type="text"
          placeholder="Search by keywords..."
          className="h-11 w-full rounded-full border-none bg-white pl-4 pr-10 text-sm text-[#111] outline-none placeholder:text-gray-400"
        />
        <Search className="pointer-events-none absolute right-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
      </div>
    </div>
  );
}
