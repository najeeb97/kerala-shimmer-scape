import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import mandap from "@/assets/wedding-mandap.jpg";
import reception from "@/assets/wedding-reception.jpg";
import atelier from "@/assets/wedding-atelier.jpg";
import groom from "@/assets/wedding-groom.jpg";
import { useLang } from "@/lib/i18n";


export function Wedding() {
  const { t } = useLang();
  const cards = [
    { tag: t("weddingCardTag1"), title: "The Mandap Edit", note: t("weddingCardNote1"), image: mandap },
    { tag: t("weddingCardTag2"), title: "Reception Couture", note: t("weddingCardNote2"), image: reception },
    { tag: t("weddingCardTag3"), title: "House Signatures", note: t("weddingCardNote3"), image: atelier },
    { tag: t("weddingCardTag4"), title: "Sherwani & Mundu", note: t("weddingCardNote4"), image: groom },
  ];
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [80, -80]);

  return (
    <section id="wedding" ref={ref} className="relative py-24 md:py-44 overflow-hidden">
      <motion.div
        style={{ y }}
        className="absolute -top-20 right-0 w-[60vw] h-[60vw] rounded-full bg-primary/10 blur-[140px] -z-0"
      />
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
        <div className="flex flex-wrap items-end justify-between gap-6 md:gap-8 mb-12 md:mb-16">
          <div className="max-w-2xl">
            <p className="text-[11px] uppercase tracking-[0.4em] text-primary mb-4 md:mb-6">{t("weddingEyebrow")}</p>
            <h2 className="font-display text-4xl sm:text-5xl md:text-7xl leading-[0.95] text-ivory">
              Couture for the<br />
              <span className="italic font-serif text-gradient-gold">most sacred day.</span>
            </h2>
          </div>
          <p className="max-w-sm text-foreground/65 font-light text-sm md:text-base">
            {t("weddingDesc")}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-5 sm:gap-6 md:gap-8">
          {cards.map((c, i) => (
            <motion.article
              key={c.title}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 1, delay: (i % 2) * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="group relative overflow-hidden rounded-sm aspect-[4/5] cursor-pointer"
            >
              <img
                src={c.image}
                alt={c.title}
                loading="lazy"
                width={1024}
                height={1280}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1500ms] ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-onyx/90 via-onyx/30 to-onyx/10" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,oklch(0.78_0.14_82/_0.18),transparent_60%)]" />

              {/* Decorative line */}
              <div className="absolute top-6 left-6 right-6 md:top-8 md:left-8 md:right-8 flex items-center gap-3">
                <span className="text-[10px] uppercase tracking-[0.4em] text-primary">{c.tag}</span>
                <span className="flex-1 h-px bg-gradient-to-r from-primary/60 to-transparent" />
                <span className="text-[10px] text-primary/70">0{i + 1}</span>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 md:p-10">
                <h3 className="font-display text-2xl sm:text-3xl md:text-5xl text-ivory mb-2 md:mb-3 transition-transform duration-700 group-hover:-translate-y-1">
                  {c.title}
                </h3>
                <p className="text-xs sm:text-sm text-ivory/75 max-w-md font-light leading-relaxed">{c.note}</p>
                <div className="mt-4 md:mt-6 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.3em] text-primary">
                  {t("discover")} <span className="transition-transform duration-500 group-hover:translate-x-2">→</span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
