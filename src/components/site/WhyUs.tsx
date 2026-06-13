import { motion } from "framer-motion";
import { useLang } from "@/lib/i18n";

export function WhyUs() {
  const { t } = useLang();
  const reasons = [
    { n: "01", t: t("why1T"), d: t("why1D") },
    { n: "02", t: t("why2T"), d: t("why2D") },
    { n: "03", t: t("why3T"), d: t("why3D") },
    { n: "04", t: t("why4T"), d: t("why4D") },
    { n: "05", t: t("why5T"), d: t("why5D") },
    { n: "06", t: t("why6T"), d: t("why6D") },
  ];
  return (
    <section className="relative py-32 md:py-44 bg-gradient-to-b from-background via-card/30 to-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-20 max-w-3xl">
          <p className="text-[11px] uppercase tracking-[0.4em] text-primary mb-6">{t("whyEyebrow")}</p>
          <h2 className="font-display text-5xl md:text-7xl leading-[0.95] text-ivory">
            Six promises,<br />
            <span className="italic font-serif text-gradient-gold">woven into every drape.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-primary/15 border border-primary/15">
          {reasons.map((r, i) => (
            <motion.div
              key={r.n}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.06 }}
              className="bg-background p-10 group hover:bg-card/60 transition-colors duration-700"
            >
              <div className="font-display text-5xl text-gradient-gold mb-6">{r.n}</div>
              <h3 className="font-display text-2xl text-ivory mb-3">{r.t}</h3>
              <p className="text-sm text-foreground/65 font-light leading-relaxed">{r.d}</p>
              <div className="mt-6 w-8 h-px bg-primary group-hover:w-16 transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
