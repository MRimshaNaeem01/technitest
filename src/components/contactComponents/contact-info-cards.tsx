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
    <section className="relative bg-white pt-20">
      <Container>
        <div className="flex flex-wrap justify-center gap-6">
          {items.map((item) => (
            <div
              key={item.title}
              className="w-full rounded-xl bg-white px-8 py-10 text-center shadow-[0_8px_28px_rgba(0,0,0,0.06)] sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)]"
            >
              <h3 className="text-lg font-semibold text-[#111]">{item.title}</h3>
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
