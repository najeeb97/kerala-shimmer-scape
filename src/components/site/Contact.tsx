import { motion } from "framer-motion";

export function Contact() {
  return (
    <section id="contact" className="relative py-32 md:py-44 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-luxury opacity-60" />
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[80vw] h-[80vw] rounded-full bg-primary/10 blur-[160px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="text-center mb-20">
          <p className="text-[11px] uppercase tracking-[0.4em] text-primary mb-6">— Visit the Atelier</p>
          <h2 className="font-display text-5xl md:text-8xl leading-[0.95] text-ivory">
            Step inside<br />
            <span className="italic font-serif text-gradient-gold">our world of silk.</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="lg:col-span-3 glass rounded-sm p-10 md:p-14"
          >
            <div className="grid sm:grid-cols-2 gap-10">
              <div>
                <div className="text-[10px] uppercase tracking-[0.4em] text-primary mb-3">Flagship Store</div>
                <p className="font-display text-2xl text-ivory leading-snug">
                  Beauty Silks<br />Main Road, Chavakkad<br />Thrissur, Kerala 680506
                </p>
              </div>
              <div>
                <div className="text-[10px] uppercase tracking-[0.4em] text-primary mb-3">Hours</div>
                <p className="font-serif text-lg text-ivory/85 leading-relaxed">
                  Mon — Sat · 9:30 AM to 9:00 PM<br />
                  Sunday · 10:00 AM to 8:00 PM<br />
                  Bridal studio by appointment
                </p>
              </div>
              <div>
                <div className="text-[10px] uppercase tracking-[0.4em] text-primary mb-3">Connect</div>
                <p className="font-serif text-lg text-ivory/85 leading-relaxed">
                  +91 98470 00000<br />
                  hello@beautysilks.in<br />
                  @beautysilks.chavakkad
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <a
                  href="tel:+919847000000"
                  className="inline-flex items-center justify-center gap-3 bg-gradient-gold text-primary-foreground px-6 py-4 rounded-full text-[12px] uppercase tracking-[0.3em] shadow-gold hover:shadow-luxury transition-all"
                >
                  Call the Atelier
                </a>
                <a
                  href="https://maps.google.com/?q=Chavakkad+Kerala"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-3 border border-primary/40 text-primary px-6 py-4 rounded-full text-[12px] uppercase tracking-[0.3em] hover:bg-primary hover:text-primary-foreground transition-all"
                >
                  Get Directions
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="lg:col-span-2 relative rounded-sm overflow-hidden min-h-[420px] border border-primary/20"
          >
            <iframe
              title="Beauty Silks Chavakkad"
              src="https://maps.google.com/maps?q=Chavakkad%20Kerala&t=&z=14&ie=UTF8&iwloc=&output=embed"
              loading="lazy"
              className="absolute inset-0 w-full h-full grayscale contrast-125 brightness-75"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-onyx/60 via-transparent to-primary/10" />
            <div className="pointer-events-none absolute bottom-4 left-4 right-4 glass rounded-sm p-4">
              <p className="text-[10px] uppercase tracking-[0.3em] text-primary mb-1">Find us</p>
              <p className="text-sm text-ivory">Chavakkad, Thrissur — Kerala</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}