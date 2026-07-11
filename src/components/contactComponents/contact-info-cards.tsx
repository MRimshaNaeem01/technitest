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
        <div className="grid gap-6 md:grid-cols-3">
          {items.map((item) => (
            <div
              key={item.title}
              className="rounded-xl bg-white p-6 text-center shadow-sm"
            >
              <h3 className="text-lg font-semibold text-black">{item.title}</h3>
              <p className="mt-2 text-sm text-[#5F5F6B]">{item.description}</p>
              <p className="mt-3 text-sm font-medium text-indigo-500">
                {item.contact}
              </p>
            </div>
          ))}
        </div>
      </Container>

      <div className="pointer-events-none absolute -bottom-6 right-8 hidden lg:block">
        <span className="flex size-14 items-center justify-center rounded-full bg-[#2945FF] shadow-lg">
          <svg
            className="size-7 text-white"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <path d="M21 15C21 15 21 19 17 19C13 19 13 15 13 15" />
            <path d="M21 15V11C21 7 17 7 17 7" />
            <path d="M3 9C3 9 3 5 7 5C11 5 11 9 11 9" />
            <path d="M3 9V13C3 17 7 17 7 17" />
          </svg>
        </span>
      </div>
    </section>
  );
}
