import type { Metadata } from "next";
import AnimationSystem from "@/components/AnimationSystem";
import { LanguageProvider } from "@/i18n";
import "./globals.css";

export const metadata: Metadata = {
  title: "Waridatul Jannah — UI/UX Designer",
  description:
    "Portfolio personal Waridatul Jannah, desainer UI/UX yang bersemangat menciptakan pengalaman digital bermakna.",
  keywords: ["UI/UX Designer", "Figma", "Portfolio", "Waridatul Jannah"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className="scroll-smooth">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
                document.documentElement.classList.add("js");
              }
            `,
          }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&family=Reenie+Beanie&family=Playfair+Display:ital,wght@1,400;1,600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#FDFCF8] text-[#292524] antialiased">
        <AnimationSystem />
        {/* Grain overlay */}
        <svg
          id="grain-overlay"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
        >
          <filter id="grain-filter">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.65"
              numOctaves="3"
              stitchTiles="stitch"
            />
            <feColorMatrix type="saturate" values="0" />
          </filter>
          <rect width="100%" height="100%" filter="url(#grain-filter)" />
        </svg>

        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
