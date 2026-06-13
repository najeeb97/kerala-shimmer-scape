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
  langEnglish: { en: "English", ml: "English" },
  langMalayalam: { en: "മലയാളം", ml: "മലയാളം" },

  // Hero
  heroH1a: { en: "Threads", ml: "പാരമ്പര്യത്തിന്റെ" },
  heroH1b: { en: "of", ml: "നൂലുകൾ," },
  heroH1c: { en: "Heritage,", ml: "" },
  heroH1d: { en: "woven for dreams.", ml: "സ്വപ്നങ്ങൾക്കായി നെയ്തെടുത്തത്." },
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
