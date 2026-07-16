import Link from "next/link";

type BannerBreadcrumbProps = {
  currentPage: string;
  centered?: boolean;
};

export function BannerBreadcrumb({
  currentPage,
  centered = true,
}: BannerBreadcrumbProps) {
  return (
    <div
      className={`flex w-full items-center gap-3 ${
        centered ? "justify-center" : "justify-start"
      }`}
    >
      <Link
        href="/"
        className="font-poppins text-lg font-normal text-[#111827] transition-colors hover:opacity-70"
      >
        Home
      </Link>
      <span className="font-poppins text-lg font-medium text-[#374151]">
        »
      </span>
      <span className="font-poppins text-lg font-semibold text-[#2945FF]">
        {currentPage}
      </span>
    </div>
  );
}
