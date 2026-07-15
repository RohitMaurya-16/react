import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <header className="border-b border-slate-800 bg-slate-900/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link to="/" className="text-2xl font-bold text-cyan-400">
          ShopVerse
        </Link>

        <nav className="flex gap-4 text-sm font-medium text-slate-300 sm:gap-6">
          <Link to="/" className="transition hover:text-white">
            Home
          </Link>
          <Link to="/product" className="transition hover:text-white">
            Products
          </Link>
          <Link to="/about" className="transition hover:text-white">
            About
          </Link>
        </nav>
      </div>
    </header>
  )
}

export default Navbar