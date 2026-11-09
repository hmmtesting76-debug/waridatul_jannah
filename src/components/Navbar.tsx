"use client";
import { useEffect, useState } from "react";
import { useLanguage } from "@/i18n";

export default function Navbar() {
  const { language, setLanguage, t } = useLanguage();
  const navLinks = [
    { label: t.nav.about, href: "#tentang" },
    { label: t.nav.education, href: "#pendidikan" },
    { label: t.nav.experience, href: "#pengalaman" },
    { label: t.nav.portfolio, href: "#portofolio" },
    { label: t.nav.certificates, href: "#sertifikat" },
  ];
  const [active, setActive] = useState("#tentang");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = ["tentang", "pendidikan", "pengalaman", "portofolio", "sertifikat"];
      let current = "#tentang";
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 120) {
          current = "#" + id;
        }
      }
      setActive(current);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-4 left-0 right-0 z-40 flex justify-center px-4">
      <nav
        role="navigation"
        aria-label={t.nav.about}
        className="w-full max-w-3xl rounded-full px-4 py-2 flex items-center justify-between gap-2 transition-all duration-300"
        style={{
          background: scrolled
            ? "rgba(255,255,255,0.75)"
            : "rgba(255,255,255,0.55)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          boxShadow: "0 4px 20px -2px rgba(0,0,0,0.05)",
        }}
      >
        {/* Logo */}
        <a
          href="#tentang"
          aria-label={t.nav.top}
          className="w-9 h-9 rounded-full bg-[#FFB7B2] flex items-center justify-center shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFB7B2]"
        >
          <span className="w-2 h-2 rounded-full bg-white" aria-hidden="true" />
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-1 list-none">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className={`px-3 py-1.5 rounded-full text-sm font-medium font-[Outfit] transition-colors ${
                  active === l.href
                    ? "bg-[#FFB7B2]/30 text-[#292524]"
                    : "text-[#78716C] hover:text-[#292524]"
                }`}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-2">
          <LanguageToggle language={language} setLanguage={setLanguage} label={t.nav.language} />
          <a
            href="#kontak"
            className="inline-flex items-center px-4 py-2 rounded-full bg-[#292524] text-white text-sm font-medium font-[Outfit] hover:bg-[#3c3836] transition-colors shrink-0"
          >
            {t.nav.contact}
          </a>
        </div>

        {/* Hamburger */}
        <button
          className="md:hidden p-2 rounded-full text-[#292524] hover:bg-black/5 transition-colors"
          aria-label={menuOpen ? t.nav.closeMenu : t.nav.openMenu}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="sr-only">{menuOpen ? t.nav.closeMenu : t.nav.openMenu}</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            {menuOpen ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="4" y1="8" x2="20" y2="8" />
                <line x1="4" y1="16" x2="20" y2="16" />
              </>
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div
          className="absolute top-16 left-4 right-4 rounded-3xl p-4 flex flex-col gap-1 md:hidden"
          style={{
            background: "rgba(255,255,255,0.92)",
            backdropFilter: "blur(20px)",
            boxShadow: "0 4px 20px -2px rgba(0,0,0,0.08)",
          }}
        >
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className={`px-4 py-3 rounded-2xl text-sm font-medium transition-colors ${
                active === l.href
                  ? "bg-[#FFB7B2]/30 text-[#292524]"
                  : "text-[#78716C] hover:text-[#292524] hover:bg-black/5"
              }`}
            >
              {l.label}
            </a>
          ))}
          <LanguageToggle language={language} setLanguage={setLanguage} label={t.nav.language} />
          <a
            href="#kontak"
            onClick={() => setMenuOpen(false)}
            className="mt-2 px-4 py-3 rounded-2xl bg-[#292524] text-white text-sm font-medium text-center hover:bg-[#3c3836] transition-colors"
          >
            {t.nav.contact}
          </a>
        </div>
      )}
    </header>
  );
}

function LanguageToggle({
  language,
  setLanguage,
  label,
}: {
  language: "id" | "en";
  setLanguage: (language: "id" | "en") => void;
  label: string;
}) {
  return (
    <div className="flex items-center gap-1 rounded-full bg-stone-100 p-1" aria-label={label}>
      {(["id", "en"] as const).map((option) => (
        <button
          key={option}
          type="button"
          onClick={() => setLanguage(option)}
          aria-pressed={language === option}
          className={`px-2.5 py-1 rounded-full text-xs font-semibold uppercase transition-colors ${
            language === option ? "bg-white text-[#292524] shadow-sm" : "text-[#78716C]"
          }`}
        >
          {option}
        </button>
      ))}
    </div>
  );
}
