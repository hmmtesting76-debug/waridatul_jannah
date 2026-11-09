"use client";
import { useEffect, useState } from "react";
import { socialLinks } from "@/data";
import { useLanguage } from "@/i18n";

export default function ContactSection() {
  const { t } = useLanguage();
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setYear(new Date().getFullYear());
    }, 0);
    return () => window.clearTimeout(timer);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
    setEmail("");
  };

  return (
    <section
      id="kontak"
      className="relative py-28 px-6 overflow-hidden"
      aria-label={t.contact.aria}
    >
      {/* Background blobs */}
      <div
        aria-hidden="true"
        className="blob-float absolute top-0 left-1/4 w-72 h-72 rounded-full blur-3xl pointer-events-none"
        style={{ background: "#FFE4E1", opacity: 0.4 }}
      />
      <div
        aria-hidden="true"
        className="blob-float-delay absolute bottom-0 right-1/4 w-96 h-96 rounded-full blur-3xl pointer-events-none"
        style={{ background: "#E6E6FA", opacity: 0.4 }}
      />

      <div className="relative max-w-xl mx-auto text-center">
        {/* Icon */}
        <div className="reveal mb-6 flex justify-center" data-reveal="up">
          <div className="w-14 h-14 rounded-2xl bg-[#292524] flex items-center justify-center shadow-lg">
            <div className="w-3 h-3 rounded-full bg-[#FFB7B2]" aria-hidden="true" />
          </div>
        </div>

        <h2
          className="reveal font-[Outfit] font-semibold text-[clamp(2rem,5vw,3rem)] tracking-[-0.025em] mb-4"
          data-reveal="up"
          style={{ transitionDelay: "0.1s" }}
        >
          {t.contact.title}
        </h2>
        <p
          className="reveal text-[#78716C] text-lg mb-10 leading-relaxed"
          data-reveal="up"
          style={{ transitionDelay: "0.2s" }}
        >
          {t.contact.description}
        </p>

        {/* Email form */}
        <form
          onSubmit={handleSubmit}
          className="reveal flex gap-2 max-w-sm mx-auto mb-10"
          data-reveal="up"
          style={{ transitionDelay: "0.3s" }}
          aria-label={t.contact.form}
        >
          <label htmlFor="contact-email" className="sr-only">{t.contact.email}</label>
          <input
            id="contact-email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={t.contact.placeholder}
            required
            className="flex-1 px-4 py-3 rounded-full bg-stone-50 border border-stone-200 text-sm text-[#292524] placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-[#FFB7B2] transition"
          />
          <button
            type="submit"
            className="px-5 py-3 rounded-full bg-[#292524] text-white text-sm font-medium hover:bg-[#3c3836] hover:scale-105 transition-all duration-200 shrink-0"
          >
            {t.contact.send}
          </button>
        </form>

        {submitted && (
          <p className="text-sm text-[#78716C] mb-6 animate-fade-in" role="status">
            {t.contact.success}
          </p>
        )}

        {/* Social links */}
        <div
          className="reveal flex gap-4 justify-center"
          data-reveal="up"
          style={{ transitionDelay: "0.4s" }}
        >
          <SocialLink href={socialLinks.behance} label="Behance">
            <BehanceIcon />
          </SocialLink>
          <SocialLink href={socialLinks.instagram} label="Instagram">
            <InstagramIcon />
          </SocialLink>
          <SocialLink href={socialLinks.linkedin} label="LinkedIn">
            <LinkedInIcon />
          </SocialLink>
          <SocialLink href={`mailto:${socialLinks.email}`} label="Email">
            <EmailIcon />
          </SocialLink>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative mt-20 text-center">
        <p className="text-xs text-stone-400">
          © {year ?? ""} Waridatul Jannah. {t.contact.madeWith}{" "}
          <span aria-label={t.contact.love}>♥</span> {t.contact.coffee}
        </p>
      </footer>
    </section>
  );
}

function SocialLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="w-10 h-10 rounded-full bg-stone-100 flex items-center justify-center text-[#78716C] hover:bg-[#FFB7B2] hover:text-white transition-all duration-200"
    >
      {children}
    </a>
  );
}

const BehanceIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M22 7h-7V5h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14H15.97c.13 1.202.836 1.887 2.179 1.887.874 0 1.452-.343 1.822-1.058l1.755.2zM15.998 13h3.455c-.069-1.347-.801-2.1-1.737-2.1-.978 0-1.598.754-1.718 2.1zm-9.936 2.558c.654-.075 1.075-.288 1.359-.731.284-.443.428-1.141.428-2.098 0-.957-.13-1.713-.39-2.277s-.601-.858-1.021-.882H3.998v5.988l2.064.000zm-2.065 1.967V22H0V2h7.498c.878 0 1.645.158 2.291.467.645.308 1.172.747 1.577 1.313.4.56.638 1.213.715 1.954.075.741.016 1.47-.176 2.188-.19.718-.538 1.323-1.034 1.796-.497.47-1.056.776-1.68.918.724.138 1.325.456 1.796.959.47.503.738 1.197.808 2.08.067.882.012 1.73-.165 2.564-.178.837-.528 1.555-1.047 2.144-.521.59-1.19.993-2.004 1.219-.812.226-1.792.333-2.936.333H3.997z" />
  </svg>
);

const InstagramIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
    <rect x="2" y="2" width="20" height="20" rx="5" />
    <circle cx="12" cy="12" r="5" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
  </svg>
);

const LinkedInIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const EmailIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <polyline points="2,4 12,13 22,4" />
  </svg>
);
