import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const links = [
  { label: "Collections", href: "#collections" },
  { label: "Wedding", href: "#wedding" },
  { label: "Family", href: "#family" },
  { label: "Heritage", href: "#about" },
  { label: "Visit", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-6"
      }`}
    >
      <div className={`mx-auto max-w-7xl px-6 lg:px-10 flex items-center justify-between rounded-full transition-all duration-500 ${
        scrolled ? "glass py-3 px-6 lg:px-8" : ""
      }`}>
        <a href="#top" className="flex items-baseline gap-2">
          <span className="font-display text-2xl tracking-wide text-gradient-gold">Beauty Silks</span>
          <span className="hidden md:inline text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Chavakkad</span>
        </a>
        <nav className="hidden lg:flex items-center gap-10">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[12px] uppercase tracking-[0.25em] text-foreground/80 hover:text-primary transition-colors relative group"
            >
              {l.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-primary transition-all duration-500 group-hover:w-full" />
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="hidden md:inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.25em] border border-primary/40 px-5 py-2.5 rounded-full text-primary hover:bg-primary hover:text-primary-foreground transition-all"
        >
          Book Visit
        </a>
      </div>
    </motion.header>
  );
}