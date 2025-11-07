import { useState } from 'react';
import { ShoppingCart, Menu, X, Instagram, Mail } from 'lucide-react';

export default function Navbar({ cartCount = 0 }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-black/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#home" className="flex items-center gap-2">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-black text-white font-bold">A</span>
            <span className="font-semibold tracking-tight">Art by You</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm">
            <a href="#hero" className="hover:text-black/80 text-black/60">Home</a>
            <a href="#shop" className="hover:text-black/80 text-black/60">Shop</a>
            <a href="#contact" className="hover:text-black/80 text-black/60">Contact</a>
            <div className="flex items-center gap-3 pl-2">
              <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram" className="p-2 rounded-md hover:bg-black/5">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="mailto:hello@example.com" aria-label="Email" className="p-2 rounded-md hover:bg-black/5">
                <Mail className="h-5 w-5" />
              </a>
              <a href="#shop" className="ml-2 inline-flex items-center gap-2 rounded-md bg-black text-white px-3 py-2 text-sm font-medium hover:bg-black/90">
                <ShoppingCart className="h-4 w-4" />
                <span>Cart ({cartCount})</span>
              </a>
            </div>
          </nav>

          <button onClick={() => setOpen(!open)} className="md:hidden inline-flex items-center justify-center rounded-md p-2 hover:bg-black/5">
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden border-t border-black/5 py-3 space-y-2">
            <a onClick={() => setOpen(false)} href="#hero" className="block px-2 py-2 rounded-md hover:bg-black/5">Home</a>
            <a onClick={() => setOpen(false)} href="#shop" className="block px-2 py-2 rounded-md hover:bg-black/5">Shop</a>
            <a onClick={() => setOpen(false)} href="#contact" className="block px-2 py-2 rounded-md hover:bg-black/5">Contact</a>
            <div className="flex items-center gap-3 px-2 pt-2">
              <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram" className="p-2 rounded-md hover:bg-black/5">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="mailto:hello@example.com" aria-label="Email" className="p-2 rounded-md hover:bg-black/5">
                <Mail className="h-5 w-5" />
              </a>
              <div className="ml-auto inline-flex items-center gap-2 rounded-md bg-black text-white px-3 py-2 text-sm font-medium">
                <ShoppingCart className="h-4 w-4" />
                <span>Cart ({cartCount})</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
