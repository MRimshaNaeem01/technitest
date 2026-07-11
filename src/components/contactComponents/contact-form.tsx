import Image from "next/image";
import { Mail, Phone } from "lucide-react";

import { AppButton } from "@/components/common/app-button";
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
    <section className="bg-white py-20">
      <Container>
        <div className="flex flex-col gap-10 lg:flex-row">
          <div className="shrink-0">
            <Image
              src={imageSrc}
              alt={imageAlt}
              width={460}
              height={500}
              className="h-auto w-full max-w-[460px] rounded-xl object-cover"
            />
          </div>

          <div className="flex-1">
            <div className="mb-8 flex flex-wrap gap-6">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Phone className="size-4 text-brand" />
                (732) 262-3141
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Mail className="size-4 text-brand" />
                info@technitest.com
              </div>
            </div>

            <form className="space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label className="mb-1 block text-sm text-gray-500">
                    First name
                  </label>
                  <input
                    className="w-full border-b border-gray-300 pb-2 text-sm text-black outline-none focus:border-brand"
                    placeholder="First name"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-sm text-gray-500">
                    Last name
                  </label>
                  <input
                    className="w-full border-b border-gray-300 pb-2 text-sm text-black outline-none focus:border-brand"
                    placeholder="Last name"
                  />
                </div>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label className="mb-1 block text-sm text-gray-500">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="w-full border-b border-gray-300 pb-2 text-sm text-black outline-none focus:border-brand"
                    placeholder="Email Address"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-sm text-gray-500">
                    Phone no.
                  </label>
                  <input
                    className="w-full border-b border-gray-300 pb-2 text-sm text-black outline-none focus:border-brand"
                    placeholder="Phone no."
                  />
                </div>
              </div>

              <div>
                <label className="mb-1 block text-sm text-gray-500">
                  Message
                </label>
                <textarea
                  rows={4}
                  className="w-full resize-none border-b border-gray-300 pb-2 text-sm text-black outline-none focus:border-brand"
                  placeholder="Write your message..."
                />
              </div>

              <AppButton type="submit" size="lg">
                Send Message
              </AppButton>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
}
