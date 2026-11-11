import { Mail, MapPin, MessageCircle } from "lucide-react";
import Reveal from "../components/Reveal";
import LeadForm from "../components/LeadForm";

const details = [
  { icon: MapPin, label: "Location", value: "Dubai, United Arab Emirates" },
  { icon: Mail, label: "Email", value: "info@rightpeople.ae" },
  { icon: MessageCircle, label: "WhatsApp", value: "Chat with our team" },
];

export default function Contact() {
  return (
    <section className="section py-20 sm:py-28">
      <div className="grid gap-16 lg:grid-cols-2 lg:items-start">
        <Reveal>
          <span className="eyebrow">Contact</span>
          <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-ink-900 sm:text-5xl">
            Let's Talk About Your Hiring Needs
          </h1>
          <p className="mt-5 max-w-md text-base leading-relaxed text-ink-500">
            Whether you're hiring or exploring a partnership, send us a
            message and we'll respond as soon as possible.
          </p>

          <div className="mt-10 space-y-5">
            {details.map((d) => (
              <div key={d.label} className="flex items-center gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                  <d.icon size={20} />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-ink-400">
                    {d.label}
                  </p>
                  <p className="text-sm font-semibold text-ink-900">{d.value}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <LeadForm type="contact" submitLabel="Send Message" />
        </Reveal>
      </div>
    </section>
  );
}
