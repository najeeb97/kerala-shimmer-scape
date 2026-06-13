import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useLang } from "@/lib/i18n";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { lang, setLang, t } = useLang();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: t("navCollections"), href: "#collections" },
    { label: t("navWedding"), href: "#wedding" },
    { label: t("navFamily"), href: "#family" },
    { label: t("navHeritage"), href: "#about" },
    { label: t("navVisit"), href: "#contact" },
  ];

  // Over dark hero when not scrolled → ivory text; when glass appears → switch to ink.
  const linkClass = scrolled
    ? "text-foreground/80 hover:text-primary"
    : "text-[#F7E7CE]/90 hover:text-[#D4AF37]";
  const brandSubClass = scrolled ? "text-muted-foreground" : "text-[#F7E7CE]/60";

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled ? "py-3" : "py-6"}`}
    >
      <div
        className={`mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 flex items-center justify-between rounded-full transition-all duration-500 gap-3 ${
          scrolled ? "glass py-3 px-4 sm:px-6 lg:px-8" : ""
        }`}
      >
        <a href="#top" className="flex items-baseline gap-2 shrink-0">
          <span className="font-display text-xl sm:text-2xl tracking-wide text-gradient-gold">
            Beauty Silks
          </span>
          <span className={`hidden md:inline text-[10px] uppercase tracking-[0.3em] transition-colors ${brandSubClass}`}>
            {t("chavakkad")}
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-8 xl:gap-10">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`text-[12px] uppercase tracking-[0.22em] transition-colors relative group ${linkClass}`}
            >
              {l.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-[#D4AF37] transition-all duration-500 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3 sm:gap-4">
          {/* Language toggle */}
          <div
            role="radiogroup"
            aria-label="Language"
            className={`hidden sm:flex items-center gap-1 rounded-full p-1 border transition-colors ${
              scrolled
                ? "border-primary/30 bg-background/40"
                : "border-[#D4AF37]/40 bg-black/30 backdrop-blur-md"
            }`}
          >
            {(["en", "ml"] as const).map((code) => {
              const active = lang === code;
              const label = code === "en" ? "English" : "മലയാളം";
              return (
                <button
                  key={code}
                  role="radio"
                  aria-checked={active}
                  onClick={() => setLang(code)}
                  className={`relative px-3 py-1.5 rounded-full text-[10px] sm:text-[11px] uppercase tracking-[0.2em] font-medium transition-all ${
                    active
                      ? "text-[#1a0f0a] shadow-[0_4px_18px_-6px_rgba(212,175,55,0.6)]"
                      : scrolled
                      ? "text-foreground/70 hover:text-primary"
                      : "text-[#F7E7CE]/75 hover:text-[#D4AF37]"
                  }`}
                  style={
                    active
                      ? {
                          background:
                            "linear-gradient(135deg, #F7C76A 0%, #D4AF37 55%, #B8860B 100%)",
                        }
                      : undefined
                  }
                >
                  {label}
                </button>
              );
            })}
          </div>

          <a
            href="#contact"
            className={`hidden md:inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] px-4 sm:px-5 py-2.5 rounded-full transition-all border ${
              scrolled
                ? "border-primary/40 text-primary hover:bg-primary hover:text-primary-foreground"
                : "border-[#D4AF37]/60 text-[#F7E7CE] hover:bg-[#D4AF37] hover:text-[#1a0f0a]"
            }`}
          >
            {t("bookVisit")}
          </a>
        </div>
      </div>
    </motion.header>
  );
}
