import { motion } from "framer-motion";

const reasons = [
  { n: "01", t: "Premium Quality", d: "Hand-picked weaves from master looms across India." },
  { n: "02", t: "Vast Collection", d: "5,000+ ensembles across every region and occasion." },
  { n: "03", t: "Wedding Specialists", d: "Dedicated bridal studio with stylist consultations." },
  { n: "04", t: "Customer Satisfaction", d: "4.9★ with 2,800+ verified reviews across Kerala." },
  { n: "05", t: "Family Destination", d: "Men · women · kids · all under one elegant roof." },
  { n: "06", t: "Heritage & Trust", d: "Four decades of weaving Kerala's wedding memories." },
];

export function WhyUs() {
  return (
    <section className="relative py-32 md:py-44 bg-gradient-to-b from-background via-card/30 to-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-20 max-w-3xl">
          <p className="text-[11px] uppercase tracking-[0.4em] text-primary mb-6">— Why Beauty Silks</p>
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