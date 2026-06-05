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
      className="relative border-t border-primary/15 bg-onyx overflow-hidden"
    >
      {/* animated horizon glow */}
      <motion.div
        style={{ opacity: glowOpacity }}
        className="pointer-events-none absolute -bottom-1/3 left-1/2 -translate-x-1/2 w-[140%] h-[80vh] rounded-full bg-[radial-gradient(ellipse_at_center,oklch(0.78_0.14_82/0.35),transparent_60%)] blur-2xl"
      />

      {/* drifting gold particles */}
      {Array.from({ length: 10 }).map((_, i) => (
        <motion.span
          key={i}
          aria-hidden
          className="absolute w-1 h-1 rounded-full bg-primary/60"
          style={{ left: `${(i * 47) % 100}%`, bottom: `${(i * 23) % 60}%` }}
          animate={{ y: [0, -60, 0], opacity: [0.1, 0.8, 0.1] }}
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
            <p className="text-sm text-foreground/65 max-w-sm font-light leading-relaxed">
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
                  className="px-4 py-2 rounded-full border border-primary/30 text-[10px] uppercase tracking-[0.3em] text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
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
              <div className="text-[11px] uppercase tracking-[0.3em] text-primary mb-4">{col.title}</div>
              <ul className="space-y-2 text-sm text-foreground/70">
                {col.links.map(([label, href], i) => (
                  <li key={label}>
                    <motion.a
                      href={href}
                      whileHover={{ x: 6 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      className="inline-flex items-center gap-2 hover:text-primary"
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

        <div className="mt-10 pt-8 border-t border-primary/10 flex flex-wrap justify-between items-center gap-4 text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
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