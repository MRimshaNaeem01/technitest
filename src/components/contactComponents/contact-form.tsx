import Image from "next/image";
import { Mail, Phone } from "lucide-react";

import { Container } from "@/components/common/container";

type ContactFormProps = {
  imageSrc: string;
  imageAlt?: string;
};

export function ContactForm({
  imageSrc,
  imageAlt = "Contact us",
}: ContactFormProps) {
  return (
    <section className="bg-white py-14 md:py-24">
      <Container>
        <div className="flex flex-col gap-14 lg:flex-row lg:items-start">
          <div className="w-full lg:w-[46%]">
            <Image
              src={imageSrc}
              alt={imageAlt}
              width={500}
              height={600}
              className="h-auto w-full rounded-2xl object-cover shadow-[0_8px_24px_rgba(0,0,0,0.06)]"
            />
          </div>

          <div className="w-full lg:w-[54%]">
            <div className="mb-10 flex flex-wrap gap-8">
              <div className="flex items-center gap-3 text-sm text-[#666]">
                <span className="flex size-9 items-center justify-center rounded-full bg-[#F6F6FF]">
                  <Phone className="size-4 text-[#2F45FF]" />
                </span>
                +1(555) 000-0000
              </div>
              <div className="flex items-center gap-3 text-sm text-[#666]">
                <span className="flex size-9 items-center justify-center rounded-full bg-[#F6F6FF]">
                  <Mail className="size-4 text-[#2F45FF]" />
                </span>
                support@technitest.com
              </div>
            </div>

            <form className="space-y-7">
              <div className="grid gap-7 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block text-sm text-[#666]">
                    First name
                  </label>
                  <input
                    className="w-full border-0 border-b border-[#E8E8EE] bg-transparent px-0 py-2.5 text-sm text-[#111] outline-none focus:border-[#2F45FF] focus:ring-0"
                    placeholder="First name"
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm text-[#666]">
                    Last name
                  </label>
                  <input
                    className="w-full border-0 border-b border-[#E8E8EE] bg-transparent px-0 py-2.5 text-sm text-[#111] outline-none focus:border-[#2F45FF] focus:ring-0"
                    placeholder="Last name"
                  />
                </div>
              </div>

              <div className="grid gap-7 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block text-sm text-[#666]">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="w-full border-0 border-b border-[#E8E8EE] bg-transparent px-0 py-2.5 text-sm text-[#111] outline-none focus:border-[#2F45FF] focus:ring-0"
                    placeholder="Email Address"
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm text-[#666]">
                    Phone no.
                  </label>
                  <input
                    className="w-full border-0 border-b border-[#E8E8EE] bg-transparent px-0 py-2.5 text-sm text-[#111] outline-none focus:border-[#2F45FF] focus:ring-0"
                    placeholder="Phone no."
                  />
                </div>
              </div>

              <div>
                <label className="mb-1.5 block text-sm text-[#666]">
                  Message
                </label>
                <textarea
                  rows={4}
                  className="min-h-[110px] w-full resize-none border-0 border-b border-[#E8E8EE] bg-transparent px-0 py-2.5 text-sm text-[#111] outline-none focus:border-[#2F45FF] focus:ring-0"
                  placeholder="Write your message..."
                />
              </div>

              <button
                type="submit"
                className="rounded-full bg-[#F5A000] px-8 py-3 text-sm font-medium text-white transition-colors hover:bg-[#e09400]"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
}
