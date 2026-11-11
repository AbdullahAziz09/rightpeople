import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="section flex flex-col items-center justify-center py-32 text-center">
      <span className="text-sm font-bold uppercase tracking-widest text-brand-600">404</span>
      <h1 className="mt-4 text-3xl font-extrabold text-ink-900 sm:text-4xl">
        Page Not Found
      </h1>
      <p className="mt-3 max-w-md text-sm text-ink-500">
        The page you're looking for doesn't exist or has moved.
      </p>
      <Link to="/" className="btn-primary mt-8">
        Back to Home
      </Link>
    </section>
  );
}
