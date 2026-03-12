import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="min-h-[60vh] flex flex-col items-center justify-center gap-4 px-6 text-center">
      <h1 className="text-4xl font-bold text-gold">Page not found</h1>
      <p className="text-white/75">The page you’re looking for doesn’t exist.</p>
      <Link
        to="/"
        className="px-4 py-2 rounded bg-gold text-nearblack font-semibold hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-nearblack"
      >
        Back home
      </Link>
    </section>
  );
}
