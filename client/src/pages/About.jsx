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
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <span className="eyebrow">Our Story</span>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-ink-900 sm:text-4xl">
              Built in Dubai, For the UAE's Hiring Teams
            </h2>
            <p className="mt-4 text-base leading-relaxed text-ink-500">
              Right People Workforce Solutions was founded on a simple
              belief: recruitment works best when it's treated as a
              long-term partnership, not a transaction. We work closely
              with employers across the UAE to understand what a role
              really needs — then go find it.
            </p>
            <p className="mt-4 text-base leading-relaxed text-ink-500">
              From single critical hires to building out entire teams, our
              process stays the same — careful listening, honest
              screening, and clear communication from first call to final
              offer.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="relative">
              <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-br from-brand-200 to-brand-50 blur-2xl" />
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1200&q=80"
                alt="Right People team in a client meeting"
                loading="lazy"
                className="aspect-[4/3] w-full rounded-3xl object-cover shadow-card ring-1 ring-ink-100"
              />
            </div>
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
