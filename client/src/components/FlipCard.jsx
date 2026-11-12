export default function FlipCard({ index, title, description }) {
  return (
    <div className="group h-full" style={{ perspective: 1200 }}>
      <div
        className="relative h-full min-h-[230px] w-full transition-transform duration-700 ease-out [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]"
      >
        {/* front */}
        <div className="absolute inset-0 flex flex-col items-center justify-center rounded-2xl border border-ink-200 bg-white p-8 text-center [backface-visibility:hidden]">
          <span className="text-sm font-bold text-brand-600">0{index + 1}</span>
          <h3 className="mt-3 text-lg font-bold text-ink-900">{title}</h3>
        </div>

        {/* back */}
        <div
          className="absolute inset-0 flex h-full flex-col justify-center rounded-2xl bg-gradient-to-br from-brand-600 to-brand-800 p-8 text-white [backface-visibility:hidden] [transform:rotateY(180deg)]"
        >
          <span className="text-sm font-bold text-brand-200">0{index + 1}</span>
          <h3 className="mt-2 text-base font-bold text-white">{title}</h3>
          <p className="mt-3 text-sm leading-relaxed text-brand-100">{description}</p>
        </div>
      </div>
    </div>
  );
}
