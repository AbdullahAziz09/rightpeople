import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";

export default function CTASection() {
  return (
    <section className="section pb-20 sm:pb-28">
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-700 via-brand-600 to-brand-900 px-8 py-16 text-center sm:py-20">
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -left-10 h-72 w-72 rounded-full bg-brand-400/20 blur-3xl" />
          <div className="relative mx-auto max-w-2xl">
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Let's Start the Conversation
            </h2>
            <p className="mt-4 text-base text-brand-100">
              Tell us about your vacancy, your hiring priorities, and the kind
              of candidate you're looking for — we'll take it from there.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link to="/request-talent" className="btn bg-white text-brand-700 hover:bg-brand-50">
                Request Talent <ArrowUpRight size={16} />
              </Link>
              <a
                href="https://wa.me/971000000000"
                target="_blank"
                rel="noreferrer"
                className="btn-ghost"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
