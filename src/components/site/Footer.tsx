import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function Footer() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end end"] });
  const wordmarkY = useTransform(scrollYProgress, [0, 1], [80, -20]);
  const wordmarkScale = useTransform(scrollYProgress, [0, 1], [0.9, 1.05]);
  const glowOpacity = useTransform(scrollYProgress, [0, 0.6, 1], [0, 0.6, 0.9]);

  return (
    <footer
      ref={ref}
      className="relative border-t border-[#D4AF37]/20 overflow-hidden bg-[#0a0604] text-[#F7E7CE]"
    >
      {/* animated horizon glow */}
      <motion.div
        style={{ opacity: glowOpacity }}
        className="pointer-events-none absolute -bottom-1/3 left-1/2 -translate-x-1/2 w-[140%] h-[80vh] rounded-full blur-2xl"
      >
        <div className="w-full h-full rounded-full" style={{ background: "radial-gradient(ellipse at center, rgba(212,175,55,0.45), transparent 60%)" }} />
      </motion.div>

      {/* warm corner glows */}
      <div className="pointer-events-none absolute -top-32 -right-32 h-[460px] w-[460px] rounded-full opacity-30 blur-3xl" style={{ background: "radial-gradient(circle, #D4AF37 0%, transparent 70%)" }} />
      <div className="pointer-events-none absolute -bottom-40 -left-32 h-[520px] w-[520px] rounded-full opacity-25 blur-3xl" style={{ background: "radial-gradient(circle, #B76E5A 0%, transparent 70%)" }} />

      {/* grain */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.08] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
        }}
      />


      {/* drifting gold particles */}
      {Array.from({ length: 14 }).map((_, i) => (
        <motion.span
          key={i}
          aria-hidden
          className="absolute w-1 h-1 rounded-full"
          style={{ left: `${(i * 47) % 100}%`, bottom: `${(i * 23) % 60}%`, background: "#F7C76A" }}
          animate={{ y: [0, -80, 0], opacity: [0.1, 0.9, 0.1] }}
          transition={{ duration: 6 + (i % 3), repeat: Infinity, delay: i * 0.4, ease: "easeInOut" }}
        />
      ))}

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10 pt-20 pb-10">
        <div className="grid md:grid-cols-4 gap-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="md:col-span-2"
          >
            <div className="font-display text-3xl text-gradient-gold mb-3">Beauty Silks</div>
            <p className="text-sm text-[#F7E7CE]/70 max-w-sm font-light leading-relaxed">
              Exclusive wedding collections in a complete family shop —
              woven with heritage from Chavakkad, by the Arabian Sea.
            </p>

            <div className="mt-6 flex items-center gap-3">
              {["Instagram", "WhatsApp", "Maps"].map((s, i) => (
                <motion.a
                  key={s}
                  href="#"
                  whileHover={{ y: -3, scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.08 }}
                  className="px-4 py-2 rounded-full border border-[#D4AF37]/40 text-[10px] uppercase tracking-[0.3em] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#1a0f0a] transition-colors"
                >
                  {s}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {[
            { title: "Shop", links: [["Bridal Sarees", "#wedding"], ["Groom Collections", "#wedding"], ["Family Fashion", "#family"], ["Designer Atelier", "#collections"]] },
            { title: "House", links: [["Heritage", "#about"], ["Visit", "#contact"], ["Bridal Studio", "tel:+919847000000"], ["Instagram", "#"]] },
          ].map((col, ci) => (
            <motion.div
              key={col.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.1 + ci * 0.08 }}
            >
              <div className="text-[11px] uppercase tracking-[0.3em] text-[#D4AF37] mb-4">{col.title}</div>
              <ul className="space-y-2 text-sm text-[#F7E7CE]/70">
                {col.links.map(([label, href], i) => (
                  <li key={label}>
                    <motion.a
                      href={href}
                      whileHover={{ x: 6 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      className="inline-flex items-center gap-2 hover:text-[#D4AF37]"
                    >
                      <span className="w-0 group-hover:w-4 h-px bg-primary transition-all" />
                      {label}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* giant 3D wordmark */}
        <div className="relative mt-20 h-[22vw] min-h-[140px] flex items-center justify-center" style={{ perspective: 1400 }}>
          <motion.div
            style={{ y: wordmarkY, scale: wordmarkScale, transformStyle: "preserve-3d", rotateX: useTransform(scrollYProgress, [0, 1], [25, -5]) }}
            className="select-none"
          >
            <span className="block text-center font-display italic text-[18vw] leading-none text-gradient-gold tracking-tight">
              Beauty&nbsp;Silks
            </span>
          </motion.div>
          <motion.div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[linear-gradient(110deg,transparent_30%,oklch(1_0_0/0.35)_50%,transparent_70%)] mix-blend-overlay"
            animate={{ x: ["-60%", "60%"] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        <div className="mt-10 pt-8 border-t border-[#D4AF37]/15 flex flex-wrap justify-between items-center gap-4 text-[11px] uppercase tracking-[0.3em] text-[#F7E7CE]/50">
          <span>© {new Date().getFullYear()} Beauty Silks · Chavakkad, Kerala</span>
          <motion.span
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            Crafted with heritage
          </motion.span>
        </div>
      </div>
    </footer>
  );
}