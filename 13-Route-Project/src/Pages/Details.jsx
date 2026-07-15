import { useParams, Link } from 'react-router-dom'
import { products } from '../data/products'

const Details = () => {
  const { id } = useParams()
  const product = products.find((item) => item.id === Number(id))

  if (!product) {
    return (
      <section className="rounded-3xl border border-slate-800 bg-slate-900/70 p-8 text-center shadow-2xl shadow-black/20">
        <h1 className="mb-4 text-3xl font-bold text-white">Product not found</h1>
        <Link to="/product" className="text-cyan-400 underline">
          Back to products
        </Link>
      </section>
    )
  }

  return (
    <section className="rounded-3xl border border-slate-800 bg-slate-900/70 p-8 shadow-2xl shadow-black/20 sm:p-10">
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
        Dynamic Route Demo
      </p>
      <h1 className="mb-3 text-3xl font-bold text-white">{product.name}</h1>
      <p className="mb-4 text-slate-400">{product.category}</p>
      <p className="mb-6 text-lg text-slate-300">{product.description}</p>
      <div className="mb-6 rounded-2xl bg-slate-800/80 p-5 text-white">
        <p className="text-2xl font-semibold">Price: {product.price}</p>
      </div>
      <Link to="/product" className="text-cyan-400 underline">
        ← Back to all products
      </Link>
    </section>
  )
}

export default Details