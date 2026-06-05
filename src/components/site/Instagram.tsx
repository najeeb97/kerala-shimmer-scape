import { motion } from "framer-motion";
import mandap from "@/assets/wedding-mandap.jpg";
import reception from "@/assets/wedding-reception.jpg";
import kasavu from "@/assets/product-kasavu.jpg";
import kanjivaram from "@/assets/product-kanjivaram.jpg";
import mehendi from "@/assets/insta-mehendi.jpg";
import groom from "@/assets/wedding-groom.jpg";

const tiles = [
  { image: mandap, label: "Bridal Story" },
  { image: reception, label: "Reception Glow" },
  { image: kasavu, label: "Kasavu Diaries" },
  { image: kanjivaram, label: "Mandap Moments" },
  { image: mehendi, label: "Mehendi Hour" },
  { image: groom, label: "Groom Files" },
];

export function Instagram() {
  return (
    <section className="relative py-24 md:py-44">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
        <div className="mb-12 md:mb-16 flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="text-[11px] uppercase tracking-[0.4em] text-primary mb-4 md:mb-6">— @beautysilks.chavakkad</p>
            <h2 className="font-display text-4xl sm:text-5xl md:text-7xl leading-[0.95] text-ivory">
              Lived in. <span className="italic font-serif text-gradient-gold">Tagged.</span>
            </h2>
          </div>
          <a href="#" className="text-[11px] uppercase tracking-[0.3em] text-primary border-b border-primary/40 pb-1">
            Follow on Instagram →
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {tiles.map((t, i) => (
            <motion.a
              href="#"
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.06 }}
              className="group relative aspect-square overflow-hidden rounded-sm"
            >
              <img
                src={t.image}
                alt={t.label}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-onyx/85 via-transparent to-transparent" />
              <div className="absolute inset-0 bg-onyx/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute inset-x-0 bottom-0 p-3 md:p-4">
                <span className="text-[10px] uppercase tracking-[0.3em] text-ivory opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {t.label}
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
