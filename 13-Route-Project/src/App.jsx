import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Home from './Pages/Home'
import About from './Pages/About'
import Product from './Pages/Product'
import NotFound from './Pages/NotFound'
import Details from './Pages/Details'
import { Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      <main className="mx-auto flex min-h-[calc(100vh-8rem)] w-full max-w-7xl flex-col px-4 py-8 sm:px-6 lg:px-8">
        <Routes>
          {/* Basic route */}
          <Route path="/" element={<Home />} />

          {/* Another route */}
          <Route path="/about" element={<About />} />

          {/* Product listing page */}
          <Route path="/product" element={<Product />} />

          {/* Dynamic route using :id */}
          <Route path="/details/:id" element={<Details />} />

          {/* Fallback route for unknown paths */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />
    </div>
  )
}

export default App

// Original learning example kept as comments:
// <Routes>
//   <Route path='/' element={<Home />} />
//   <Route path='/about' element={<About />} />
//   <Route path='/product' element={<Product />} />
//   <Route path='*' element={<NotFound />} />
//   <Route path='/product/men' element={<Men />} />
//   <Route path='/product/women' element={<Women />} />
//   <Route path='/details/:id' element={<Details />} />
// </Routes>