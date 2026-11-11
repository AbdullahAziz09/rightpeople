import { useState } from "react";
import { ChevronDown } from "lucide-react";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { faqs } from "../data/content";

function FAQItem({ faq, isOpen, onToggle }) {
  return (
    <div className="overflow-hidden rounded-2xl bg-white ring-1 ring-ink-100">
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
      >
        <span className="text-sm font-semibold text-ink-900 sm:text-base">
          {faq.question}
        </span>
        <ChevronDown
          size={20}
          className={`shrink-0 text-brand-600 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`grid transition-all duration-300 ease-out ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="px-6 pb-5 text-sm leading-relaxed text-ink-500">
            {faq.answer}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="section py-20 sm:py-28">
      <SectionHeading
        eyebrow="FAQ"
        title="Frequently Asked Questions"
        description="Answers to the questions we hear most from employers exploring recruitment support."
      />
      <div className="mx-auto mt-14 max-w-3xl space-y-4">
        {faqs.map((faq, i) => (
          <Reveal key={faq.question} delay={i * 0.05}>
            <FAQItem
              faq={faq}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
            />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
