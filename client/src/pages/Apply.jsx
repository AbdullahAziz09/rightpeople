import { useLocation } from "react-router-dom";
import { MapPin, Briefcase, CheckCircle2 } from "lucide-react";
import Reveal from "../components/Reveal";
import ApplicationForm from "../components/ApplicationForm";
import { generalApplicationJob } from "../data/content";

const steps = [
  "We review your profile against current and upcoming roles",
  "If there's a fit, our team reaches out to discuss next steps",
  "You're kept in our network for future opportunities too",
];

export default function Apply() {
  const { state } = useLocation();
  const job = state?.job || generalApplicationJob;
  const isGeneral = job.id === "general";

  return (
    <section className="section py-20 sm:py-28">
      <div className="grid gap-16 lg:grid-cols-2 lg:items-start">
        <Reveal>
          <span className="eyebrow">Apply Now</span>
          <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-ink-900 sm:text-5xl">
            {isGeneral ? "Join Our Talent Network" : job.title}
          </h1>
          {!isGeneral && (
            <div className="mt-4 flex flex-wrap gap-4 text-sm font-medium text-ink-500">
              <span className="flex items-center gap-1.5">
                <Briefcase size={15} /> {job.category}
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin size={15} /> {job.location}
              </span>
            </div>
          )}
          <p className="mt-5 max-w-md text-base leading-relaxed text-ink-500">
            {isGeneral
              ? "Submit your CV for current or future opportunities — it doesn't guarantee placement, but it keeps you on our radar."
              : "Share a few details and your CV — our recruitment team will review your profile against this role."}
          </p>
          <ul className="mt-8 space-y-4">
            {steps.map((s) => (
              <li key={s} className="flex items-start gap-3 text-sm text-ink-700">
                <CheckCircle2 size={20} className="mt-0.5 shrink-0 text-brand-600" />
                {s}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.15}>
          <ApplicationForm job={job} />
        </Reveal>
      </div>
    </section>
  );
}
