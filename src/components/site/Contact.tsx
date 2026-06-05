import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { useRef, MouseEvent } from "react";

function TiltCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const rx = useSpring(useMotionValue(0), { stiffness: 150, damping: 18 });
  const ry = useSpring(useMotionValue(0), { stiffness: 150, damping: 18 });
  const gx = useSpring(useMotionValue(50), { stiffness: 120, damping: 20 });
  const gy = useSpring(useMotionValue(50), { stiffness: 120, damping: 20 });

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    ry.set((px - 0.5) * 14);
    rx.set((0.5 - py) * 12);
    gx.set(px * 100);
    gy.set(py * 100);
  };
  const onLeave = () => {
    rx.set(0); ry.set(0); gx.set(50); gy.set(50);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ rotateX: rx, rotateY: ry, transformPerspective: 1200, transformStyle: "preserve-3d" }}
      className={`relative ${className}`}
    >
      <motion.div
        aria-hidden
        style={{
          background: useTransform(
            [gx, gy] as any,
            ([x, y]: any) =>
              `radial-gradient(420px circle at ${x}% ${y}%, oklch(0.78 0.14 82 / 0.28), transparent 55%)`,
          ),
        }}
        className="pointer-events-none absolute inset-0 rounded-sm"
      />
      <div style={{ transform: "translateZ(40px)" }}>{children}</div>
    </motion.div>
  );
}

export function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const orbY = useTransform(scrollYProgress, [0, 1], [-80, 80]);
  const orbRot = useTransform(scrollYProgress, [0, 1], [0, 220]);
  const ringRot = useTransform(scrollYProgress, [0, 1], [0, -180]);
  const headlineY = useTransform(scrollYProgress, [0, 1], [60, -60]);

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative py-32 md:py-44 overflow-hidden"
    >
      {/* layered backdrop */}
      <div className="absolute inset-0 bg-gradient-luxury opacity-70" />
      <motion.div
        style={{ y: orbY, rotate: orbRot }}
        className="absolute -top-32 left-1/2 -translate-x-1/2 w-[70vw] h-[70vw] max-w-[1100px] max-h-[1100px] rounded-full bg-[conic-gradient(from_0deg,oklch(0.78_0.14_82/0.35),oklch(0.88_0.05_85/0.15),oklch(0.78_0.14_82/0.35))] blur-[120px]"
      />
      <motion.div
        style={{ rotate: ringRot }}
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vw] h-[120vw] max-w-[1400px] max-h-[1400px] rounded-full border border-primary/15"
      />
      <motion.div
        style={{ rotate: useTransform(scrollYProgress, [0, 1], [0, 120]) }}
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] h-[90vw] max-w-[1000px] max-h-[1000px] rounded-full border border-primary/20"
      />

      {/* floating gold dots */}
      {Array.from({ length: 14 }).map((_, i) => (
        <motion.span
          key={i}
          aria-hidden
          className="absolute w-1.5 h-1.5 rounded-full bg-primary/70"
          style={{
            left: `${(i * 53) % 100}%`,
            top: `${(i * 37) % 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.9, 0.2],
          }}
          transition={{ duration: 5 + (i % 4), repeat: Infinity, delay: i * 0.25, ease: "easeInOut" }}
        />
      ))}

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <motion.div style={{ y: headlineY }} className="text-center mb-20">
          <motion.p
            initial={{ opacity: 0, letterSpacing: "0.1em" }}
            whileInView={{ opacity: 1, letterSpacing: "0.4em" }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="text-[11px] uppercase text-primary mb-6"
          >
            — Visit the Atelier
          </motion.p>
          <h2 className="font-display text-5xl md:text-8xl leading-[0.95] text-ivory">
            {["Step", "inside"].map((w, i) => (
              <motion.span
                key={w}
                initial={{ y: 100, opacity: 0, rotateX: -60 }}
                whileInView={{ y: 0, opacity: 1, rotateX: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
                style={{ transformPerspective: 800 }}
                className="inline-block mr-4"
              >
                {w}
              </motion.span>
            ))}
            <br />
            <motion.span
              initial={{ y: 100, opacity: 0, rotateX: -60 }}
              whileInView={{ y: 0, opacity: 1, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
              style={{ transformPerspective: 800 }}
              className="inline-block italic font-serif text-gradient-gold"
            >
              our world of silk.
            </motion.span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8" style={{ perspective: 1400 }}>
          <motion.div
            initial={{ opacity: 0, y: 60, rotateY: -8 }}
            whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="lg:col-span-3"
          >
            <TiltCard className="glass rounded-sm p-10 md:p-14 shadow-luxury">
              <div className="grid sm:grid-cols-2 gap-10">
                {[
                  {
                    label: "Flagship Store",
                    body: <>Beauty Silks<br />Main Road, Chavakkad<br />Thrissur, Kerala 680506</>,
                    display: true,
                  },
                  {
                    label: "Hours",
                    body: <>Mon — Sat · 9:30 AM to 9:00 PM<br />Sunday · 10:00 AM to 8:00 PM<br />Bridal studio by appointment</>,
                  },
                  {
                    label: "Connect",
                    body: <>+91 98470 00000<br />hello@beautysilks.in<br />@beautysilks.chavakkad</>,
                  },
                ].map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.15 + i * 0.1, duration: 0.8 }}
                  >
                    <div className="text-[10px] uppercase tracking-[0.4em] text-primary mb-3">{item.label}</div>
                    <p className={`${item.display ? "font-display text-2xl" : "font-serif text-lg"} text-ivory/90 leading-snug`}>
                      {item.body}
                    </p>
                  </motion.div>
                ))}

                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.45, duration: 0.8 }}
                  className="flex flex-col gap-3"
                >
                  <motion.a
                    href="tel:+919847000000"
                    whileHover={{ scale: 1.03, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="group relative overflow-hidden inline-flex items-center justify-center gap-3 bg-gradient-gold text-primary-foreground px-6 py-4 rounded-full text-[12px] uppercase tracking-[0.3em] shadow-gold transition-all"
                  >
                    <span className="relative z-10">Call the Atelier</span>
                    <motion.span
                      aria-hidden
                      className="absolute inset-0 bg-[linear-gradient(110deg,transparent,oklch(1_0_0/0.4),transparent)]"
                      animate={{ x: ["-120%", "120%"] }}
                      transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
                    />
                  </motion.a>
                  <motion.a
                    href="https://maps.google.com/?q=Chavakkad+Kerala"
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ scale: 1.03, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center justify-center gap-3 border border-primary/50 text-primary px-6 py-4 rounded-full text-[12px] uppercase tracking-[0.3em] hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    Get Directions
                  </motion.a>
                </motion.div>
              </div>
            </TiltCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 60, rotateY: 8 }}
            whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.1 }}
            className="lg:col-span-2 relative rounded-sm overflow-hidden min-h-[420px] h-full border border-primary/30 shadow-luxury"
          >
            <iframe
              title="Beauty Silks Chavakkad"
              src="https://maps.google.com/maps?q=Chavakkad%20Kerala&t=&z=14&ie=UTF8&iwloc=&output=embed"
              loading="lazy"
              className="absolute inset-0 w-full h-full"
              style={{ filter: "contrast(1.05) saturate(0.95)" }}
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-background/30 via-transparent to-primary/15" />
            <motion.div
              aria-hidden
              className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16"
              animate={{ scale: [1, 1.6, 1], opacity: [0.7, 0, 0.7] }}
              transition={{ duration: 2.4, repeat: Infinity, ease: "easeOut" }}
            >
              <div className="w-full h-full rounded-full border-2 border-primary" />
            </motion.div>
            <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-primary shadow-gold" />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="pointer-events-none absolute bottom-4 left-4 right-4 glass rounded-sm p-4"
            >
              <p className="text-[10px] uppercase tracking-[0.3em] text-primary mb-1">Find us</p>
              <p className="text-sm text-ivory">Chavakkad, Thrissur — Kerala</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}