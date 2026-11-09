"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import {
  bioData,
  certificatesData,
  educationData,
  experienceData,
  portfolioData,
} from "@/data";

export type Language = "id" | "en";

const translations = {
  id: {
    nav: {
      about: "Tentang",
      education: "Pendidikan",
      experience: "Pengalaman",
      portfolio: "Portofolio",
      certificates: "Sertifikat",
      contact: "Hubungi aku",
      openMenu: "Buka menu",
      closeMenu: "Tutup menu",
      top: "Ke atas halaman",
    },
    hero: {
      greeting: "Halo, aku",
      portfolio: "Lihat portofolio",
      cv: "Unduh CV",
      about: "Tentang saya",
    },
    education: { title: "Pendidikan", aria: "Riwayat pendidikan" },
    experience: { title: "Pengalaman", aria: "Pengalaman kerja" },
    portfolio: {
      aria: "Portofolio proyek",
      track: "Slide portofolio",
      navigation: "Navigasi slide",
      choose: "Pilih slide",
      previous: "Proyek sebelumnya",
      next: "Proyek berikutnya",
      slide: "Slide",
      project: "Proyek",
      of: "dari",
      image: "Gambar Proyek",
      details: "Lihat detail",
      open: "Buka proyek",
      close: "Tutup detail proyek",
      information: "Informasi proyek",
    },
    certificates: {
      title: "Sertifikat & Pelatihan",
      aria: "Sertifikat dan pelatihan",
      image: "Gambar Sertifikat",
      view: "Lihat detail sertifikat",
      close: "Tutup modal",
    },
    contact: {
      aria: "Hubungi saya",
      title: "Ayo berkolaborasi",
      description:
        "Punya proyek yang ingin diwujudkan? Aku selalu terbuka untuk diskusi ide dan kolaborasi menarik. Kirimkan pesanmu!",
      form: "Formulir kontak email",
      email: "Alamat email",
      placeholder: "emailmu@contoh.com",
      send: "Kirim",
      success: "Terima kasih! Aku akan segera menghubungimu. ✨",
      madeWith: "Dibuat dengan",
      love: "cinta",
      coffee: "dan banyak kopi.",
    },
  },
  en: {
    nav: {
      about: "About",
      education: "Education",
      experience: "Experience",
      portfolio: "Portfolio",
      certificates: "Certificates",
      contact: "Contact me",
      openMenu: "Open menu",
      closeMenu: "Close menu",
      top: "Back to top",
    },
    hero: {
      greeting: "Hi, I'm",
      portfolio: "View portfolio",
      cv: "Download CV",
      about: "About me",
    },
    education: { title: "Education", aria: "Education history" },
    experience: { title: "Experience", aria: "Work experience" },
    portfolio: {
      aria: "Project portfolio",
      track: "Portfolio slides",
      navigation: "Slide navigation",
      choose: "Choose slide",
      previous: "Previous project",
      next: "Next project",
      slide: "Slide",
      project: "Project",
      of: "of",
      image: "Project image",
      details: "View details",
      open: "Open project",
      close: "Close project details",
      information: "Project information",
    },
    certificates: {
      title: "Certificates & Training",
      aria: "Certificates and training",
      image: "Certificate image",
      view: "View certificate details",
      close: "Close modal",
    },
    contact: {
      aria: "Contact me",
      title: "Let's collaborate",
      description:
        "Have a project in mind? I am always open to discussing ideas and exciting collaborations. Send me a message!",
      form: "Email contact form",
      email: "Email address",
      placeholder: "you@example.com",
      send: "Send",
      success: "Thank you! I will get back to you soon. ✨",
      madeWith: "Made with",
      love: "love",
      coffee: "and lots of coffee.",
    },
  },
} as const;

const englishBio = {
  tagline: "designer",
  bio: "Fullstack Developer with experience building end-to-end websites, from system design and frontend and backend development to server deployment. Experienced in integrating Artificial Intelligence into applications, including Retrieval Augmented Generation (RAG) chatbots and LLMs to make user interaction with systems easier. Comfortable working independently or in teams, and always eager to learn new technologies.",
};

const englishEducation = [
  {
    year: "2025 - 2026",
    description: "GPA 3.64 / 4.00 · Graduated with Cum Laude honors",
  },
  {
    year: "2022 – 2025",
    description: "GPA 3.87 / 4.00 · Graduated with Cum Laude honors",
  },
];

const englishExperience = [
  {
    period: "Jan 2024 – Present",
    achievements: [
      "Redesigned the main mobile app, increasing user retention by 32%.",
      "Built a design system from scratch with 200+ consistent components.",
      "Led user research sessions with 50+ participants across 3 cities.",
    ],
  },
  {
    period: "Jul – Dec 2023",
    achievements: [
      "Designed digital campaign materials for 10+ SME clients.",
      "Developed a new visual identity that increased social media engagement by 45%.",
    ],
  },
];

const englishPortfolio = [
  {
    title: "Turning *ideas* into *experiences*",
    description: "Designing a user experience that simplifies daily financial management for young Indonesians.",
    points: [
      "Simplified daily income and expense tracking.",
      "Researched the financial habits of young Indonesians.",
      "Created easy-to-understand budgeting, financial insight, and reminder flows.",
      "Iteratively tested prototypes to ensure a practical experience.",
    ],
  },
  {
    title: "Design that *tells stories* and *breathes*",
    description: "Building an end-to-end digital ecosystem to help Indonesian SMEs go digital with ease.",
    points: [
      "Mapped the needs of shop owners who were new to digital technology.",
      "Designed product catalogs, order tracking, and a business dashboard in one flow.",
      "Created a simple design system that works across screen sizes.",
      "Optimized onboarding so SMEs could start selling quickly.",
    ],
  },
  {
    title: "Weaving *identity* through *visuals*",
    description: "Building a brand identity from scratch for an eco-lifestyle startup, from logo to complete brand guidelines.",
    points: [
      "Translated Bumi's sustainability values into a warm, modern visual identity.",
      "Developed the logo concept, color palette, typography, and supporting graphic elements.",
      "Created brand guidelines to keep the identity consistent across touchpoints.",
      "Prepared visual assets for digital, packaging, and social media needs.",
    ],
  },
];

const LanguageContext = createContext<{
  language: Language;
  setLanguage: (language: Language) => void;
  t: (typeof translations)[Language];
} | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("id");

  useEffect(() => {
    const timer = window.setTimeout(() => {
      const saved = window.localStorage.getItem("portfolio-language");
      if (saved === "id" || saved === "en") setLanguageState(saved);
    }, 0);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const setLanguage = (nextLanguage: Language) => {
    setLanguageState(nextLanguage);
    window.localStorage.setItem("portfolio-language", nextLanguage);
  };

  const value = useMemo(
    () => ({ language, setLanguage, t: translations[language] }),
    [language]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within LanguageProvider");
  return context;
}

export function getLocalizedData(language: Language) {
  if (language === "id") {
    return { bioData, educationData, experienceData, portfolioData, certificatesData };
  }

  return {
    bioData: { ...bioData, ...englishBio },
    educationData: educationData.map((item, index) => ({ ...item, ...englishEducation[index] })),
    experienceData: experienceData.map((item, index) => ({ ...item, ...englishExperience[index] })),
    portfolioData: portfolioData.map((item, index) => ({
      ...item,
      ...englishPortfolio[index],
      caseStudy: { points: englishPortfolio[index].points },
    })),
    certificatesData,
  };
}
