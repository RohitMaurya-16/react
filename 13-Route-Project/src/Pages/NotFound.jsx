import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <section className="rounded-3xl border border-slate-800 bg-slate-900/70 p-10 text-center shadow-2xl shadow-black/20">
      <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
        404 Error
      </p>
      <h1 className="mb-4 text-4xl font-bold text-white">Page not found</h1>
      <p className="mb-6 text-lg text-slate-300">
        The route you tried does not exist yet. Go back to the home page to continue exploring.
      </p>
      <Link to="/" className="rounded-full bg-cyan-500 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-400">
        Return Home
      </Link>
    </section>
  )
}

export default NotFound
