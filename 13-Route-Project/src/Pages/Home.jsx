import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <section className="grid items-center gap-8 rounded-3xl border border-slate-800 bg-slate-900/70 p-8 shadow-2xl shadow-black/20 lg:grid-cols-[1.2fr_0.8fr] lg:p-12">
      <div>
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
          React Routing Demo
        </p>
        <h1 className="mb-4 text-4xl font-bold text-white sm:text-5xl">
          Shop smarter with route-based product pages.
        </h1>
        <p className="mb-6 max-w-2xl text-lg text-slate-300">
          This simple e-commerce layout shows how React Router helps you move between pages like Home, Products, About, and dynamic product details.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            to="/product"
            className="rounded-full bg-cyan-500 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-400"
          >
            Explore Products
          </Link>
          <Link
            to="/about"
            className="rounded-full border border-slate-700 px-6 py-3 font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-white"
          >
            Learn More
          </Link>
        </div>
      </div>

      <div className="rounded-2xl border border-slate-800 bg-slate-800/70 p-6">
        <p className="mb-3 text-sm uppercase tracking-[0.3em] text-slate-400">
          Featured Category
        </p>
        <h2 className="mb-2 text-2xl font-semibold text-white">Summer Essentials</h2>
        <p className="mb-4 text-slate-300">
          Discover fresh style with gear built for everyday comfort.
        </p>
        <div className="rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 p-4 text-white">
          Free shipping on orders above $100
        </div>
      </div>
    </section>
  )
}

export default Home