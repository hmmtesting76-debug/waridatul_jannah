"use client";

import { useEffect, useState } from "react";
import { getLocalizedData, useLanguage } from "@/i18n";

export default function HeroSection() {
  const { language, t } = useLanguage();
  const { bioData } = getLocalizedData(language);
  const [typedBio, setTypedBio] = useState("");

  useEffect(() => {
    const resetTyping = window.setTimeout(() => setTypedBio(""), 0);
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const completeTyping = window.setTimeout(() => {
        setTypedBio(bioData.bio);
      }, 0);

      return () => {
        window.clearTimeout(resetTyping);
        window.clearTimeout(completeTyping);
      };
    }

    let characterIndex = 0;
    const typingInterval = window.setInterval(() => {
      characterIndex += 1;
      setTypedBio(bioData.bio.slice(0, characterIndex));

      if (characterIndex >= bioData.bio.length) {
        window.clearInterval(typingInterval);
      }
    }, 16);

    return () => {
      window.clearTimeout(resetTyping);
      window.clearInterval(typingInterval);
    };
  }, [bioData.bio]);

  return (
    <section
      id="tentang"
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-28 pb-20 overflow-hidden"
      aria-label={t.hero.about}
    >
      {/* Background blobs */}
      <div
        aria-hidden="true"
        className="blob-float absolute top-1/4 -left-32 w-80 h-80 rounded-full blur-3xl pointer-events-none"
        style={{ background: "#FFE4E1", opacity: 0.6 }}
      />
      <div
        aria-hidden="true"
        className="blob-float-delay absolute bottom-1/4 -right-32 w-96 h-96 rounded-full blur-3xl pointer-events-none"
        style={{ background: "#E6E6FA", opacity: 0.6 }}
      />

      {/* Headline */}
      <h1
        className="reveal hero-heading font-[Outfit] font-semibold text-[clamp(2.5rem,8vw,4.5rem)] leading-tight tracking-[-0.025em] mb-4 max-w-2xl"
        data-reveal="up"
        data-reveal-initial
        data-hero-heading
        style={{ transitionDelay: "0.1s" }}
      >
        {t.hero.greeting}{" "}
        <span className="font-reenie text-[1.3em] text-[#FFB7B2] align-middle">
          Waridatul
        </span>{" "}
        Jannah
      </h1>

      {/* Sub-headline */}
      <p
        className="reveal text-[#78716C] text-base md:text-lg leading-relaxed max-w-[720px] mb-8"
        data-reveal="up"
        style={{ transitionDelay: "0.2s" }}
        aria-label={bioData.bio}
      >
        <span aria-hidden="true">
          {typedBio}
          <span
            className="inline-block w-0.5 h-[1.1em] bg-[#FFB7B2] align-[-0.15em] ml-1 animate-pulse"
            aria-hidden="true"
          />
        </span>
      </p>

      {/* CTAs */}
      <div
        className="reveal flex flex-wrap gap-3 justify-center mb-10"
        data-reveal="up"
        style={{ transitionDelay: "0.3s" }}
      >
        <a
          href="#portofolio"
          className="px-6 py-3 rounded-full bg-[#FFB7B2] text-[#292524] font-medium text-sm hover:bg-[#ff9e98] transition-colors shadow-[0_4px_20px_-2px_rgba(255,183,178,0.4)]"
        >
          {t.hero.portfolio}
        </a>
        <a
          href={bioData.cvUrl}
          download
          className="px-6 py-3 rounded-full bg-white border border-stone-200 text-[#292524] font-medium text-sm hover:bg-stone-50 transition-colors"
        >
          {t.hero.cv}
        </a>
      </div>

      {/* Skill chips */}
      <div
        className="reveal flex flex-wrap gap-2 justify-center max-w-md"
        data-reveal="up"
        style={{ transitionDelay: "0.4s" }}
      >
        {bioData.skills.map((skill, i) => (
          <span
            key={skill}
            className="px-3 py-1.5 rounded-full text-xs font-medium text-[#292524]"
            style={{
              background: i % 2 === 0 ? "#E8EFE8" : "#EFEDF4",
            }}
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}
