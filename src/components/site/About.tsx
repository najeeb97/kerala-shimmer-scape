import { motion } from "framer-motion";
import { useLang } from "@/lib/i18n";

export function About() {
  const { t } = useLang();
  const stats = [
    { v: "40+", l: t("aboutStat1") },
    { v: "50k+", l: t("aboutStat2") },
    { v: "2,500+", l: t("aboutStat3") },
    { v: "200+", l: t("aboutStat4") },
  ];
  return (
    <section id="about" className="relative py-32 md:py-44">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-16 items-end">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5"
          >
            <p className="text-[11px] uppercase tracking-[0.4em] text-primary mb-6">{t("aboutEyebrow")}</p>
            <h2 className="font-display text-5xl md:text-7xl leading-[0.95] text-ivory">
              A house woven<br />
              <span className="italic font-serif text-gradient-gold">in silk & trust.</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6 lg:col-start-7 space-y-6 text-foreground/75 text-lg leading-relaxed font-light"
          >
            <p>{t("aboutP1")}</p>
            <p>{t("aboutP2")}</p>
          </motion.div>
        </div>

        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-px bg-primary/15 border border-primary/15">
          {stats.map((s, i) => (
            <motion.div
              key={s.l}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.08 }}
              className="bg-background p-8 md:p-12"
            >
              <div className="font-display text-5xl md:text-6xl text-gradient-gold">{s.v}</div>
              <div className="mt-3 text-[11px] uppercase tracking-[0.3em] text-muted-foreground">{s.l}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
