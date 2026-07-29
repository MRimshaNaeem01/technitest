import { Container } from "@/components/common/container";

export type AboutStat = {
  value: string;
  label: string;
};

type AboutStatsProps = {
  stats: AboutStat[];
};

export function AboutStats({ stats }: AboutStatsProps) {
  return (
    <section className="bg-white pb-10 pt-4 sm:pb-16 sm:pt-6 lg:pb-20">
      <Container>
        <div className="grid grid-cols-2 gap-y-8 sm:grid-cols-4 sm:gap-y-0">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className="relative flex flex-col items-center px-4 text-center sm:px-6"
            >
              <p className="text-[28px] font-bold leading-none text-[#111111] sm:text-[40px]">
                {stat.value}
              </p>
              <p className="mt-2 type-label text-[#111111]">{stat.label}</p>
              {i < stats.length - 1 && (
                <div
                  aria-hidden
                  className="absolute right-0 top-1/2 hidden h-12 w-px -translate-y-1/2 bg-[#D9D9DE] sm:block"
                />
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
