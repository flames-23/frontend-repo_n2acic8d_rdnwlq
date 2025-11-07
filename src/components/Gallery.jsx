import { useMemo, useState } from 'react';

const sampleArt = [
  {
    id: 'a1',
    title: 'Aurora Bloom',
    price: 180,
    img: 'https://images.unsplash.com/photo-1526312426976-593c2ebd6513?q=80&w=1600&auto=format&fit=crop',
    tags: ['abstract', 'print'],
  },
  {
    id: 'a2',
    title: 'Midnight Garden',
    price: 240,
    img: 'https://images.unsplash.com/photo-1549887534-1541e9326605?q=80&w=1600&auto=format&fit=crop',
    tags: ['floral', 'original'],
  },
  {
    id: 'a3',
    title: 'Ocean Dream',
    price: 120,
    img: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop',
    tags: ['seascape', 'print'],
  },
  {
    id: 'a4',
    title: 'Golden Hour',
    price: 320,
    img: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1600&auto=format&fit=crop',
    tags: ['landscape', 'original'],
  },
];

export default function Gallery({ onAddToCart }) {
  const [filter, setFilter] = useState('all');
  const items = useMemo(() => {
    if (filter === 'all') return sampleArt;
    return sampleArt.filter(a => a.tags.includes(filter));
  }, [filter]);

  return (
    <section id="shop" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Shop Artwork</h2>
            <p className="text-gray-600 mt-1">A selection of originals and high-quality prints.</p>
          </div>
          <div className="inline-flex gap-2 bg-white p-1 rounded-lg shadow-sm ring-1 ring-black/5">
            {['all', 'original', 'print'].map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-3 py-1.5 text-sm rounded-md ${filter === f ? 'bg-black text-white' : 'text-gray-700 hover:bg-black/5'}`}
              >
                {f.charAt(0).toUpperCase() + f.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((art) => (
            <article key={art.id} className="group bg-white rounded-xl overflow-hidden shadow-sm ring-1 ring-black/5">
              <div className="aspect-square overflow-hidden">
                <img src={art.img} alt={art.title} className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" />
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold">{art.title}</h3>
                  <span className="font-medium">${'{'}art.price{'}'}</span>
                </div>
                <button
                  onClick={() => onAddToCart(art)}
                  className="mt-4 w-full inline-flex items-center justify-center rounded-md bg-black px-4 py-2 text-white text-sm font-medium hover:bg-black/90"
                >
                  Add to cart
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
