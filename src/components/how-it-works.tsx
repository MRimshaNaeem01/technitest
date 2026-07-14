import { ArrowRight, BadgeCheck, DownloadCloud, Grid3x3, MessageSquareText } from "lucide-react";

import { Container } from "@/components/common/container";

export type HowItWorksStep = {
  title: string;
  description: string;
  icon?: React.ReactNode;
};

type HowItWorksProps = {
  eyebrow?: string;
  title?: string;
  steps: HowItWorksStep[];
};

const defaultIcons: React.ReactNode[] = [
  <Grid3x3 key="grid" size={42} strokeWidth={1.5} />,
  <MessageSquareText key="msg" size={42} strokeWidth={1.5} />,
  <BadgeCheck key="badge" size={42} strokeWidth={1.5} />,
  <DownloadCloud key="download" size={42} strokeWidth={1.5} />,
];

export function HowItWorks({
  eyebrow = "How it Works",
  title = "Simple Steps. Smarter Results",
  steps,
}: HowItWorksProps) {
  return (
    <section className="bg-[#F7F7FF] py-20">
      <Container>
        <div className="mx-auto mb-14 max-w-2xl text-center">
          {eyebrow && (
            <p className="mb-3 text-sm font-medium text-brand">{eyebrow}</p>
          )}
          <h2 className="text-3xl font-semibold text-black md:text-4xl">
            {title}
          </h2>
        </div>

        <div className="flex items-center justify-center gap-0 md:gap-2 lg:gap-4">
          {steps.map((step, index) => (
            <div key={step.title} className="flex items-center gap-0 md:gap-2 lg:gap-4">
              <div className="flex h-[230px] w-[240px] flex-col items-center justify-center rounded-xl bg-white px-6 text-center shadow-[0_8px_24px_rgba(0,0,0,0.08)] ring-0 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(0,0,0,0.12)]">
                <div className="mb-4 text-brand">
                  {step.icon ?? defaultIcons[index] ?? null}
                </div>
                <h3 className="mb-2 text-lg font-medium text-black">
                  {step.title}
                </h3>
                <p className="mx-auto max-w-[180px] text-[13px] leading-relaxed text-gray-600">
                  {step.description}
                </p>
              </div>

              {index < steps.length - 1 && (
                <ArrowRight className="mx-1 hidden size-6 shrink-0 text-brand md:block" />
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
