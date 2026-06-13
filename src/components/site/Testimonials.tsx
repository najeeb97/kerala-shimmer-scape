import { motion } from "framer-motion";
import { useLang } from "@/lib/i18n";

export function Testimonials() {
  const { t } = useLang();
  const items = [
    { q: t("test1Q"), name: "Anjali Menon", role: t("test1R") },
    { q: t("test2Q"), name: "Ravi Krishnan", role: t("test2R") },
    { q: t("test3Q"), name: "Meera & Arjun", role: t("test3R") },
  ];
  return (
    <section className="relative py-32 md:py-44">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-20 flex flex-wrap items-end justify-between gap-8">
          <h2 className="font-display text-5xl md:text-7xl leading-[0.95] text-ivory max-w-2xl">
            Words from<br />
            <span className="italic font-serif text-gradient-gold">our patrons.</span>
          </h2>
          <div className="flex items-center gap-2 text-primary">
            {"★★★★★".split("").map((s, i) => <span key={i} className="text-2xl">{s}</span>)}
            <span className="text-sm text-foreground/60 ml-3">{t("reviewsLine")}</span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {items.map((it, i) => (
            <motion.figure
              key={it.name}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="glass rounded-sm p-10 relative"
            >
              <div className="font-display text-7xl text-primary/40 leading-none mb-4">"</div>
              <blockquote className="font-serif text-xl leading-relaxed text-ivory/90 italic">
                {it.q}
              </blockquote>
              <figcaption className="mt-8 pt-6 border-t border-primary/15">
                <div className="text-ivory font-medium">{it.name}</div>
                <div className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground mt-1">{it.role}</div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
