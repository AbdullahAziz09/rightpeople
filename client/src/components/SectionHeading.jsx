import Reveal from "./Reveal";

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  dark = false,
}) {
  const alignClass = align === "left" ? "items-start text-left" : "items-center text-center";
  return (
    <Reveal>
      <div className={`flex flex-col ${alignClass} gap-4`}>
        {eyebrow && (
          <span className={`eyebrow ${dark ? "bg-white/10 text-brand-200" : ""}`}>{eyebrow}</span>
        )}
        <h2
          className={`max-w-2xl text-3xl font-extrabold tracking-tight sm:text-4xl ${
            dark ? "text-white" : "text-ink-900"
          }`}
        >
          {title}
        </h2>
        {description && (
          <p className={`max-w-2xl text-base leading-relaxed ${dark ? "text-ink-300" : "text-ink-500"}`}>
            {description}
          </p>
        )}
      </div>
    </Reveal>
  );
}
