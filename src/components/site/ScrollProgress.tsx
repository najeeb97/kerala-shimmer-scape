import { motion, useScroll } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col items-center gap-3">
      <span className="text-[9px] uppercase tracking-[0.4em] text-primary/70 [writing-mode:vertical-rl]">
        Scroll
      </span>
      <div className="relative h-40 w-px bg-primary/20 overflow-hidden">
        <motion.div
          style={{ scaleY: scrollYProgress, transformOrigin: "top" }}
          className="absolute inset-0 bg-gradient-gold"
        />
      </div>
    </div>
  );
}