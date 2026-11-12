const DEPTH = 9;

export default function CubeIcon({ icon: Icon, size = 56 }) {
  return (
    <div
      className="relative"
      style={{ width: size, height: size, perspective: 500 }}
    >
      <div
        className="relative h-full w-full transition-transform duration-500 ease-out group-hover:[transform:rotateX(-10deg)_rotateY(34deg)]"
        style={{
          transformStyle: "preserve-3d",
          transform: "rotateX(-10deg) rotateY(18deg)",
        }}
      >
        {/* bottom edge (darkest, gives grounded depth) */}
        <div
          className="absolute inset-x-0 bottom-0 rounded-b-xl bg-brand-900"
          style={{
            height: DEPTH,
            transformOrigin: "bottom",
            transform: `rotateX(-90deg) translateZ(${DEPTH}px)`,
          }}
        />
        {/* right edge */}
        <div
          className="absolute inset-y-0 right-0 rounded-r-xl bg-brand-800"
          style={{
            width: DEPTH,
            transformOrigin: "right",
            transform: `rotateY(90deg) translateZ(${DEPTH}px)`,
          }}
        />
        {/* front face */}
        <div
          className="absolute inset-0 flex items-center justify-center rounded-xl bg-gradient-to-br from-brand-400 to-brand-600 text-white shadow-[0_8px_20px_-6px_rgba(28,77,245,0.6)]"
          style={{ transform: `translateZ(${DEPTH}px)` }}
        >
          <Icon size={size * 0.4} />
        </div>
      </div>
    </div>
  );
}
