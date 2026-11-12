import { Quote } from "lucide-react";
import SectionHeading from "./SectionHeading";
import StarRating from "./StarRating";
import Reveal from "./Reveal";
import TiltCard from "./TiltCard";
import { testimonials } from "../data/content";

export default function TestimonialsSection() {
  const items = [...testimonials, ...testimonials];

  return (
    <section className="py-20 sm:py-28">
      <div className="section">
        <SectionHeading
          eyebrow="Client Experiences"
          title="Relationships Built on Understanding"
          description="Our approach centers on understanding each hiring need, communicating clearly, and making relevant connections between businesses and professionals."
        />
      </div>

      <Reveal delay={0.1} className="mt-14">
        <div className="group relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]">
          <div className="flex w-max animate-marquee gap-6 group-hover:[animation-play-state:paused]">
            {items.map((t, i) => (
              <TiltCard
                key={`${t.name}-${i}`}
                className="flex h-full w-80 shrink-0 flex-col rounded-2xl bg-white p-8 shadow-card ring-1 ring-ink-100 sm:w-96"
              >
                <Quote className="text-brand-200" size={32} />
                <p className="mt-4 flex-1 text-sm leading-relaxed text-ink-600">
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
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
