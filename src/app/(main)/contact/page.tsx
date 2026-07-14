import { ContactHero } from "@/components/contactComponents/contact-hero";
import { ContactInfoCards } from "@/components/contactComponents/contact-info-cards";
import { ContactForm } from "@/components/contactComponents/contact-form";

const contactInfoItems = [
  {
    title: "Support",
    description: "Our friendly team is here to help.",
    contact: "support@technitest.com",
  },
  {
    title: "Sales",
    description: "Question or Queries? Get in Touch!",
    contact: "sales@technitest.com",
  },
  {
    title: "Phone",
    description: "Mon - Fri from 9am to 6pm",
    contact: "+1 (555) 000-0000",
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
      <ContactForm imageSrc="/aboutUs/img2.png" />
    </>
  );
}
