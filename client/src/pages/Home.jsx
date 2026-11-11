import { Suspense, lazy } from "react";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  Search,
  ShieldCheck,
  Users2,
  MessagesSquare,
  Briefcase,
  FileSignature,
  Target,
  LineChart,
} from "lucide-react";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import TestimonialsSection from "../components/TestimonialsSection";
import FAQSection from "../components/FAQSection";
import CTASection from "../components/CTASection";
import TiltCard from "../components/TiltCard";
import { coreValues, whyChooseUs, services, howWeWork, stats } from "../data/content";

const HeroScene = lazy(() => import("../components/HeroScene"));

const highlightIcons = [Search, ShieldCheck, MessagesSquare, Users2];
const serviceIcons = [Briefcase, FileSignature, Target, LineChart];
const highlights = [
  { title: "Strategic Talent Search", description: "Focused sourcing guided by the role, not a generic candidate pool." },
  { title: "Candidate Screening", description: "Every profile is checked against the role's core requirements first." },
  { title: "Clear Communication", description: "Honest expectations and plain updates throughout the process." },
  { title: "Long-Term Partnerships", description: "We aim to stay your recruitment partner, not a one-time provider." },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-ink-950">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(50,112,255,0.35),transparent_45%),radial-gradient(circle_at_80%_0%,rgba(50,112,255,0.25),transparent_40%)]" />
        <div className="pointer-events-none absolute inset-0 opacity-80">
          <Suspense fallback={null}>
            <HeroScene />
          </Suspense>
        </div>
        <div className="section relative z-10 flex flex-col items-center py-28 text-center sm:py-36">
          <Reveal>
            <span className="eyebrow bg-white/10 text-brand-200">
              Dubai · UAE Recruitment Partner
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-6 max-w-4xl text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-6xl">
              Right People. <span className="text-brand-400">Right Place.</span>{" "}
              Right Future.
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink-300 sm:text-lg">
              A Dubai-based recruitment partner helping employers across the
              UAE find talent that fits — through understanding, careful
              screening, and relationships built to last.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Link to="/request-talent" className="btn-primary">
                I'm Hiring <ArrowUpRight size={16} />
              </Link>
              <Link to="/jobs" className="btn bg-white/10 text-white ring-1 ring-white/20 hover:bg-white/20">
                I'm Looking for a Job
              </Link>
            </div>
          </Reveal>

          <Reveal delay={0.4} className="mt-20 w-full">
            <div className="grid grid-cols-2 gap-6 border-t border-white/10 pt-10 sm:grid-cols-4">
              {stats.map((s) => (
                <div key={s.label}>
                  <p className="text-3xl font-extrabold text-white sm:text-4xl">{s.value}</p>
                  <p className="mt-1 text-xs text-ink-400 sm:text-sm">{s.label}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Highlights */}
      <section className="section py-20 sm:py-28">
        <SectionHeading
          eyebrow="What We Bring"
          title="Built On a Few Simple Principles"
          description="Every search we run is guided by the same core commitments to employers and candidates alike."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((h, i) => {
            const Icon = highlightIcons[i];
            return (
              <Reveal key={h.title} delay={i * 0.08}>
                <TiltCard className="group relative h-full overflow-hidden rounded-2xl bg-white p-6 shadow-card ring-1 ring-ink-100 transition-shadow hover:shadow-soft">
                  <span className="pointer-events-none absolute -right-2 -top-4 text-6xl font-extrabold text-ink-50 transition-colors group-hover:text-brand-50">
                    0{i + 1}
                  </span>
                  <div className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 text-white shadow-soft">
                    <Icon size={22} />
                  </div>
                  <h3 className="relative mt-5 text-base font-bold text-ink-900">{h.title}</h3>
                  <p className="relative mt-2 text-sm leading-relaxed text-ink-500">{h.description}</p>
                </TiltCard>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* About / Approach */}
      <section className="bg-ink-50 py-20 sm:py-28">
        <div className="section">
          <SectionHeading
            eyebrow="Our Approach"
            title="Better Hiring Starts with Better Understanding"
            description="We treat recruitment as a relationship, not a transaction — here's what guides every search we run."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {coreValues.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.1}>
                <TiltCard className="h-full rounded-2xl border border-ink-200 bg-white p-8">
                  <span className="text-sm font-bold text-brand-600">0{i + 1}</span>
                  <h3 className="mt-3 text-lg font-bold text-ink-900">{v.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-500">{v.description}</p>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section py-20 sm:py-28">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="A Recruitment Partner Focused on the Right Fit"
          align="left"
        />
        <div className="mt-14 grid gap-px overflow-hidden rounded-3xl bg-ink-100 sm:grid-cols-2 lg:grid-cols-4">
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
      </section>

      {/* Services */}
      <section className="bg-ink-950 py-20 sm:py-28">
        <div className="section">
          <SectionHeading
            dark
            eyebrow="Our Services"
            title="Recruitment Support Built Around Your Needs"
            description="From single critical hires to long-term workforce planning."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2">
            {services.map((s, i) => {
              const Icon = serviceIcons[i];
              return (
                <Reveal key={s.title} delay={i * 0.08}>
                  <TiltCard className="h-full rounded-2xl bg-white/5 p-8 ring-1 ring-white/10 transition-colors hover:bg-white/10">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-500/15 text-brand-300">
                      <Icon size={22} />
                    </div>
                    <h3 className="mt-5 text-lg font-bold text-white">{s.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-ink-300">{s.description}</p>
                  </TiltCard>
                </Reveal>
              );
            })}
          </div>
          <Reveal delay={0.3} className="mt-10 flex justify-center">
            <Link to="/services" className="btn bg-white text-ink-900 hover:bg-ink-100">
              Explore All Services <ArrowUpRight size={16} />
            </Link>
          </Reveal>
        </div>
      </section>

      <TestimonialsSection />

      {/* How We Work */}
      <section className="bg-ink-50 py-20 sm:py-28">
        <div className="section">
          <SectionHeading eyebrow="How We Work" title="A Clear, Four-Step Process" />
          <div className="relative mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {howWeWork.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.1}>
                <div className="relative">
                  <span className="text-5xl font-extrabold text-brand-100">{item.step}</span>
                  <h3 className="mt-2 text-base font-bold text-ink-900">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-500">{item.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <FAQSection />
      <CTASection />
    </>
  );
}
