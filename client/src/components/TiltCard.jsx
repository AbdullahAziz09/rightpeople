import { useRef, useState } from "react";

export default function TiltCard({ children, className = "", max = 10, glare = true }) {
  const ref = useRef(null);
  const [style, setStyle] = useState({});
  const [glareStyle, setGlareStyle] = useState({ opacity: 0 });

  const handleMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;

    const rotateX = (0.5 - y) * max;
    const rotateY = (x - 0.5) * max;

    setStyle({
      transform: `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`,
    });

    if (glare) {
      setGlareStyle({
        opacity: 0.12,
        background: `radial-gradient(circle at ${x * 100}% ${y * 100}%, white, transparent 60%)`,
      });
    }
  };

  const handleLeave = () => {
    setStyle({ transform: "perspective(900px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)" });
    setGlareStyle({ opacity: 0 });
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ ...style, transition: "transform 0.25s ease-out", transformStyle: "preserve-3d" }}
      className={`relative will-change-transform ${className}`}
    >
      {children}
      {glare && (
        <div
          className="pointer-events-none absolute inset-0 rounded-[inherit] transition-opacity duration-300"
          style={glareStyle}
        />
      )}
    </div>
  );
}
