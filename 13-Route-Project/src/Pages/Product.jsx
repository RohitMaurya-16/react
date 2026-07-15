import { Link } from 'react-router-dom'
import { products } from '../data/products'

const Product = () => {
  return (
    <section className="space-y-6">
      <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-8 shadow-2xl shadow-black/20">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
          Products Page
        </p>
        <h1 className="mb-3 text-3xl font-bold text-white">Featured Items</h1>
        <p className="text-slate-300">
          Clicking a card takes you to a detail page using a dynamic URL.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {products.map((product) => (
          <div key={product.id} className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 shadow-lg shadow-black/20">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-400">
              {product.badge}
            </p>
            <h2 className="mb-2 text-2xl font-semibold text-white">{product.name}</h2>
            <p className="mb-2 text-sm text-slate-400">{product.category}</p>
            <p className="mb-4 text-slate-300">{product.description}</p>
            <div className="mb-4 flex items-center justify-between">
              <span className="text-xl font-semibold text-cyan-300">{product.price}</span>
              <Link
                to={`/details/${product.id}`}
                className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Product