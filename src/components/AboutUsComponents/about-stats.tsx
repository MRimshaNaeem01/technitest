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
    <section className="bg-white pb-20">
      <Container>
        <div className="flex flex-wrap justify-center text-center">
          {stats.map((stat, i) => (
            <div key={stat.label} className="flex items-center">
              <div className="px-8 py-4 sm:px-12">
                <p className="text-[40px] font-bold leading-none text-black">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm text-[#5F5F6B]">{stat.label}</p>
              </div>
              {i < stats.length - 1 && (
                <div className="hidden h-12 w-px bg-gray-300 sm:block" />
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
