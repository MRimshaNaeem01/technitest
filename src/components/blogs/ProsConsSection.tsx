import { Check, X } from "lucide-react";

export type ProsConsItem = {
  id: string;
  text: string;
};

type ProsConsSectionProps = {
  prosTitle?: string;
  consTitle?: string;
  prosDescription?: string;
  consDescription?: string;
  pros: ProsConsItem[];
  cons: ProsConsItem[];
  className?: string;
};

export function ProsConsSection({
  prosTitle = "Pros",
  consTitle = "Cons",
  prosDescription,
  consDescription,
  pros,
  cons,
  className,
}: ProsConsSectionProps) {
  return (
    <section className={className}>
      <div className="space-y-10">
        {/* Pros Panel */}
        <div className="relative rounded-[18px] bg-[#EEF3F8] px-5 pb-6 pt-12 md:px-12 md:pb-10 md:pt-16">
          <span className="absolute left-10 top-0 flex h-[46px] min-w-[70px] items-center justify-center bg-green-500 px-3 text-base font-semibold text-white [clip-path:polygon(0_0,100%_0,100%_72%,50%_100%,0_72%)] md:left-14 md:h-[58px] md:min-w-[90px] md:px-5 md:text-xl">
            {prosTitle}
          </span>

          {prosDescription && (
            <p className="mb-6 text-[15px] leading-7 text-[#5F6368]">
              {prosDescription}
            </p>
          )}

          <ul className="space-y-3">
            {pros.map((item) => (
              <li key={item.id} className="flex items-start gap-3">
                <Check
                  aria-hidden="true"
                  className="mt-1 h-4 w-4 shrink-0 text-green-500"
                />
                <span className="text-[15px] leading-6 text-[#202020]">
                  {item.text}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Cons Panel */}
        <div className="relative rounded-[18px] bg-[#EEF3F8] px-5 pb-6 pt-12 md:px-12 md:pb-10 md:pt-16">
          <span className="absolute left-10 top-0 flex h-[46px] min-w-[70px] items-center justify-center bg-red-500 px-3 text-base font-semibold text-white [clip-path:polygon(0_0,100%_0,100%_72%,50%_100%,0_72%)] md:left-14 md:h-[58px] md:min-w-[90px] md:px-5 md:text-xl">
            {consTitle}
          </span>

          {consDescription && (
            <p className="mb-6 text-[15px] leading-7 text-[#5F6368]">
              {consDescription}
            </p>
          )}

          <ul className="space-y-3">
            {cons.map((item) => (
              <li key={item.id} className="flex items-start gap-3">
                <X
                  aria-hidden="true"
                  className="mt-1 h-4 w-4 shrink-0 text-red-500"
                />
                <span className="text-[15px] leading-6 text-[#202020]">
                  {item.text}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
