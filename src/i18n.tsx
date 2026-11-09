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
      language: "Pilih bahasa",
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
      language: "Choose language",
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
    major: "Applied Bachelor's Degree in Informatics Engineering",
    year: "2025 - 2026",
    description: "GPA 3.64 / 4.00 · Graduated with Cum Laude honors",
  },
  {
    major: "Associate Degree in Informatics Engineering",
    year: "2022 – 2025",
    description: "GPA 3.87 / 4.00 · Graduated with Cum Laude honors",
  },
];

const englishExperience = [
  {
    period: "October 2026",
    achievements: [
      "Built a fashion e-commerce website template for clothing businesses.",
      "Developed a responsive interface with Tailwind CSS and used Next.js features to improve loading speed and SEO.",
    ],
  },
  {
    period: "June 2026",
    achievements: [
      "Redesigned the Nura Store website UI/UX to strengthen the brand's visual appeal.",
      "Built a responsive interface with Tailwind CSS and used Next.js to create a lightweight, SEO-friendly website and significantly improve the user experience.",
    ],
  },
  {
    period: "January 2025 – June 2025",
    achievements: [
      "Designed and developed the company's internal career portal, including a responsive UI/UX for job listings, events, meeting minutes, articles, and company profiles.",
      "Built a centralized internal admin dashboard to manage company content and monitor applicant data, improving recruitment efficiency and information sharing.",
    ],
  },
  {
    period: "July 2024 – December 2024",
    achievements: [
      "Developed a company profile website with an admin dashboard for content management using Filament and MySQL.",
      "Collaborated with an intern development team to build an online practice-test platform for schools using CodeIgniter and PostgreSQL.",
      "Developed an internal finance system with CodeIgniter and PostgreSQL to support financial monitoring and management decision-making.",
    ],
  },
];

const englishPortfolio = [
  {
    title: "Fashion E-commerce Website Template",
    projectTitle: "Fashion E-commerce Website Template",
    year: "November 2026",
    description:
      "Built a modern, responsive, ready-to-use website template for fashion businesses in October 2026. The interface uses Tailwind CSS for a consistent look across devices, while Next.js features help deliver fast load times and SEO-friendly pages that are easier for potential customers to find.",
    points: [
      "Developed product catalog, detail, and shopping cart layouts optimized for phones, tablets, and desktops, with a clean design that can be customized to match a brand's identity.",
      "Used server-side rendering and static generation, image optimization with next/image, and metadata management to reduce load times and improve search engine rankings.",
    ],
  },
  {
    title: "Nura Store Website Redesign",
    projectTitle: "Nura Store Website Redesign",
    year: "June 2026",
    description:
      "Redesigned the Nura Store website UI/UX to strengthen its visual identity and create a more enjoyable shopping experience. The interface uses Tailwind CSS for responsiveness across devices, while Next.js helps deliver a lightweight, fast, SEO-friendly website that significantly improves the user experience.",
    points: [
      "Refreshed the brand's look with a new color palette, typography, and layout, then implemented it with Tailwind CSS for a consistent experience across phones, tablets, and desktops.",
      "Used static generation and server-side rendering, image optimization with next/image, and metadata management to make the website lighter, faster, and easier to find in search engines.",
    ],
  },
  {
    title: "Development of PT Multi Spunindo Jaya's Career Portal",
    projectTitle: "PT Multi Spunindo Jaya Career Portal",
    description:
      "Designed and developed the company's internal career portal with a responsive UI/UX for job listings, events, meeting minutes, articles, and company profiles. A centralized admin dashboard manages all content and monitors applicant data. Laravel and MySQL power dynamic job listings, making recruitment and information sharing more efficient.",
    points: [
      "Designed and built consistent, easy-to-navigate, responsive pages for job listings, events, meeting minutes, articles, and company profiles.",
      "Built a centralized internal dashboard to manage content and monitor applicant data, using Laravel and MySQL to manage and display job listings dynamically.",
    ],
  },
  {
    title: "RAG Chatbot for Meeting Minutes",
    projectTitle: "RAG Chatbot for Meeting Minutes",
    description:
      "Developed a web platform that uses Retrieval-Augmented Generation (RAG) to process meeting minutes. Users can upload meeting documents and ask a chatbot questions about their contents. Answers are grounded in stored documents, helping users find meeting decisions more quickly.",
    points: [
      "Built meeting-document uploads and an interactive chatbot for questions about meeting contents. RAG combines LLM capabilities with factual evidence retrieved from documents to provide relevant, grounded answers.",
      "Built the backend with FastAPI and the frontend with React Router in framework mode. PostgreSQL with pgvector provides vector search; LangChain orchestrates the workflow; Ollama runs local LLM and embedding models; and FlashRank (Hugging Face) reranks results for improved relevance.",
    ],
  },
  {
    title: "OTOBOOK: Automatic Book Metadata Reader for Library Collections",
    projectTitle: "OTOBOOK: Automatic Book Metadata Reader for Library Collections",
    description:
      "Received a Student Creativity Program (PKM-KC) grant with a team for OTOBOOK, an automatic metadata reader for library collections. This Flutter mobile app uses Tesseract OCR to read text from book covers and information pages, then uses OpenAI to structure the results as metadata, making library cataloging faster and reducing manual entry.",
    points: [
      "Developed a Flutter app that lets users scan a book cover or copyright page and automatically extract text with Tesseract OCR as the basis for book data entry.",
      "Integrated OpenAI to clean and organize OCR results into metadata such as title, author, publisher, publication year, and ISBN, making library collection data more accurate and ready to save.",
    ],
  },
  {
    title: "SkinSync: Skincare E-commerce Platform",
    projectTitle: "SkinSync: Skincare E-commerce Platform",
    description:
      "Developed a complete e-commerce website for SkinSync, an Indonesian skincare brand. The platform features categorized product listings for cleansers, serums, moisturizers, sunscreen, and more, along with online payments through Midtrans and notification broadcasts through Fonnte. Built with Next.js and PostgreSQL for speed, SEO, and reliable product and transaction management.",
    points: [
      "Built responsive, SEO-friendly catalog, category, and product detail pages, along with a shopping flow from login to checkout. Product, user, and order data are managed in PostgreSQL.",
      "Integrated Midtrans for online payments (QRIS, virtual accounts, and credit cards) and Fonnte for automated WhatsApp messages, including order updates, shipping receipts, and promotional broadcasts, streamlining transactions and customer communication.",
    ],
  },
  {
    title: "KosKita: Boarding House Management Platform",
    projectTitle: "KosKita: Boarding House Management Platform",
    description:
      "Developed KosKita, a web platform for finding, managing, and paying for boarding-house accommodation. Laravel powers the backend and React the frontend, with Midtrans for online payments and Fonnte for WhatsApp notifications, making communication and transactions between property owners and tenants faster and more organized.",
    points: [
      "Built a responsive React interface for searching accommodations, viewing room details, and managing property listings, connected to a Laravel backend that centrally manages rooms, tenants, and transactions.",
      "Integrated Midtrans for online rent payments and Fonnte for automated WhatsApp messages such as payment confirmations, due-date reminders, and announcements, reducing manual work and making rental management more efficient.",
    ],
  },
  {
    title: "RoomReserve: Room Reservation Platform",
    projectTitle: "RoomReserve: Room Reservation Platform",
    description:
      "Developed RoomReserve, a web-based room and classroom reservation system for campus use. Built with Laravel, a TailAdmin admin dashboard, and PostgreSQL, the platform centrally manages buildings, rooms, and schedules in real time while preventing booking conflicts.",
    points: [
      "Built pages listing buildings and rooms, including capacity and facilities, today's availability, and room schedules. Users can register, log in, and make reservations easily across devices.",
      "Provided a TailAdmin dashboard for managing buildings, rooms, and reservations, backed by Laravel and PostgreSQL for more efficient, accurate, and organized scheduling.",
    ],
  },
  {
    title: "Company Profile Website with Admin Dashboard",
    projectTitle: "Company Profile Website with Admin Dashboard",
    description:
      "Developed a company profile website with an admin dashboard for easy content management. Built with Filament and MySQL, it lets the company update its information independently, quickly, and in an organized way without developer assistance.",
    points: [
      "Built professional, responsive, and accessible pages for the company profile, services, and other supporting information.",
      "Provided a centralized admin panel for managing company content, with data stored in MySQL for efficient and organized updates.",
    ],
  },
  {
    title: "Online Practice-Test Platform for Schools",
    projectTitle: "Online Practice-Test Platform for Schools",
    description:
      "Collaborated with an intern development team to build an online practice-test platform with CodeIgniter and PostgreSQL. The platform supports schools in delivering digital exams that are organized and easy to manage.",
    points: [
      "Worked with the intern development team to plan features, divide tasks, and integrate platform modules for coordinated delivery.",
      "Built reliable management for test questions, participants, and results with CodeIgniter and PostgreSQL to flexibly serve the needs of different schools.",
    ],
  },
  {
    title: "Internal Company Finance System",
    projectTitle: "Internal Company Finance System",
    description:
      "Developed an internal company finance system with CodeIgniter and PostgreSQL to support accurate financial monitoring and help management make data-driven decisions.",
    points: [
      "Developed structured transaction and financial reporting features so the company's financial position can be monitored easily and transparently.",
      "Used CodeIgniter and PostgreSQL to provide accurate, integrated data, helping management make faster, better-informed decisions.",
    ],
  },
];

const englishCertificates = [
  { year: "May 2025 – May 2027", name: "TOEFL (450)" },
  { year: "December 2025 – March 2026", name: "Web Programming" },
  { year: "May 2025 – May 2027", name: "Junior Web Developer" },
  { year: "March 2026 – July 2026", name: "AI Fundamentals" },
  { year: "March 2026 – July 2026", name: "Prompt Engineering for Software Developers" },
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
    portfolioData: portfolioData.map((item, index) => {
      const translation = englishPortfolio[index];
      if (!translation) return item;

      return {
        ...item,
        ...translation,
        caseStudy: { points: translation.points },
      };
    }),
    certificatesData: certificatesData.map((item, index) => ({
      ...item,
      ...englishCertificates[index],
    })),
  };
}
