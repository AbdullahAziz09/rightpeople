import { Link } from "react-router-dom";
import { ArrowUpRight, Briefcase, FileSignature, Target, LineChart } from "lucide-react";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import TestimonialsSection from "../components/TestimonialsSection";
import FAQSection from "../components/FAQSection";
import CTASection from "../components/CTASection";
import TiltCard from "../components/TiltCard";
import { services, howWeWork } from "../data/content";

const serviceIcons = [Briefcase, FileSignature, Target, LineChart];

export default function Services() {
  return (
    <>
      <section className="relative overflow-hidden bg-ink-950 py-24 text-center sm:py-32">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(50,112,255,0.3),transparent_50%)]" />
        <div className="section relative">
          <Reveal>
            <span className="eyebrow bg-white/10 text-brand-200">Our Services</span>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mx-auto mt-6 max-w-3xl text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
              Recruitment Support Built Around Your Needs
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <Link to="/request-talent" className="btn-primary mt-8 inline-flex">
              Request Talent <ArrowUpRight size={16} />
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="section py-20 sm:py-28">
        <div className="grid gap-6 sm:grid-cols-2">
          {services.map((s, i) => {
            const Icon = serviceIcons[i];
            return (
              <Reveal key={s.title} delay={i * 0.08}>
                <TiltCard className="h-full rounded-2xl bg-white p-8 shadow-card ring-1 ring-ink-100">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                    <Icon size={22} />
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-ink-900">{s.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-500">{s.description}</p>
                </TiltCard>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="bg-ink-50 py-20 sm:py-28">
        <div className="section">
          <SectionHeading eyebrow="How We Work" title="A Clear, Four-Step Process" />
          <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {howWeWork.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.1}>
                <div>
                  <span className="text-5xl font-extrabold text-brand-200">{item.step}</span>
                  <h3 className="mt-2 text-base font-bold text-ink-900">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-500">{item.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <TestimonialsSection />
      <FAQSection />
      <CTASection />
    </>
  );
}
