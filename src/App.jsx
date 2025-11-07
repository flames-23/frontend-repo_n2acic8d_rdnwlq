import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Gallery from './components/Gallery'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  const [cart, setCart] = useState([])

  const handleAddToCart = (item) => {
    setCart((prev) => [...prev, item])
  }

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar cartCount={cart.length} />
      <main>
        <Hero />
        <Gallery onAddToCart={handleAddToCart} />
        <About />
        <Contact />
      </main>
      <footer className="border-t border-black/5 py-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-600">
          <p>© {new Date().getFullYear()} Art by You. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#shop" className="hover:text-gray-900">Shop</a>
            <a href="#contact" className="hover:text-gray-900">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
