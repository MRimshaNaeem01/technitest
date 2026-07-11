import { ContactHero } from "@/components/contactComponents/contact-hero";
import { ContactInfoCards } from "@/components/contactComponents/contact-info-cards";
import { ContactForm } from "@/components/contactComponents/contact-form";

const contactInfoItems = [
  {
    title: "Support",
    description:
      "Our friendly support team is always ready to help you with any questions or issues.",
    contact: "support@technitest.com",
  },
  {
    title: "Sales",
    description:
      "Looking to partner with us or purchase in bulk? Get in touch with our sales team.",
    contact: "sales@technitest.com",
  },
  {
    title: "Phone",
    description:
      "Prefer to talk? Give us a call and we'll be happy to assist you directly.",
    contact: "+1 (732) 262-3141",
  },
];

export default function ContactPage() {
  return (
    <>
      <ContactHero
        breadcrumb={
          <>
            Home <span className="mx-1">›</span>{" "}
            <span className="text-black">Contact Us</span>
          </>
        }
        title="Get in Touch with Us"
        description="Have questions about our quizzes, certification, or anything else? We're here to help."
      />
      <ContactInfoCards items={contactInfoItems} />
      <ContactForm imageSrc="/contact/contact-img.png" />
    </>
  );
}
