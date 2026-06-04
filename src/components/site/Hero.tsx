import { motion } from "framer-motion";
import { SilkScene } from "./SilkScene";
import { useEffect, useState } from "react";

export function Hero() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <section id="top" className="relative h-[100svh] w-full overflow-hidden">
      <div className="absolute inset-0">
        {mounted ? <SilkScene /> : <div className="absolute inset-0 bg-gradient-luxury" />}
      </div>

      {/* Vignette overlays */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background/20 via-transparent to-background" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,oklch(0.97_0.018_85/_0.7)_90%)]" />

      {/* Hero copy */}
      <div className="relative z-10 h-full flex flex-col">
        <div className="flex-1 flex items-center">
          <div className="mx-auto max-w-7xl w-full px-6 lg:px-10">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 1 }}
              className="text-[11px] uppercase tracking-[0.5em] text-primary/90 mb-6"
            >
              ⌘ By the Arabian Sea · Chavakkad, Kerala
            </motion.p>

            <h1 className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-[9rem] leading-[0.95] text-ivory max-w-5xl">
              {["Threads", "of", "Heritage,"].map((w, i) => (
                <motion.span
                  key={i}
                  initial={{ y: 120, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4 + i * 0.12, duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
                  className="inline-block mr-4 md:mr-6"
                >
                  {w}
                </motion.span>
              ))}
              <br />
              <motion.span
                initial={{ y: 120, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.85, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                className="inline-block italic font-serif text-gradient-gold"
              >
                woven for dreams.
              </motion.span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 1 }}
              className="mt-10 max-w-xl text-base md:text-lg text-foreground/70 font-light leading-relaxed"
            >
              Exclusive wedding collections and a complete family shop — Kerala's
              premier destination for bridal silks, designer ensembles, and
              everyday luxury.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.45, duration: 1 }}
              className="mt-10 flex flex-wrap items-center gap-5"
            >
              <a
                href="#wedding"
                className="group inline-flex items-center gap-3 bg-gradient-gold text-primary-foreground px-8 py-4 rounded-full text-[12px] uppercase tracking-[0.3em] font-medium shadow-gold hover:shadow-luxury transition-all"
              >
                Explore Bridal
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </a>
              <a
                href="#collections"
                className="inline-flex items-center gap-3 text-[12px] uppercase tracking-[0.3em] text-foreground/85 border-b border-primary/40 pb-1 hover:text-primary transition-colors"
              >
                View Collections
              </a>
            </motion.div>
          </div>
        </div>

        {/* Bottom ticker */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 1.2 }}
          className="border-t border-primary/15 bg-background/40 backdrop-blur-xl"
        >
          <div className="mx-auto max-w-7xl px-6 lg:px-10 py-5 flex flex-wrap items-center justify-between gap-4 text-[10px] uppercase tracking-[0.3em] text-foreground/70">
            <span>· 40+ Years of Trust</span>
            <span>· Kanjivaram · Banarasi · Kerala Kasavu</span>
            <span>· Bridal Studio by Appointment</span>
            <span className="text-primary">Scroll to discover ↓</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}