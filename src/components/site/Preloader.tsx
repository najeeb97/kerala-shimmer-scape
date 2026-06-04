import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Preloader() {
  const [count, setCount] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    let raf = 0;
    let start = performance.now();
    const dur = 2200;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      setCount(Math.round(eased * 100));
      if (p < 1) raf = requestAnimationFrame(tick);
      else setTimeout(() => setDone(true), 350);
    };
    raf = requestAnimationFrame(tick);
    document.body.style.overflow = "hidden";
    return () => {
      cancelAnimationFrame(raf);
      document.body.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    if (done) document.body.style.overflow = "";
  }, [done]);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 1.1, ease: [0.85, 0, 0.15, 1] }}
          className="fixed inset-0 z-[100] bg-background flex flex-col items-center justify-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-[11px] uppercase tracking-[0.5em] text-primary/80 mb-10"
          >
            Beauty Silks · Chavakkad
          </motion.div>

          <div className="font-display text-[18vw] md:text-[12vw] leading-none text-gradient-gold tabular-nums">
            {String(count).padStart(3, "0")}
          </div>

          <div className="mt-14 w-[60vw] max-w-md h-px bg-primary/15 overflow-hidden">
            <motion.div
              className="h-full bg-gradient-gold origin-left"
              style={{ scaleX: count / 100 }}
            />
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-8 text-[10px] uppercase tracking-[0.4em] text-foreground/40"
          >
            Weaving your experience
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}