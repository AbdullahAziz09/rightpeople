export default function FlipCard({ index, title, description, image }) {
  return (
    <div className="group h-full" style={{ perspective: 1200 }}>
      <div
        className="relative h-full min-h-[230px] w-full transition-transform duration-700 ease-out [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]"
      >
        {/* front */}
        <div className="absolute inset-0 overflow-hidden rounded-2xl ring-1 ring-ink-200 [backface-visibility:hidden]">
          {image && (
            <img
              src={image}
              alt=""
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-ink-950/85 via-ink-950/30 to-transparent" />
          <div className="relative flex h-full flex-col items-center justify-end p-8 text-center">
            <span className="text-sm font-bold text-brand-300">0{index + 1}</span>
            <h3 className="mt-2 text-lg font-bold text-white">{title}</h3>
          </div>
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
