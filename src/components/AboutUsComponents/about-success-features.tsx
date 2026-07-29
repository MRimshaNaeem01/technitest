import { Container } from "@/components/common/container";

export type SuccessFeature = {
  title: string;
  description: string;
  icon?: React.ReactNode;
};

type AboutSuccessFeaturesProps = {
  title?: string;
  features: SuccessFeature[];
};

export function AboutSuccessFeatures({
  title = "Everything You Need to Succeed",
  features,
}: AboutSuccessFeaturesProps) {
  return (
    <section className="bg-white py-10 sm:py-16 lg:py-24">
      <Container>
        <h2 className="type-section text-center">
          {title}
        </h2>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-xl bg-white p-5 text-center shadow-[0_8px_24px_rgba(0,0,0,0.06)] ring-0 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(0,0,0,0.1)] sm:p-8"
            >
              <div className="mb-5 flex justify-center">{feature.icon}</div>
              <h3 className="text-[16px] font-semibold text-[#111111] sm:text-[18px]">
                {feature.title}
              </h3>
              <p className="mt-3 text-[13px] leading-relaxed text-[#5F6368] sm:text-[14px]">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
