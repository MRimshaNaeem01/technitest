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
    <section className="bg-white py-20">
      <Container>
        <h2 className="text-center text-[32px] font-semibold text-black">
          {title}
        </h2>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-xl border border-gray-100 bg-white p-6 text-center shadow-sm"
            >
              <div className="mb-4 flex justify-center">{feature.icon}</div>
              <h3 className="text-lg font-semibold text-black">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#5F5F6B]">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
