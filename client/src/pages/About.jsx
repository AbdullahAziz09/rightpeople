import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import TestimonialsSection from "../components/TestimonialsSection";
import CTASection from "../components/CTASection";
import { coreValues, whyChooseUs } from "../data/content";

export default function About() {
  return (
    <>
      <section className="relative overflow-hidden bg-ink-950 py-24 text-center sm:py-32">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(50,112,255,0.3),transparent_50%)]" />
        <div className="section relative">
          <Reveal>
            <span className="eyebrow bg-white/10 text-brand-200">About Right People</span>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mx-auto mt-6 max-w-3xl text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
              Better Hiring Starts with Better Understanding
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <Link to="/services" className="btn-primary mt-8 inline-flex">
              Discover Our Approach <ArrowUpRight size={16} />
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="section py-20 sm:py-28">
        <SectionHeading eyebrow="Core Values" title="What Guides Every Search We Run" />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {coreValues.map((v, i) => (
            <Reveal key={v.title} delay={i * 0.1}>
              <div className="h-full rounded-2xl bg-white p-8 shadow-card ring-1 ring-ink-100">
                <span className="text-sm font-bold text-brand-600">0{i + 1}</span>
                <h3 className="mt-3 text-lg font-bold text-ink-900">{v.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-500">{v.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-ink-50 py-20 sm:py-28">
        <div className="section">
          <SectionHeading
            eyebrow="Why Choose Us"
            title="A Recruitment Partner Focused on the Right Fit"
          />
          <div className="mt-14 grid gap-px overflow-hidden rounded-3xl bg-ink-200 sm:grid-cols-2 lg:grid-cols-4">
            {whyChooseUs.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.08}>
                <div className="h-full bg-white p-8">
                  <span className="text-sm font-extrabold text-brand-200">{item.step}</span>
                  <h3 className="mt-3 text-base font-bold text-ink-900">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-500">{item.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <TestimonialsSection />
      <CTASection />
    </>
  );
}
