import { motion } from "framer-motion";
import { SilkScene } from "./SilkScene";
import { useEffect, useState } from "react";

export function Hero() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <section id="top" className="relative min-h-[100svh] w-full overflow-hidden">
      {/* 3D silk background */}
      <div className="absolute inset-0">
        {mounted ? <SilkScene /> : <div className="absolute inset-0 bg-gradient-luxury" />}
      </div>

      {/* Aurora + grain + vignette */}
      <div className="hero-aurora pointer-events-none absolute inset-0" />
      <div className="grain" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background/30 via-transparent to-background" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,oklch(0.97_0.018_85/_0.7)_92%)]" />

      {/* Floating gold orb accents */}
      <motion.div
        aria-hidden
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, duration: 1.6 }}
        className="pointer-events-none absolute -top-24 -right-24 h-[420px] w-[420px] rounded-full opacity-60 blur-3xl"
        style={{ background: "radial-gradient(circle, oklch(0.78 0.14 82 / 0.55), transparent 70%)" }}
      />
      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1.6 }}
        className="pointer-events-none absolute -bottom-32 -left-24 h-[460px] w-[460px] rounded-full opacity-50 blur-3xl"
        style={{ background: "radial-gradient(circle, oklch(0.88 0.05 85 / 0.65), transparent 70%)" }}
      />

      {/* Hero copy */}
      <div className="relative z-10 flex min-h-[100svh] flex-col">
        <div className="flex-1 flex items-center pt-24 pb-12 md:pt-0 md:pb-0">
          <div className="mx-auto max-w-7xl w-full px-5 sm:px-6 lg:px-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 1 }}
              className="mb-6 inline-flex items-center gap-3 rounded-full border border-primary/30 bg-background/40 backdrop-blur-md px-4 py-1.5"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
              <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.4em] sm:tracking-[0.5em] text-primary/90">
                By the Arabian Sea · Chavakkad
              </p>
            </motion.div>

            <h1 className="font-display text-[2.75rem] xs:text-5xl sm:text-6xl md:text-8xl lg:text-[9rem] leading-[0.95] text-ivory max-w-5xl">
              {["Threads", "of", "Heritage,"].map((w, i) => (
                <motion.span
                  key={i}
                  initial={{ y: 120, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4 + i * 0.12, duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
                  className="inline-block mr-3 md:mr-6"
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
              className="mt-8 md:mt-10 max-w-xl text-sm sm:text-base md:text-lg text-foreground/75 font-light leading-relaxed"
            >
              Exclusive wedding collections and a complete family shop — Kerala's
              premier destination for bridal silks, designer ensembles, and
              everyday luxury.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.45, duration: 1 }}
              className="mt-8 md:mt-10 flex flex-wrap items-center gap-4 sm:gap-5"
            >
              <a
                href="#wedding"
                className="group inline-flex items-center gap-3 bg-gradient-gold text-primary-foreground px-6 sm:px-8 py-3.5 sm:py-4 rounded-full text-[11px] sm:text-[12px] uppercase tracking-[0.25em] sm:tracking-[0.3em] font-medium shadow-gold hover:shadow-luxury transition-all hover:-translate-y-0.5"
              >
                Explore Bridal
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </a>
              <a
                href="#collections"
                className="inline-flex items-center gap-3 text-[11px] sm:text-[12px] uppercase tracking-[0.25em] sm:tracking-[0.3em] text-foreground/85 border-b border-primary/40 pb-1 hover:text-primary transition-colors"
              >
                View Collections
              </a>
            </motion.div>

            {/* Stat strip — premium touch */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.7, duration: 1 }}
              className="mt-10 md:mt-14 grid grid-cols-3 gap-4 sm:gap-8 max-w-xl"
            >
              {[
                { n: "40+", l: "Years of Trust" },
                { n: "10k+", l: "Happy Brides" },
                { n: "500+", l: "Curated Drapes" },
              ].map((s) => (
                <div key={s.l} className="border-l border-primary/30 pl-3 sm:pl-4">
                  <div className="font-display text-2xl sm:text-3xl md:text-4xl text-gradient-gold">{s.n}</div>
                  <div className="mt-1 text-[9px] sm:text-[10px] uppercase tracking-[0.2em] text-foreground/60">{s.l}</div>
                </div>
              ))}
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
          <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10 py-4 sm:py-5 flex flex-wrap items-center justify-between gap-3 text-[9px] sm:text-[10px] uppercase tracking-[0.25em] sm:tracking-[0.3em] text-foreground/70">
            <span>· 40+ Years of Trust</span>
            <span className="hidden sm:inline">· Kanjivaram · Banarasi · Kerala Kasavu</span>
            <span>· Bridal Studio by Appointment</span>
            <span className="text-primary">Scroll ↓</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
