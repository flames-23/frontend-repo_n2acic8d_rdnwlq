import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-pink-100 via-rose-50 to-amber-50" />
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900"
            >
              Original Art, Prints, and Commissions
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-4 text-lg text-gray-700"
            >
              Explore a curated collection of contemporary artworks. Each piece is created with passion and attention to detail.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-8 flex gap-3"
            >
              <a href="#shop" className="inline-flex items-center rounded-md bg-black px-5 py-3 text-white font-medium hover:bg-black/90">Shop Art</a>
              <a href="#contact" className="inline-flex items-center rounded-md bg-white px-5 py-3 text-gray-900 font-medium border border-black/10 hover:bg-black/5">Commission Me</a>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl ring-1 ring-black/5">
              <img
                src="https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=1600&auto=format&fit=crop"
                alt="Studio"
                className="h-full w-full object-cover"
                loading="eager"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white/80 backdrop-blur rounded-xl p-4 shadow ring-1 ring-black/5">
              <p className="text-sm font-medium">Free worldwide shipping on prints</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
