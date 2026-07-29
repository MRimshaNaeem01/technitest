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
    <section className="bg-[#F7F7FF] py-12 sm:py-20">
      <Container>
        <div className="mx-auto mb-8 max-w-2xl text-center sm:mb-14">
          {eyebrow && (
            <p className="mb-3 text-sm font-medium text-brand">{eyebrow}</p>
          )}
          <h2 className="type-section">
            {title}
          </h2>
        </div>

        <div className="grid grid-cols-1 justify-items-center gap-6 sm:grid-cols-2 sm:gap-6 lg:flex lg:items-center lg:justify-center lg:gap-4">
          {steps.map((step, index) => (
            <div key={step.title} className="flex w-full flex-col items-center lg:w-auto lg:flex-row lg:gap-4">
              <div className="flex h-[200px] w-full max-w-[340px] flex-col items-center justify-center rounded-xl bg-white px-5 text-center shadow-[0_8px_24px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(0,0,0,0.12)] sm:h-[240px] sm:px-6 lg:h-[280px] lg:w-[340px]">
                <div className="mb-3 text-brand sm:mb-4">
                  {step.icon ?? defaultIcons[index] ?? null}
                </div>
                <h3 className="mb-1 text-xl font-medium text-[#111111] sm:mb-2 sm:text-[26px]">
                  {step.title}
                </h3>
                <p className="mx-auto max-w-[180px] text-sm leading-relaxed text-[#5F6368] sm:text-[17px]">
                  {step.description}
                </p>
              </div>

              {index < steps.length - 1 && (
                <ArrowRight className="mx-1 hidden size-6 shrink-0 text-brand lg:block" />
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
