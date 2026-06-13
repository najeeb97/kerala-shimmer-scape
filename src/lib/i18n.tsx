import { createContext, useContext, useState, ReactNode } from "react";

export type Lang = "en" | "ml";

type Dict = Record<string, { en: string; ml: string }>;

export const dict: Dict = {
  // Navbar
  navCollections: { en: "Collections", ml: "ശേഖരങ്ങൾ" },
  navWedding: { en: "Wedding", ml: "വിവാഹം" },
  navFamily: { en: "Family", ml: "കുടുംബം" },
  navHeritage: { en: "Heritage", ml: "പാരമ്പര്യം" },
  navVisit: { en: "Visit", ml: "സന്ദർശിക്കുക" },
  bookVisit: { en: "Book Visit", ml: "സന്ദർശനം ബുക്ക് ചെയ്യുക" },
  chavakkad: { en: "Chavakkad", ml: "ചാവക്കാട്" },

  // Hero (body — titles stay English)
  heroSub: {
    en: "Exclusive wedding collections and a complete family shop — Kerala's premier destination for bridal silks, designer ensembles, and everyday luxury.",
    ml: "എക്സ്ക്ലൂസീവ് വിവാഹ ശേഖരങ്ങളും സമ്പൂർണ കുടുംബ ഷോപ്പും — വധു സിൽക്കുകൾ, ഡിസൈനർ വസ്ത്രങ്ങൾ, ദൈനംദിന ആഢംബരം എന്നിവയ്ക്കായി കേരളത്തിന്റെ മികച്ച ലക്ഷ്യസ്ഥാനം.",
  },
  heroCtaBridal: { en: "Explore Bridal", ml: "വധു ശേഖരം കാണുക" },
  heroCtaCollections: { en: "View Collections", ml: "ശേഖരങ്ങൾ കാണുക" },
  statYears: { en: "Years of Trust", ml: "വർഷത്തെ വിശ്വാസം" },
  statBrides: { en: "Happy Brides", ml: "സന്തുഷ്ട വധുക്കൾ" },
  statDrapes: { en: "Curated Drapes", ml: "തിരഞ്ഞെടുത്ത സാരികൾ" },
  tickerTrust: { en: "· 40+ Years of Trust", ml: "· 40+ വർഷത്തെ വിശ്വാസം" },
  tickerWeaves: { en: "· Kanjivaram · Banarasi · Kerala Kasavu", ml: "· കാഞ്ചീപുരം · ബനാറസി · കേരള കസവ്" },
  tickerStudio: { en: "· Bridal Studio by Appointment", ml: "· അപ്പോയിന്റ്മെന്റ് വഴി വധു സ്റ്റുഡിയോ" },
  tickerScroll: { en: "Scroll ↓", ml: "സ്ക്രോൾ ↓" },

  // About
  aboutEyebrow: { en: "— Our Heritage", ml: "— ഞങ്ങളുടെ പാരമ്പര്യം" },
  aboutP1: {
    en: "Born in the cultural heartland of Chavakkad, Beauty Silks has quietly shaped generations of Kerala weddings. Each drape carries a story — of craftsmen who weave at dawn, of mothers choosing their daughter's mundu, of grooms wrapping silk before the mandap fire.",
    ml: "ചാവക്കാടിന്റെ സാംസ്കാരിക ഹൃദയഭൂമിയിൽ പിറന്ന ബ്യൂട്ടി സിൽക്ക്സ്, കേരളത്തിന്റെ തലമുറകളുടെ വിവാഹങ്ങൾ നിശ്ശബ്ദമായി രൂപപ്പെടുത്തിയിട്ടുണ്ട്. ഓരോ സാരിയും ഒരു കഥ പറയുന്നു — പ്രഭാതത്തിൽ നെയ്യുന്ന കരകൗശല വിദഗ്ധരുടെ, മകൾക്കായി മുണ്ട് തിരഞ്ഞെടുക്കുന്ന അമ്മമാരുടെ, മണ്ഡപാഗ്നിക്കു മുമ്പിൽ പട്ടു ചുറ്റുന്ന വരന്മാരുടെ കഥ.",
  },
  aboutP2: {
    en: "We are a complete family shop: bridal couture, festive ensembles, quiet everyday classics — gathered under one roof, curated with an obsessive eye for craft.",
    ml: "ഞങ്ങൾ ഒരു സമ്പൂർണ കുടുംബ ഷോപ്പാണ്: വധു വസ്ത്രങ്ങൾ, ഉത്സവ വസ്ത്രങ്ങൾ, ദൈനംദിന ക്ലാസിക്കുകൾ — എല്ലാം ഒരേ കൂരയ്ക്കു കീഴിൽ, കരകൗശലത്തോടുള്ള തീവ്ര ശ്രദ്ധയോടെ തിരഞ്ഞെടുത്തവ.",
  },
  aboutStat1: { en: "Years of Heritage", ml: "വർഷത്തെ പാരമ്പര്യം" },
  aboutStat2: { en: "Happy Families", ml: "സന്തുഷ്ട കുടുംബങ്ങൾ" },
  aboutStat3: { en: "Bridal Stories", ml: "വധു കഥകൾ" },
  aboutStat4: { en: "Master Weavers", ml: "നെയ്ത്ത് വിദഗ്ധർ" },

  // Wedding
  weddingEyebrow: { en: "— The Wedding House", ml: "— വിവാഹ ഭവനം" },
  weddingDesc: {
    en: "From the bride's first drape to the groom's mundu — a complete wedding wardrobe, curated under one roof.",
    ml: "വധുവിന്റെ ആദ്യ സാരി മുതൽ വരന്റെ മുണ്ട് വരെ — ഒരേ കൂരയ്ക്കു കീഴിൽ സമ്പൂർണ വിവാഹ വസ്ത്രശേഖരം.",
  },
  weddingCardTag1: { en: "Bridal Sarees", ml: "വധു സാരികൾ" },
  weddingCardNote1: { en: "Hand-zardosi Kanjivarams, temple-border silks, ivory korvai.", ml: "ഹാൻഡ്-സർദോസി കാഞ്ചീപുരം, ടെമ്പിൾ-ബോർഡർ പട്ടുകൾ, ഐവറി കോർവൈ." },
  weddingCardTag2: { en: "Wedding Wear", ml: "വിവാഹ വസ്ത്രങ്ങൾ" },
  weddingCardNote2: { en: "Sculpted lehengas, draped gowns and sheer fantasies in gold.", ml: "ശിൽപ്പ ലെഹംഗകൾ, ഡ്രേപ്പ്ഡ് ഗൗണുകൾ, സ്വർണ്ണത്തിലെ സിയർ ഫാന്റസികൾ." },
  weddingCardTag3: { en: "Designer Atelier", ml: "ഡിസൈനർ അറ്റെലിയർ" },
  weddingCardNote3: { en: "Limited pieces from the Beauty Silks design studio.", ml: "ബ്യൂട്ടി സിൽക്ക്സ് ഡിസൈൻ സ്റ്റുഡിയോയിൽ നിന്നുള്ള പരിമിത ശേഖരം." },
  weddingCardTag4: { en: "Groom Collections", ml: "വരൻ ശേഖരങ്ങൾ" },
  weddingCardNote4: { en: "Kasavu mundu, Jodhpuri sherwanis, bandhgalas tailored on premise.", ml: "കസവ് മുണ്ട്, ജോധ്പുരി ഷെർവാനികൾ, ഇവിടെത്തന്നെ തയ്ച്ച ബന്ദ്ഗലകൾ." },
  discover: { en: "Discover", ml: "കാണുക" },

  // HorizontalBridal
  bridalStudio: { en: "— Bridal Studio", ml: "— വധു സ്റ്റുഡിയോ" },
  scroll: { en: "Scroll →", ml: "സ്ക്രോൾ →" },
  enquire: { en: "Enquire", ml: "അന്വേഷിക്കുക" },

  // ScrollSilk
  heritageMotion: { en: "— Heritage in Motion", ml: "— ചലനത്തിലെ പാരമ്പര്യം" },
  silkSub: {
    en: "Four decades of master weavers, traced into every centimetre of silk.",
    ml: "നാല് പതിറ്റാണ്ടിന്റെ നെയ്ത്ത് വൈദഗ്ധ്യം, പട്ടിന്റെ ഓരോ സെന്റീമീറ്ററിലും ആലേഖനം ചെയ്തിരിക്കുന്നു.",
  },

  // Coast
  coastEyebrow: { en: "— By the Arabian Sea", ml: "— അറബിക്കടലിന്റെ തീരത്ത്" },
  coastP1: {
    en: "For four decades, Beauty Silks has stood a short walk from the gold-lit shores of Chavakkad Beach — where the Arabian Sea writes its own kasavu border across the sand each evening.",
    ml: "നാല് പതിറ്റാണ്ടായി, ബ്യൂട്ടി സിൽക്ക്സ് ചാവക്കാട് ബീച്ചിന്റെ സ്വർണ്ണ തീരങ്ങളിൽ നിന്ന് ഒരു ചെറിയ നടത്തത്തിന്റെ ദൂരത്തിലാണ് — ഓരോ സന്ധ്യയിലും അറബിക്കടൽ മണലിൽ സ്വന്തം കസവ് ബോർഡർ വരയ്ക്കുന്നിടം.",
  },
  coastP2: {
    en: "The light here is different. Softer at dawn, molten at dusk. It is the same light our weavers chase into every drape — silks that shimmer like sea-foam, golds that hold the colour of a Malabar sunset.",
    ml: "ഇവിടത്തെ വെളിച്ചം വ്യത്യസ്തമാണ്. പ്രഭാതത്തിൽ മൃദുവായതും സന്ധ്യയിൽ ഉരുകിയതും. അതേ വെളിച്ചമാണ് ഞങ്ങളുടെ നെയ്ത്തുകാർ ഓരോ സാരിയിലും പിന്തുടരുന്നത് — കടൽ നുരപോലെ തിളങ്ങുന്ന പട്ടുകൾ, മലബാർ സൂര്യാസ്തമയത്തിന്റെ നിറം പേറുന്ന സ്വർണ്ണം.",
  },
  coastStat1: { en: "From the beach", ml: "ബീച്ചിൽ നിന്ന്" },
  coastStat2: { en: "On this coast", ml: "ഈ തീരത്ത്" },
  coastStat3: { en: "One heritage", ml: "ഒരേ പാരമ്പര്യം" },
  arabianSea: { en: "Arabian Sea", ml: "അറബിക്കടൽ" },

  // Family
  familyEyebrow: { en: "— A Complete Family Shop", ml: "— സമ്പൂർണ കുടുംബ ഷോപ്പ്" },
  catWomen: { en: "Women", ml: "സ്ത്രീകൾ" },
  catWomenL: { en: "Sarees · Kurtas · Lehengas", ml: "സാരി · കുർത്ത · ലെഹംഗ" },
  catMen: { en: "Men", ml: "പുരുഷന്മാർ" },
  catMenL: { en: "Mundu · Shirts · Sherwanis", ml: "മുണ്ട് · ഷർട്ട് · ഷെർവാനി" },
  catKids: { en: "Kids", ml: "കുട്ടികൾ" },
  catKidsL: { en: "Festive · Casual · Wedding", ml: "ഉത്സവം · കാഷ്വൽ · വിവാഹം" },
  catCasual: { en: "Casual", ml: "കാഷ്വൽ" },
  catCasualL: { en: "Daily · Office · Resort", ml: "ദൈനംദിനം · ഓഫീസ് · റിസോർട്ട്" },
  catFestive: { en: "Festive", ml: "ഉത്സവം" },
  catFestiveL: { en: "Onam · Eid · Diwali", ml: "ഓണം · ഈദ് · ദീപാവലി" },
  catBridal: { en: "Bridal", ml: "വധു" },
  catBridalL: { en: "By appointment only", ml: "അപ്പോയിന്റ്മെന്റ് വഴി മാത്രം" },
  browse: { en: "Browse →", ml: "കാണുക →" },

  // Featured
  featuredEyebrow: { en: "— Featured", ml: "— പ്രത്യേകം" },
  viewAll: { en: "View all collections →", ml: "എല്ലാ ശേഖരങ്ങളും കാണുക →" },
  tagBridal: { en: "Bridal Edit", ml: "വധു എഡിറ്റ്" },
  tagReception: { en: "Reception", ml: "റിസപ്ഷൻ" },
  tagHeritage: { en: "Heritage", ml: "പാരമ്പര്യം" },
  tagGroom: { en: "Groom", ml: "വരൻ" },

  // Testimonials
  testEyebrow: { en: "— Words from our patrons", ml: "— ഉപഭോക്താക്കളിൽ നിന്ന്" },
  reviewsLine: { en: "4.9 · 2,800+ reviews", ml: "4.9 · 2,800+ അവലോകനങ്ങൾ" },
  test1Q: {
    en: "My wedding saree from Beauty Silks felt like it was woven just for me — the gold work caught every light in the mandap.",
    ml: "ബ്യൂട്ടി സിൽക്ക്സിൽ നിന്നുള്ള എന്റെ വിവാഹ സാരി എനിക്കായി മാത്രം നെയ്തതുപോലെ തോന്നി — മണ്ഡപത്തിലെ ഓരോ വെളിച്ചവും സ്വർണ്ണപ്പണി പിടിച്ചെടുത്തു.",
  },
  test1R: { en: "Bride · Thrissur", ml: "വധു · തൃശ്ശൂർ" },
  test2Q: {
    en: "Three generations of our family shop here. The hospitality is as fine as the silk.",
    ml: "ഞങ്ങളുടെ കുടുംബത്തിലെ മൂന്ന് തലമുറകൾ ഇവിടെ ഷോപ്പ് ചെയ്യുന്നു. ആതിഥ്യം പട്ടു പോലെത്തന്നെ മികച്ചതാണ്.",
  },
  test2R: { en: "Patron since 1998", ml: "1998 മുതലുള്ള ഉപഭോക്താവ്" },
  test3Q: {
    en: "The bridal stylist understood my vision in minutes. We walked out with the entire trousseau in one afternoon.",
    ml: "വധു സ്റ്റൈലിസ്റ്റ് മിനിറ്റുകൾക്കുള്ളിൽ എന്റെ കാഴ്ചപ്പാട് മനസ്സിലാക്കി. ഒരൊറ്റ ഉച്ചയിൽ ഞങ്ങൾ എല്ലാം വാങ്ങി പുറത്തിറങ്ങി.",
  },
  test3R: { en: "Newlyweds · Kochi", ml: "നവദമ്പതികൾ · കൊച്ചി" },

  // WhyUs
  whyEyebrow: { en: "— Why Beauty Silks", ml: "— എന്തുകൊണ്ട് ബ്യൂട്ടി സിൽക്ക്സ്" },
  why1T: { en: "Premium Quality", ml: "പ്രീമിയം ഗുണനിലവാരം" },
  why1D: { en: "Hand-picked weaves from master looms across India.", ml: "ഇന്ത്യയിലെ പ്രമുഖ നെയ്ത്തുശാലകളിൽ നിന്ന് തിരഞ്ഞെടുത്തവ." },
  why2T: { en: "Vast Collection", ml: "വിശാല ശേഖരം" },
  why2D: { en: "5,000+ ensembles across every region and occasion.", ml: "എല്ലാ പ്രദേശങ്ങളിലെയും അവസരങ്ങളിലെയും 5,000+ വസ്ത്രങ്ങൾ." },
  why3T: { en: "Wedding Specialists", ml: "വിവാഹ വിദഗ്ധർ" },
  why3D: { en: "Dedicated bridal studio with stylist consultations.", ml: "സ്റ്റൈലിസ്റ്റ് കൺസൾട്ടേഷനോടെ പ്രത്യേക വധു സ്റ്റുഡിയോ." },
  why4T: { en: "Customer Satisfaction", ml: "ഉപഭോക്തൃ സംതൃപ്തി" },
  why4D: { en: "4.9★ with 2,800+ verified reviews across Kerala.", ml: "കേരളത്തിലുടനീളം 2,800+ പരിശോധിച്ച അവലോകനങ്ങളോടെ 4.9★." },
  why5T: { en: "Family Destination", ml: "കുടുംബ ലക്ഷ്യസ്ഥാനം" },
  why5D: { en: "Men · women · kids · all under one elegant roof.", ml: "പുരുഷന്മാർ · സ്ത്രീകൾ · കുട്ടികൾ · എല്ലാം ഒരൊറ്റ കൂരയ്ക്കു കീഴിൽ." },
  why6T: { en: "Heritage & Trust", ml: "പാരമ്പര്യവും വിശ്വാസവും" },
  why6D: { en: "Four decades of weaving Kerala's wedding memories.", ml: "നാല് പതിറ്റാണ്ടായി കേരളത്തിന്റെ വിവാഹ ഓർമ്മകൾ നെയ്യുന്നു." },

  // Instagram
  followInsta: { en: "Follow on Instagram →", ml: "ഇൻസ്റ്റാഗ്രാമിൽ പിന്തുടരുക →" },

  // Contact
  visitEyebrow: { en: "— Visit the Atelier", ml: "— അറ്റെലിയർ സന്ദർശിക്കുക" },
  flagship: { en: "Flagship Store", ml: "ഫ്ലാഗ്ഷിപ്പ് സ്റ്റോർ" },
  flagshipBody: { en: "Beauty Silks\nMain Road, Chavakkad\nThrissur, Kerala 680506", ml: "ബ്യൂട്ടി സിൽക്ക്സ്\nമെയിൻ റോഡ്, ചാവക്കാട്\nതൃശ്ശൂർ, കേരളം 680506" },
  hours: { en: "Hours", ml: "സമയം" },
  hoursBody: { en: "Mon — Sat · 9:30 AM to 9:00 PM\nSunday · 10:00 AM to 8:00 PM\nBridal studio by appointment", ml: "തിങ്കൾ — ശനി · രാവിലെ 9:30 മുതൽ രാത്രി 9:00 വരെ\nഞായർ · രാവിലെ 10:00 മുതൽ രാത്രി 8:00 വരെ\nവധു സ്റ്റുഡിയോ അപ്പോയിന്റ്മെന്റ് വഴി" },
  connect: { en: "Connect", ml: "ബന്ധപ്പെടുക" },
  connectBody: { en: "+91 98470 00000\nhello@beautysilks.in\n@beautysilks.chavakkad", ml: "+91 98470 00000\nhello@beautysilks.in\n@beautysilks.chavakkad" },
  callAtelier: { en: "Call the Atelier", ml: "അറ്റെലിയറിലേക്ക് വിളിക്കുക" },
  getDirections: { en: "Get Directions", ml: "വഴി കാണുക" },
  findUs: { en: "Find us", ml: "ഞങ്ങളെ കണ്ടെത്തുക" },
  findUsBody: { en: "Chavakkad, Thrissur — Kerala", ml: "ചാവക്കാട്, തൃശ്ശൂർ — കേരളം" },

  // Footer
  footerTagline: {
    en: "Exclusive wedding collections in a complete family shop — woven with heritage from Chavakkad, by the Arabian Sea.",
    ml: "സമ്പൂർണ കുടുംബ ഷോപ്പിലെ എക്സ്ക്ലൂസീവ് വിവാഹ ശേഖരങ്ങൾ — അറബിക്കടലിന്റെ തീരത്തെ ചാവക്കാട്ടിൽ നിന്ന് പാരമ്പര്യത്തോടെ നെയ്തവ.",
  },
  footerColShop: { en: "Shop", ml: "ഷോപ്പ്" },
  footerColHouse: { en: "House", ml: "ഭവനം" },
  footerBridalSarees: { en: "Bridal Sarees", ml: "വധു സാരികൾ" },
  footerGroom: { en: "Groom Collections", ml: "വരൻ ശേഖരങ്ങൾ" },
  footerFamily: { en: "Family Fashion", ml: "കുടുംബ ഫാഷൻ" },
  footerDesigner: { en: "Designer Atelier", ml: "ഡിസൈനർ അറ്റെലിയർ" },
  footerHeritage: { en: "Heritage", ml: "പാരമ്പര്യം" },
  footerVisit: { en: "Visit", ml: "സന്ദർശിക്കുക" },
  footerBridalStudio: { en: "Bridal Studio", ml: "വധു സ്റ്റുഡിയോ" },
  footerInstagram: { en: "Instagram", ml: "ഇൻസ്റ്റാഗ്രാം" },
  footerCopy: { en: "Beauty Silks · Chavakkad, Kerala", ml: "ബ്യൂട്ടി സിൽക്ക്സ് · ചാവക്കാട്, കേരളം" },
  footerCrafted: { en: "Crafted with heritage", ml: "പാരമ്പര്യത്തോടെ നിർമ്മിച്ചത്" },
};

type Ctx = { lang: Lang; setLang: (l: Lang) => void; t: (k: keyof typeof dict) => string };
const LanguageContext = createContext<Ctx | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");
  const t = (k: keyof typeof dict) => dict[k]?.[lang] ?? "";
  return <LanguageContext.Provider value={{ lang, setLang, t }}>{children}</LanguageContext.Provider>;
}

export function useLang() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLang must be used within LanguageProvider");
  return ctx;
}
