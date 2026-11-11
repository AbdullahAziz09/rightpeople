import { Link } from "react-router-dom";
import { MessageCircle, Mail, MapPin, ArrowUpRight, ArrowUp } from "lucide-react";
import { navLinks } from "../data/content";

export default function Footer() {
  return (
    <footer className="bg-ink-950 text-ink-200">
      <div className="section grid grid-cols-1 gap-12 py-16 sm:grid-cols-2 md:grid-cols-4">
        <div className="sm:col-span-2">
          <Link to="/" className="flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-600 text-white font-extrabold">
              R
            </span>
            <span className="text-lg font-extrabold tracking-tight text-white">
              Right<span className="text-brand-400">People</span>
            </span>
          </Link>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-ink-400">
            A Dubai-based recruitment partner helping employers across the UAE
            find the right talent through understanding, clear communication,
            and long-term relationships.
          </p>
          <div className="mt-6 flex items-center gap-2 text-sm text-ink-300">
            <MapPin size={16} className="shrink-0 text-brand-400" />
            Dubai, United Arab Emirates
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
            Navigate
          </h4>
          <ul className="mt-4 space-y-3 text-sm">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className="inline-flex items-center gap-1 text-ink-300 transition-colors hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
            Get in touch
          </h4>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <a
                href="mailto:info@rightpeople.ae"
                className="group flex items-center gap-2 text-ink-300 transition-colors hover:text-white"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/5 text-brand-400 transition-colors group-hover:bg-brand-600 group-hover:text-white">
                  <Mail size={15} />
                </span>
                <span className="truncate">info@rightpeople.ae</span>
              </a>
            </li>
            <li>
              <a
                href="https://wa.me/971000000000"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-2 text-ink-300 transition-colors hover:text-white"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/5 text-brand-400 transition-colors group-hover:bg-brand-600 group-hover:text-white">
                  <MessageCircle size={15} />
                </span>
                WhatsApp us
              </a>
            </li>
            <li>
              <Link
                to="/contact"
                className="group mt-2 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-400 transition-colors hover:text-brand-300"
              >
                Contact page
                <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="relative border-t border-white/10">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-500/60 to-transparent" />
        <div className="section flex flex-col items-center gap-3 py-6 text-center sm:flex-row sm:justify-between sm:gap-4 sm:text-left">
          <p className="text-xs text-ink-400">
            © {new Date().getFullYear()} Right People Workforce Solutions. All rights reserved.
          </p>

          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="group flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/5 text-ink-300 ring-1 ring-white/10 transition-all hover:bg-brand-600 hover:text-white hover:ring-brand-600"
            aria-label="Back to top"
          >
            <ArrowUp size={16} className="transition-transform group-hover:-translate-y-0.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
