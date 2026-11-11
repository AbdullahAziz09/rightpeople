import { Link } from "react-router-dom";
import { MapPin, Briefcase, Clock, ArrowUpRight } from "lucide-react";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import CTASection from "../components/CTASection";
import { jobs, generalApplicationJob } from "../data/content";

export default function Jobs() {
  return (
    <>
      <section className="relative overflow-hidden bg-ink-950 py-24 text-center sm:py-32">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(50,112,255,0.3),transparent_50%)]" />
        <div className="section relative">
          <Reveal>
            <span className="eyebrow bg-white/10 text-brand-200">Current Openings</span>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mx-auto mt-6 max-w-3xl text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
              Find Your Next Role in the UAE
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mx-auto mt-5 max-w-xl text-ink-300">
              Browse current openings, or submit your CV so we can reach out
              when the right opportunity comes up.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section py-20 sm:py-28">
        <SectionHeading align="left" eyebrow="Open Roles" title="Current Vacancies" />
        <div className="mt-12 space-y-5">
          {jobs.map((job, i) => (
            <Reveal key={job.id} delay={i * 0.08}>
              <div className="flex flex-col gap-6 rounded-2xl bg-white p-7 shadow-card ring-1 ring-ink-100 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <span className="inline-block rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700">
                    {job.category}
                  </span>
                  <h3 className="mt-3 text-xl font-bold text-ink-900">{job.title}</h3>
                  <p className="mt-2 max-w-xl text-sm leading-relaxed text-ink-500">
                    {job.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-4 text-xs font-medium text-ink-400">
                    <span className="flex items-center gap-1.5">
                      <MapPin size={14} /> {job.location}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Briefcase size={14} /> {job.category}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock size={14} /> {job.type}
                    </span>
                  </div>
                </div>
                <Link to="/apply" state={{ job }} className="btn-primary shrink-0">
                  Apply Now <ArrowUpRight size={16} />
                </Link>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2} className="mt-10 rounded-2xl border border-dashed border-ink-300 p-8 text-center">
          <h3 className="text-lg font-bold text-ink-900">Don't see the right role?</h3>
          <p className="mt-2 text-sm text-ink-500">
            Submit your CV for current or future opportunities — it doesn't
            guarantee placement, but it keeps you on our radar.
          </p>
          <Link to="/apply" state={{ job: generalApplicationJob }} className="btn-secondary mt-5 inline-flex">
            Submit Your CV
          </Link>
        </Reveal>
      </section>

      <CTASection />
    </>
  );
}
