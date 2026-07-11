import { Container } from "@/components/common/container";
import { FaqHero } from "@/components/faqComponents/faq-hero";
import { FaqSidebar } from "@/components/faqComponents/faq-sidebar";
import { FaqAccordion } from "@/components/faqComponents/faq-accordion";

const faqCategories = [
  { label: "Basics" },
  { label: "Quiz" },
  { label: "Certificate" },
  { label: "Transactions" },
  { label: "Other" },
];

const faqItems = [
  {
    question: "Do I need to provide cleaning supplies?",
    answer:
      "No, we provide all necessary cleaning supplies and equipment. Just let us know if you have any specific preferences or requirements.",
  },
  {
    question: "Can I request recurring cleanings?",
    answer:
      "Yes, we offer flexible scheduling options including weekly, bi-weekly, and monthly recurring cleanings at discounted rates.",
  },
  {
    question: "Are your cleaners insured and background-checked?",
    answer:
      "Absolutely. All our cleaners are fully insured, background-checked, and thoroughly trained to ensure your safety and peace of mind.",
  },
  {
    question: "What if I need to cancel or reschedule?",
    answer:
      "You can cancel or reschedule up to 24 hours before your scheduled appointment without any penalty.",
  },
  {
    question: "Do you bring your own supplies?",
    answer:
      "Yes, our team arrives fully equipped with all the supplies and tools needed to get the job done.",
  },
  {
    question: "Are your cleaners insured and background-checked?",
    answer:
      "All cleaners undergo rigorous background checks and are fully insured. Your safety is our top priority.",
  },
  {
    question: "What if I need to cancel or reschedule?",
    answer:
      "We understand plans change. Cancel or reschedule with 24-hour notice at no charge.",
  },
  {
    question: "Do you bring your own supplies?",
    answer:
      "Yes, we come fully prepared with eco-friendly cleaning products and professional-grade equipment.",
  },
];

export default function FaqsPage() {
  return (
    <>
      <FaqHero
        breadcrumb={
          <>
            Home <span className="mx-1">›</span>{" "}
            <span className="text-black">Frequently Asked Questions</span>
          </>
        }
        title="Frequently Asked Questions"
        description="Find quick answers to the most common questions about our courses, certificates, and platform."
      />
      <section className="bg-white py-20">
        <Container>
          <h2 className="mb-10 text-center text-[32px] font-semibold text-black lg:text-left">
            Got Questions? We've Got Answers
          </h2>
          <div className="flex flex-col gap-8 lg:flex-row">
            <FaqSidebar categories={faqCategories} activeIndex={0} />
            <FaqAccordion items={faqItems} />
          </div>
        </Container>
      </section>
    </>
  );
}
