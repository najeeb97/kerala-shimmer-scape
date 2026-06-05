import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import kanjivaram from "@/assets/product-kanjivaram.jpg";
import banarasi from "@/assets/product-banarasi.jpg";
import kasavu from "@/assets/product-kasavu.jpg";
import ivoryLehenga from "@/assets/bridal-ivory-lehenga.jpg";
import sherwani from "@/assets/product-sherwani.jpg";

const slides = [
  { tag: "01 · Mandap", title: "Crimson Kanjivaram", sub: "Pure mulberry silk · 24k zari", image: kanjivaram },
  { tag: "02 · Reception", title: "Champagne Banarasi", sub: "Hand-woven · meenakari motifs", image: banarasi },
  { tag: "03 · Heritage", title: "Kerala Kasavu", sub: "Off-white cotton · gold border", image: kasavu },
  { tag: "04 · Couture", title: "Ivory Lehenga", sub: "Pearl-cut work · structured silhouette", image: ivoryLehenga },
  { tag: "05 · Groom", title: "Royal Sherwani", sub: "Raw silk · zardozi placement", image: sherwani },
];

export function HorizontalBridal() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const x = useTransform(scrollYProgress, [0, 1], ["2%", "-82%"]);
  const bar = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section ref={ref} className="relative h-[420vh] bg-onyx" data-cursor>
      <div className="sticky top-0 h-screen overflow-hidden flex flex-col">
        <div className="mx-auto max-w-7xl w-full px-6 lg:px-10 pt-24 pb-8 flex items-end justify-between">
          <div>
            <p className="text-[11px] uppercase tracking-[0.4em] text-primary mb-4">— Bridal Studio</p>
            <h2 className="font-display text-4xl md:text-6xl text-ivory leading-[0.95]">
              The drape <span className="italic font-serif text-gradient-gold">scrolls with you.</span>
            </h2>
          </div>
          <div className="hidden md:block text-[10px] uppercase tracking-[0.4em] text-foreground/50">
            Scroll →
          </div>
        </div>

        <div className="flex-1 flex items-center overflow-hidden">
          <motion.div style={{ x }} className="flex gap-8 px-10 will-change-transform">
            {slides.map((s, i) => (
              <article
                key={s.title}
                className="relative h-[68vh] w-[70vw] md:w-[44vw] lg:w-[36vw] flex-shrink-0 overflow-hidden rounded-sm group"
              >
                <img
                  src={s.image}
                  alt={s.title}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1500ms] ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-onyx/95 via-onyx/30 to-onyx/10" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,oklch(0.78_0.14_82/_0.18),transparent_60%)]" />

                <div className="absolute top-8 left-8 right-8 flex items-center gap-3">
                  <span className="text-[10px] uppercase tracking-[0.4em] text-primary">{s.tag}</span>
                  <span className="flex-1 h-px bg-gradient-to-r from-primary/60 to-transparent" />
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10">
                  <h3 className="font-display text-3xl md:text-5xl text-ivory mb-3">{s.title}</h3>
                  <p className="text-sm text-ivory/75 font-light">{s.sub}</p>
                  <div className="mt-6 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.3em] text-primary">
                    Enquire <span>→</span>
                  </div>
                </div>
              </article>
            ))}
          </motion.div>
        </div>

        <div className="mx-auto max-w-7xl w-full px-6 lg:px-10 py-8">
          <div className="h-px bg-primary/15 overflow-hidden">
            <motion.div style={{ width: bar }} className="h-full bg-gradient-gold" />
          </div>
        </div>
      </div>
    </section>
  );
}
