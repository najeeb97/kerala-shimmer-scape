import { motion } from "framer-motion";

const products = [
  { name: "Mayura Kanjivaram", price: "₹ 84,500", tag: "Bridal Edit", hue: "from-[#8B0000] to-[#3B1F2B]" },
  { name: "Champagne Banarasi", price: "₹ 62,000", tag: "Reception", hue: "from-[#C9A227] to-[#5C0E1F]" },
  { name: "Kerala Kasavu Drape", price: "₹ 18,900", tag: "Heritage", hue: "from-[#FAF8F2] to-[#C9A227]" },
  { name: "Royal Ivory Sherwani", price: "₹ 48,000", tag: "Groom", hue: "from-[#F7E7CE] to-[#3B1F2B]" },
];

export function Featured() {
  return (
    <section id="collections" className="relative py-32 md:py-44">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-wrap items-end justify-between gap-8 mb-16">
          <div>
            <p className="text-[11px] uppercase tracking-[0.4em] text-primary mb-6">— Featured</p>
            <h2 className="font-display text-5xl md:text-7xl leading-[0.95] text-ivory">
              The Atelier<br />
              <span className="italic font-serif text-gradient-gold">Selects.</span>
            </h2>
          </div>
          <a href="#wedding" className="text-[11px] uppercase tracking-[0.3em] text-primary border-b border-primary/40 pb-1">
            View all collections →
          </a>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {products.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[3/4] overflow-hidden rounded-sm">
                <div className={`absolute inset-0 bg-gradient-to-br ${p.hue}`} />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,oklch(0.95_0.05_85/_0.3),transparent_60%)]" />
                <div className="absolute inset-0 bg-gradient-to-t from-onyx/80 via-transparent to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="font-display italic text-7xl text-ivory/15 group-hover:scale-110 transition-transform duration-1000">
                    0{i + 1}
                  </div>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="text-[9px] uppercase tracking-[0.3em] bg-onyx/60 text-primary px-3 py-1.5 rounded-full backdrop-blur">
                    {p.tag}
                  </span>
                </div>
                <div className="absolute bottom-4 right-4 w-10 h-10 rounded-full glass flex items-center justify-center text-primary opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                  →
                </div>
              </div>
              <div className="mt-5 flex items-baseline justify-between">
                <h3 className="font-display text-xl text-ivory">{p.name}</h3>
                <span className="text-sm text-primary font-light">{p.price}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}