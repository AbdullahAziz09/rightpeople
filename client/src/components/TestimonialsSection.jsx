import { Quote } from "lucide-react";
import SectionHeading from "./SectionHeading";
import StarRating from "./StarRating";
import Reveal from "./Reveal";
import TiltCard from "./TiltCard";
import { testimonials } from "../data/content";

export default function TestimonialsSection() {
  return (
    <section className="section py-20 sm:py-28">
      <SectionHeading
        eyebrow="Client Experiences"
        title="Relationships Built on Understanding"
        description="Our approach centers on understanding each hiring need, communicating clearly, and making relevant connections between businesses and professionals."
      />
      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {testimonials.map((t, i) => (
          <Reveal key={t.name} delay={i * 0.1}>
            <TiltCard className="h-full rounded-2xl bg-white p-8 shadow-card ring-1 ring-ink-100">
              <Quote className="text-brand-200" size={32} />
              <p className="mt-4 text-sm leading-relaxed text-ink-600">
                "{t.quote}"
              </p>
              <div className="mt-6 flex items-center justify-between border-t border-ink-100 pt-5">
                <div>
                  <p className="text-sm font-bold text-ink-900">{t.name}</p>
                  <p className="text-xs text-ink-400">{t.role}</p>
                </div>
                <StarRating rating={t.rating} />
              </div>
            </TiltCard>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
