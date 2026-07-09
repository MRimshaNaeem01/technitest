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
    <section className="bg-white pb-16">
      <Container>
        <div className="grid grid-cols-2 gap-8 text-center lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="text-[40px] font-bold leading-none text-black">
                {stat.value}
              </p>
              <p className="mt-2 text-sm text-[#5F5F6B]">{stat.label}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
