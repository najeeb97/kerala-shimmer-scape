import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useLang } from "@/lib/i18n";

export function Coast() {
  const { t } = useLang();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const wave1 = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);
  const wave2 = useTransform(scrollYProgress, [0, 1], ["12%", "-12%"]);
  const wave3 = useTransform(scrollYProgress, [0, 1], ["-4%", "16%"]);
  const sunY = useTransform(scrollYProgress, [0, 1], ["10%", "-20%"]);

  return (
    <section
      ref={ref}
      id="coast"
      className="relative overflow-hidden py-32 md:py-44 bg-gradient-to-b from-background via-[oklch(0.94_0.03_85)] to-background"
    >
      {/* sun / pearl */}
      <motion.div
        style={{ y: sunY }}
        className="pointer-events-none absolute top-24 right-[8%] w-48 h-48 md:w-64 md:h-64 rounded-full bg-gradient-to-br from-[#F7E7CE] to-[#C9A227] opacity-70 blur-[2px] shadow-[0_0_120px_40px_oklch(0.85_0.10_85/_0.5)]"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-[11px] uppercase tracking-[0.4em] text-primary mb-6 flex items-center gap-3"
            >
              <span className="inline-block w-8 h-px bg-primary" />
              {t("coastEyebrow")}
            </motion.p>

            <h2 className="font-display text-5xl md:text-7xl leading-[0.95] text-ivory">
              Where the loom<br />
              <span className="italic font-serif text-gradient-gold">meets the tide.</span>
            </h2>

            <div className="mt-10 space-y-6 max-w-lg text-foreground/75 font-light leading-relaxed">
              <p>{t("coastP1")}</p>
              <p>{t("coastP2")}</p>
            </div>

            <div className="mt-12 grid grid-cols-3 gap-px bg-primary/15 border border-primary/15 max-w-md">
              {[
                { n: "2 min", l: t("coastStat1") },
                { n: "40 yrs", l: t("coastStat2") },
                { n: "1 sea", l: t("coastStat3") },
              ].map((s) => (
                <div key={s.l} className="bg-background p-5">
                  <div className="font-display text-2xl text-gradient-gold">{s.n}</div>
                  <div className="mt-1 text-[10px] uppercase tracking-[0.25em] text-foreground/60">{s.l}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: parallax wave illustration */}
          <div className="relative h-[440px] md:h-[560px]">
            <div className="absolute inset-0 rounded-sm overflow-hidden shadow-luxury border border-primary/20 bg-gradient-to-b from-[#EFE6D2] via-[#F7E7CE] to-[#FAF6EE]">
              {/* horizon sun */}
              <div className="absolute top-[28%] left-1/2 -translate-x-1/2 w-40 h-40 rounded-full bg-[radial-gradient(circle,#fff6e0,#C9A227_60%,transparent_75%)] opacity-90" />

              {/* waves */}
              <motion.svg
                style={{ x: wave1 }}
                viewBox="0 0 800 200"
                className="absolute bottom-[44%] left-0 w-[120%] h-24 text-primary/40"
                preserveAspectRatio="none"
              >
                <path
                  d="M0,100 C150,40 300,160 450,100 C600,40 750,140 900,100 L900,200 L0,200 Z"
                  fill="currentColor"
                />
              </motion.svg>

              <motion.svg
                style={{ x: wave2 }}
                viewBox="0 0 800 200"
                className="absolute bottom-[28%] left-0 w-[125%] h-28 text-primary/55"
                preserveAspectRatio="none"
              >
                <path
                  d="M0,110 C180,60 320,170 500,110 C680,50 780,150 900,110 L900,200 L0,200 Z"
                  fill="currentColor"
                />
              </motion.svg>

              <motion.svg
                style={{ x: wave3 }}
                viewBox="0 0 800 200"
                className="absolute bottom-[8%] left-0 w-[130%] h-32 text-[oklch(0.55_0.12_75)]/80"
                preserveAspectRatio="none"
              >
                <path
                  d="M0,120 C200,70 350,180 540,120 C720,60 800,160 900,120 L900,200 L0,200 Z"
                  fill="currentColor"
                />
              </motion.svg>

              {/* sand */}
              <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-b from-transparent via-[oklch(0.85_0.06_80)] to-[oklch(0.78_0.08_75)]" />

              {/* foam line */}
              <motion.div
                animate={{ opacity: [0.4, 0.9, 0.4] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute bottom-[20%] left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/90 to-transparent"
              />

              <div className="absolute top-6 left-6 right-6 flex items-center justify-between">
                <span className="text-[10px] uppercase tracking-[0.4em] text-foreground/70">{t("chavakkad")} · 10.5953°N</span>
                <span className="text-[10px] uppercase tracking-[0.4em] text-foreground/70">{t("arabianSea")}</span>
              </div>

              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                <span className="font-display italic text-3xl text-foreground/85">Malabar Coast</span>
                <span className="text-[10px] uppercase tracking-[0.3em] text-primary">est. 1985</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* bottom hairline divider */}
      <div className="mt-32 mx-auto max-w-7xl px-6 lg:px-10">
        <div className="hairline" />
      </div>
    </section>
  );
}