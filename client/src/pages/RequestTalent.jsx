import Reveal from "../components/Reveal";
import LeadForm from "../components/LeadForm";
import { CheckCircle2 } from "lucide-react";

const points = [
  "Tell us about the role, team, and timeline",
  "We run a focused, screened candidate search",
  "You receive relevant, vetted introductions only",
];

export default function RequestTalent() {
  return (
    <section className="section py-20 sm:py-28">
      <div className="grid gap-16 lg:grid-cols-2 lg:items-start">
        <Reveal>
          <span className="eyebrow">Request Talent</span>
          <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-ink-900 sm:text-5xl">
            Tell Us Who You're Looking For
          </h1>
          <p className="mt-5 max-w-md text-base leading-relaxed text-ink-500">
            Share your vacancy, hiring priorities, and ideal candidate profile
            — our team will review and reach out to discuss next steps.
          </p>
          <ul className="mt-8 space-y-4">
            {points.map((p) => (
              <li key={p} className="flex items-start gap-3 text-sm text-ink-700">
                <CheckCircle2 size={20} className="mt-0.5 shrink-0 text-brand-600" />
                {p}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.15}>
          <LeadForm type="request-talent" submitLabel="Submit Request" />
        </Reveal>
      </div>
    </section>
  );
}
