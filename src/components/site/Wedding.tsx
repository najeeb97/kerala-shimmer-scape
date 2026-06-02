import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const cards = [
  {
    tag: "Bridal Sarees",
    title: "The Mandap Edit",
    note: "Hand-zardosi Kanjivarams, temple-border silks, ivory korvai.",
    hue: "from-[#5C0E1F] via-[#8B0000] to-[#3B1F2B]",
  },
  {
    tag: "Wedding Wear",
    title: "Reception Couture",
    note: "Sculpted lehengas, draped gowns and sheer fantasies in gold.",
    hue: "from-[#3B1F2B] via-[#1f1f1f] to-[#0F0F0F]",
  },
  {
    tag: "Designer Atelier",
    title: "House Signatures",
    note: "Limited pieces from the Beauty Silks design studio.",
    hue: "from-[#1a1a1a] via-[#2a2018] to-[#5c4a1f]",
  },
  {
    tag: "Groom Collections",
    title: "Sherwani & Mundu",
    note: "Kasavu mundu, Jodhpuri sherwanis, bandhgalas tailored on premise.",
    hue: "from-[#0F0F0F] via-[#3a2a16] to-[#7a5a26]",
  },
];

export function Wedding() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [80, -80]);

  return (
    <section id="wedding" ref={ref} className="relative py-32 md:py-44 overflow-hidden">
      <motion.div
        style={{ y }}
        className="absolute -top-20 right-0 w-[60vw] h-[60vw] rounded-full bg-primary/10 blur-[140px] -z-0"
      />
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-wrap items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <p className="text-[11px] uppercase tracking-[0.4em] text-primary mb-6">— The Wedding House</p>
            <h2 className="font-display text-5xl md:text-7xl leading-[0.95] text-ivory">
              Couture for the<br />
              <span className="italic font-serif text-gradient-gold">most sacred day.</span>
            </h2>
          </div>
          <p className="max-w-sm text-foreground/65 font-light">
            From the bride's first drape to the groom's mundu — a complete
            wedding wardrobe, curated under one roof.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {cards.map((c, i) => (
            <motion.article
              key={c.title}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 1, delay: (i % 2) * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="group relative overflow-hidden rounded-sm aspect-[4/5] cursor-pointer"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${c.hue}`} />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,oklch(0.78_0.14_82/_0.35),transparent_60%)]" />

              {/* Floating silk shapes */}
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -right-10 -bottom-10 w-2/3 h-2/3 rounded-full bg-primary/20 blur-3xl group-hover:scale-125 transition-transform duration-1000" />
                <div className="absolute left-10 top-10 w-32 h-32 rounded-full border border-primary/30 group-hover:scale-150 transition-transform duration-[1500ms]" />
              </div>

              {/* Decorative line */}
              <div className="absolute top-8 left-8 right-8 flex items-center gap-3">
                <span className="text-[10px] uppercase tracking-[0.4em] text-primary">{c.tag}</span>
                <span className="flex-1 h-px bg-gradient-to-r from-primary/60 to-transparent" />
                <span className="text-[10px] text-primary/70">0{i + 1}</span>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10">
                <h3 className="font-display text-3xl md:text-5xl text-ivory mb-3 transition-transform duration-700 group-hover:-translate-y-1">
                  {c.title}
                </h3>
                <p className="text-sm text-ivory/70 max-w-md font-light leading-relaxed">{c.note}</p>
                <div className="mt-6 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.3em] text-primary">
                  Discover <span className="transition-transform duration-500 group-hover:translate-x-2">→</span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}