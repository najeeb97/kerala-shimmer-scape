import { motion } from "framer-motion";
import kanjivaram from "@/assets/product-kanjivaram.jpg";
import banarasi from "@/assets/product-banarasi.jpg";
import kasavu from "@/assets/product-kasavu.jpg";
import sherwani from "@/assets/product-sherwani.jpg";

const products = [
  { name: "Mayura Kanjivaram", price: "₹ 84,500", tag: "Bridal Edit", image: kanjivaram },
  { name: "Champagne Banarasi", price: "₹ 62,000", tag: "Reception", image: banarasi },
  { name: "Kerala Kasavu Drape", price: "₹ 18,900", tag: "Heritage", image: kasavu },
  { name: "Royal Ivory Sherwani", price: "₹ 48,000", tag: "Groom", image: sherwani },
];

export function Featured() {
  return (
    <section id="collections" className="relative py-24 md:py-44">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-12 md:mb-16">
          <div>
            <p className="text-[11px] uppercase tracking-[0.4em] text-primary mb-4 md:mb-6">— Featured</p>
            <h2 className="font-display text-4xl sm:text-5xl md:text-7xl leading-[0.95] text-ivory">
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
                <img
                  src={p.image}
                  alt={p.name}
                  loading="lazy"
                  width={768}
                  height={1024}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-onyx/85 via-onyx/10 to-transparent" />
                <div className="absolute top-3 left-3 md:top-4 md:left-4">
                  <span className="text-[9px] uppercase tracking-[0.3em] bg-onyx/70 text-primary px-2.5 py-1 md:px-3 md:py-1.5 rounded-full backdrop-blur">
                    {p.tag}
                  </span>
                </div>
                <div className="absolute bottom-3 right-3 md:bottom-4 md:right-4 w-9 h-9 md:w-10 md:h-10 rounded-full glass flex items-center justify-center text-primary opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                  →
                </div>
              </div>
              <div className="mt-4 md:mt-5 flex items-baseline justify-between gap-2">
                <h3 className="font-display text-base sm:text-lg md:text-xl text-ivory leading-tight">{p.name}</h3>
                <span className="text-xs md:text-sm text-primary font-light whitespace-nowrap">{p.price}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
