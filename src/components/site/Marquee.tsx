export function Marquee() {
  const items = [
    "Bridal Sarees",
    "✦",
    "Kanjivaram",
    "✦",
    "Banarasi Silk",
    "✦",
    "Kerala Kasavu",
    "✦",
    "Designer Lehengas",
    "✦",
    "Groom Sherwanis",
    "✦",
    "Family Fashion",
    "✦",
    "Festive Wear",
    "✦",
  ];
  return (
    <div className="relative overflow-hidden border-y border-primary/15 bg-background py-8">
      <div className="flex marquee-track whitespace-nowrap">
        {[...Array(2)].map((_, k) => (
          <div key={k} className="flex shrink-0 items-center gap-12 pr-12">
            {items.map((i, idx) => (
              <span
                key={idx}
                className="font-display text-4xl md:text-6xl text-ivory/90"
              >
                {i === "✦" ? <span className="text-primary">{i}</span> : i}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}