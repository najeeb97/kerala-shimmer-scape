import { motion } from "framer-motion";
import { useLang } from "@/lib/i18n";

export function Family() {
  const { t } = useLang();
  const cats = [
    { name: t("catWomen"), line: t("catWomenL"), count: "1,200+" },
    { name: t("catMen"), line: t("catMenL"), count: "800+" },
    { name: t("catKids"), line: t("catKidsL"), count: "600+" },
    { name: t("catCasual"), line: t("catCasualL"), count: "950+" },
    { name: t("catFestive"), line: t("catFestiveL"), count: "500+" },
    { name: t("catBridal"), line: t("catBridalL"), count: "Atelier" },
  ];
  return (
    <section id="family" className="relative py-32 md:py-44 bg-gradient-to-b from-background via-card/40 to-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="text-center mb-20">
          <p className="text-[11px] uppercase tracking-[0.4em] text-primary mb-6">{t("familyEyebrow")}</p>
          <h2 className="font-display text-5xl md:text-7xl leading-[0.95] text-ivory">
            One roof.<br />
            <span className="italic font-serif text-gradient-gold">Every celebration.</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-primary/15 border border-primary/15">
          {cats.map((c, i) => (
            <motion.div
              key={c.name}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.05 }}
              className="group relative bg-background p-10 md:p-14 overflow-hidden cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="relative">
                <div className="flex items-baseline justify-between mb-12">
                  <span className="text-[10px] uppercase tracking-[0.4em] text-muted-foreground">0{i + 1}</span>
                  <span className="text-[10px] uppercase tracking-[0.3em] text-primary">{c.count}</span>
                </div>
                <h3 className="font-display text-4xl md:text-5xl text-ivory mb-3 transition-transform duration-700 group-hover:translate-x-2">
                  {c.name}
                </h3>
                <p className="text-sm text-foreground/60 font-light">{c.line}</p>
                <div className="mt-10 h-px bg-gradient-to-r from-primary/40 via-primary/20 to-transparent" />
                <div className="mt-4 text-[11px] uppercase tracking-[0.3em] text-primary opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-500">
                  {t("browse")}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
