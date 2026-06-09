import { motion } from "framer-motion";
import { RoyalScene } from "./RoyalScene";
import { useEffect, useState } from "react";

export function Hero() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <section
      id="top"
      className="relative min-h-[100svh] w-full overflow-hidden bg-[#0a0604] text-[#F7E7CE]"
    >
      {/* 3D Royal Midnight scene */}
      <div className="absolute inset-0">
        {mounted ? (
          <RoyalScene />
        ) : (
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse at top, #2a1810, #0a0604 70%)",
            }}
          />
        )}
      </div>

      {/* Cinematic overlays */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,#0a0604_92%)]" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0a0604]/40 via-transparent to-[#0a0604]" />

      {/* Floating gold glows */}
      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 1.6 }}
        className="pointer-events-none absolute -top-32 -right-32 h-[460px] w-[460px] rounded-full opacity-40 blur-3xl"
        style={{ background: "radial-gradient(circle, #D4AF37 0%, transparent 70%)" }}
      />
      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1.6 }}
        className="pointer-events-none absolute -bottom-40 -left-32 h-[520px] w-[520px] rounded-full opacity-35 blur-3xl"
        style={{ background: "radial-gradient(circle, #B76E5A 0%, transparent 70%)" }}
      />

      {/* Subtle grain */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.08] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex min-h-[100svh] flex-col">
        <div className="flex-1 flex items-center pt-24 pb-12 md:pt-0 md:pb-0">
          <div className="mx-auto max-w-7xl w-full px-5 sm:px-6 lg:px-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 1 }}
              className="mb-6"
            />


            <h1 className="font-display text-[2.75rem] sm:text-6xl md:text-8xl lg:text-[9rem] leading-[0.95] max-w-5xl text-[#F7E7CE]">
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
                className="inline-block italic font-serif"
                style={{
                  background:
                    "linear-gradient(135deg, #F7E7CE 0%, #D4AF37 45%, #B8860B 75%, #F7C76A 100%)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                }}
              >
                woven for dreams.
              </motion.span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 1 }}
              className="mt-8 md:mt-10 max-w-xl text-sm sm:text-base md:text-lg font-light leading-relaxed text-[#F7E7CE]/75"
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
                className="group inline-flex items-center gap-3 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full text-[11px] sm:text-[12px] uppercase tracking-[0.25em] sm:tracking-[0.3em] font-medium transition-all hover:-translate-y-0.5"
                style={{
                  background:
                    "linear-gradient(135deg, #F7C76A 0%, #D4AF37 50%, #B8860B 100%)",
                  color: "#1a0f0a",
                  boxShadow: "0 10px 40px -10px rgba(212,175,55,0.5)",
                }}
              >
                Explore Bridal
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </a>
              <a
                href="#collections"
                className="inline-flex items-center gap-3 text-[11px] sm:text-[12px] uppercase tracking-[0.25em] sm:tracking-[0.3em] text-[#F7E7CE]/85 border-b border-[#D4AF37]/50 pb-1 hover:text-[#D4AF37] transition-colors"
              >
                View Collections
              </a>
            </motion.div>

            {/* Stat strip */}
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
                <div key={s.l} className="border-l border-[#D4AF37]/40 pl-3 sm:pl-4">
                  <div
                    className="font-display text-2xl sm:text-3xl md:text-4xl"
                    style={{
                      background:
                        "linear-gradient(135deg, #F7E7CE, #D4AF37 60%, #B8860B)",
                      WebkitBackgroundClip: "text",
                      backgroundClip: "text",
                      color: "transparent",
                    }}
                  >
                    {s.n}
                  </div>
                  <div className="mt-1 text-[9px] sm:text-[10px] uppercase tracking-[0.2em] text-[#F7E7CE]/60">
                    {s.l}
                  </div>
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
          className="border-t border-[#D4AF37]/20 bg-black/40 backdrop-blur-xl"
        >
          <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10 py-4 sm:py-5 flex flex-wrap items-center justify-between gap-3 text-[9px] sm:text-[10px] uppercase tracking-[0.25em] sm:tracking-[0.3em] text-[#F7E7CE]/70">
            <span>· 40+ Years of Trust</span>
            <span className="hidden sm:inline">· Kanjivaram · Banarasi · Kerala Kasavu</span>
            <span>· Bridal Studio by Appointment</span>
            <span className="text-[#D4AF37]">Scroll ↓</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
