const About = () => {
  return (
    <section className="rounded-3xl border border-slate-800 bg-slate-900/70 p-8 shadow-2xl shadow-black/20 sm:p-10">
      <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
        About the Store
      </p>
      <h1 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
        A small shop built to explain React routing clearly.
      </h1>
      <p className="max-w-3xl text-lg leading-8 text-slate-300">
        This project demonstrates how React Router lets you create pages, link between them, and navigate to individual items with dynamic paths. Each route is simple, readable, and easy to extend.
      </p>
    </section>
  )
}

export default About