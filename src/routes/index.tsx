import { createFileRoute } from "@tanstack/react-router";
import { SmoothScroll } from "@/components/site/SmoothScroll";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Marquee } from "@/components/site/Marquee";
import { About } from "@/components/site/About";
import { Wedding } from "@/components/site/Wedding";
import { Family } from "@/components/site/Family";
import { Featured } from "@/components/site/Featured";
import { Testimonials } from "@/components/site/Testimonials";
import { WhyUs } from "@/components/site/WhyUs";
import { Instagram } from "@/components/site/Instagram";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Beauty Silks Chavakkad — Exclusive Wedding Collections & Family Fashion" },
      { name: "description", content: "Kerala's premier destination for bridal sarees, wedding wear and family fashion. Beauty Silks Chavakkad — a complete family shop crafted with heritage." },
      { property: "og:title", content: "Beauty Silks Chavakkad — Exclusive Wedding Collections" },
      { property: "og:description", content: "Bridal sarees, designer collections and family fashion in the heart of Chavakkad, Kerala." },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "ClothingStore",
        name: "Beauty Silks",
        description: "Exclusive Wedding Collections in a Complete Family Shop",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Main Road",
          addressLocality: "Chavakkad",
          addressRegion: "Kerala",
          postalCode: "680506",
          addressCountry: "IN",
        },
        telephone: "+91 98470 00000",
        priceRange: "₹₹₹",
      }),
    }],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative bg-background text-foreground">
      <SmoothScroll />
      <Navbar />
      <Hero />
      <Marquee />
      <About />
      <Wedding />
      <Family />
      <Featured />
      <Testimonials />
      <WhyUs />
      <Instagram />
      <Contact />
      <Footer />
    </main>
  );
}
