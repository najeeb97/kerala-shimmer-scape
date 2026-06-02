import { motion } from "framer-motion";

const stats = [
  { v: "40+", l: "Years of Heritage" },
  { v: "50k+", l: "Happy Families" },
  { v: "2,500+", l: "Bridal Stories" },
  { v: "200+", l: "Master Weavers" },
];

export function About() {
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
            <p className="text-[11px] uppercase tracking-[0.4em] text-primary mb-6">— Our Heritage</p>
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
            <p>
              Born in the cultural heartland of Chavakkad, Beauty Silks has
              quietly shaped generations of Kerala weddings. Each drape carries
              a story — of craftsmen who weave at dawn, of mothers choosing
              their daughter's mundu, of grooms wrapping silk before the
              mandap fire.
            </p>
            <p>
              We are a complete family shop: bridal couture, festive ensembles,
              quiet everyday classics — gathered under one roof, curated with
              an obsessive eye for craft.
            </p>
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