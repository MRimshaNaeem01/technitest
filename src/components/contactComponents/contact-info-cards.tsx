import { Container } from "@/components/common/container";

export type ContactInfo = {
  title: string;
  description: string;
  contact: string;
};

type ContactInfoCardsProps = {
  items: ContactInfo[];
};

export function ContactInfoCards({ items }: ContactInfoCardsProps) {
  return (
    <section className="relative bg-white pt-12 md:pt-20">
      <Container>
        <div className="flex flex-wrap justify-center gap-6">
          {items.map((item) => (
            <div
              key={item.title}
              className="w-full rounded-xl bg-white px-6 py-8 text-center shadow-[0_8px_28px_rgba(0,0,0,0.06)] sm:w-[calc(50%-0.75rem)] sm:px-8 sm:py-10 lg:w-[calc(33.333%-1rem)]"
            >
              <h3 className="text-[18px] font-semibold text-[#111111]">{item.title}</h3>
              <p className="mt-2 text-sm text-[#666]">{item.description}</p>
              <p className="mt-3 text-sm font-medium text-[#2F45FF]">
                {item.contact}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
