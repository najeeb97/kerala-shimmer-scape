import { motion } from "framer-motion";

const tiles = [
  { hue: "from-[#8B0000] to-[#3B1F2B]", label: "Bridal Story" },
  { hue: "from-[#C9A227] to-[#5C0E1F]", label: "Reception Glow" },
  { hue: "from-[#F7E7CE] to-[#C9A227]", label: "Kasavu Diaries" },
  { hue: "from-[#3B1F2B] to-[#0F0F0F]", label: "Mandap Moments" },
  { hue: "from-[#5C0E1F] to-[#D4AF37]", label: "Mehendi Hour" },
  { hue: "from-[#0F0F0F] to-[#C9A227]", label: "Groom Files" },
];

export function Instagram() {
  return (
    <section className="relative py-32 md:py-44">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-16 flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="text-[11px] uppercase tracking-[0.4em] text-primary mb-6">— @beautysilks.chavakkad</p>
            <h2 className="font-display text-5xl md:text-7xl leading-[0.95] text-ivory">
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
              <div className={`absolute inset-0 bg-gradient-to-br ${t.hue} group-hover:scale-110 transition-transform duration-1000`} />
              <div className="absolute inset-0 bg-onyx/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute inset-0 flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <span className="text-[10px] uppercase tracking-[0.3em] text-ivory">{t.label}</span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}