export function Footer() {
  return (
    <footer className="relative border-t border-primary/15 bg-onyx">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-16">
        <div className="grid md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <div className="font-display text-3xl text-gradient-gold mb-3">Beauty Silks</div>
            <p className="text-sm text-foreground/60 max-w-sm font-light leading-relaxed">
              Exclusive wedding collections in a complete family shop —
              woven with heritage from Chavakkad, Kerala.
            </p>
          </div>
          <div>
            <div className="text-[11px] uppercase tracking-[0.3em] text-primary mb-4">Shop</div>
            <ul className="space-y-2 text-sm text-foreground/70">
              <li><a href="#wedding" className="hover:text-primary">Bridal Sarees</a></li>
              <li><a href="#wedding" className="hover:text-primary">Groom Collections</a></li>
              <li><a href="#family" className="hover:text-primary">Family Fashion</a></li>
              <li><a href="#collections" className="hover:text-primary">Designer Atelier</a></li>
            </ul>
          </div>
          <div>
            <div className="text-[11px] uppercase tracking-[0.3em] text-primary mb-4">House</div>
            <ul className="space-y-2 text-sm text-foreground/70">
              <li><a href="#about" className="hover:text-primary">Heritage</a></li>
              <li><a href="#contact" className="hover:text-primary">Visit</a></li>
              <li><a href="tel:+919847000000" className="hover:text-primary">Bridal Studio</a></li>
              <li><a href="#" className="hover:text-primary">Instagram</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-primary/10 flex flex-wrap justify-between items-center gap-4 text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
          <span>© {new Date().getFullYear()} Beauty Silks · Chavakkad, Kerala</span>
          <span>Crafted with heritage</span>
        </div>
      </div>
    </footer>
  );
}