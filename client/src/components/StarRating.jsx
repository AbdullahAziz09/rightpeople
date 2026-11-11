import { Star, StarHalf } from "lucide-react";

export default function StarRating({ rating }) {
  const full = Math.floor(rating);
  const hasHalf = rating - full >= 0.5;
  return (
    <div className="flex items-center gap-1 text-amber-400">
      {Array.from({ length: full }).map((_, i) => (
        <Star key={i} size={16} fill="currentColor" strokeWidth={0} />
      ))}
      {hasHalf && <StarHalf size={16} fill="currentColor" strokeWidth={0} />}
      <span className="ml-1 text-sm font-semibold text-ink-700">{rating}</span>
    </div>
  );
}
