import { motion } from "framer-motion";

const items = [
  {
    q: "My wedding saree from Beauty Silks felt like it was woven just for me — the gold work caught every light in the mandap.",
    name: "Anjali Menon",
    role: "Bride · Thrissur",
  },
  {
    q: "Three generations of our family shop here. The hospitality is as fine as the silk.",
    name: "Ravi Krishnan",
    role: "Patron since 1998",
  },
  {
    q: "The bridal stylist understood my vision in minutes. We walked out with the entire trousseau in one afternoon.",
    name: "Meera & Arjun",
    role: "Newlyweds · Kochi",
  },
];

export function Testimonials() {
  return (
    <section className="relative py-32 md:py-44">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-20 flex flex-wrap items-end justify-between gap-8">
          <h2 className="font-display text-5xl md:text-7xl leading-[0.95] text-ivory max-w-2xl">
            Words from<br />
            <span className="italic font-serif text-gradient-gold">our patrons.</span>
          </h2>
          <div className="flex items-center gap-2 text-primary">
            {"★★★★★".split("").map((s, i) => <span key={i} className="text-2xl">{s}</span>)}
            <span className="text-sm text-foreground/60 ml-3">4.9 · 2,800+ reviews</span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {items.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="glass rounded-sm p-10 relative"
            >
              <div className="font-display text-7xl text-primary/40 leading-none mb-4">"</div>
              <blockquote className="font-serif text-xl leading-relaxed text-ivory/90 italic">
                {t.q}
              </blockquote>
              <figcaption className="mt-8 pt-6 border-t border-primary/15">
                <div className="text-ivory font-medium">{t.name}</div>
                <div className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground mt-1">{t.role}</div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}