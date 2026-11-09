"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { certificatesData } from "@/data";
import { getLocalizedData, useLanguage } from "@/i18n";

function CertModal({
  cert,
  onClose,
  labels,
}: {
  cert: (typeof certificatesData)[0] | null;
  onClose: () => void;
  labels: ReturnType<typeof useLanguage>["t"]["certificates"];
}) {
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    if (!cert) return;
    const handler = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [cert, onClose]);

  if (!cert) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label={`${labels.view}: ${cert.name}`}
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" aria-hidden="true" />
      <div
        className="relative bg-white rounded-3xl overflow-hidden max-w-lg w-full shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="aspect-video relative bg-stone-100">
          <Image
            src={cert.image}
            alt={cert.name}
            fill
            className="object-cover"
            loading="lazy"
            onError={() => setImageError(true)}
          />
          {imageError && (
            <div className="absolute inset-0 flex items-center justify-center text-stone-400 text-sm">
              {labels.image}
            </div>
          )}
        </div>
        <div className="p-6">
          <p className="text-xs text-stone-400 mb-1">{cert.year} · {cert.issuer}</p>
          <h3 className="font-semibold text-lg text-stone-800">{cert.name}</h3>
        </div>
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/80 backdrop-blur flex items-center justify-center text-stone-600 hover:bg-white transition-colors"
          aria-label={labels.close}
        >
          ✕
        </button>
      </div>
    </div>
  );
}

export default function CertificatesSection() {
  const { language, t } = useLanguage();
  const { certificatesData } = getLocalizedData(language);
  const [selected, setSelected] = useState<(typeof certificatesData)[0] | null>(null);

  return (
    <section
      id="sertifikat"
      className="py-24 px-6"
      aria-label={t.certificates.aria}
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="reveal font-[Outfit] font-semibold text-[clamp(2rem,5vw,3rem)] tracking-[-0.025em] mb-12 text-center" data-reveal="up">
          {t.certificates.title}
        </h2>

        {/* Horizontal scroll */}
        <div
          className="reveal flex gap-4 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory"
          data-reveal="right"
          style={{ transitionDelay: "0.1s" }}
        >
          {certificatesData.map((cert) => (
            <button
              key={cert.id}
              onClick={() => setSelected(cert)}
              className="shrink-0 w-72 h-40 bg-white rounded-3xl p-5 shadow-[0_4px_20px_-2px_rgba(0,0,0,0.05)] snap-center text-left group hover:shadow-md transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFB7B2]"
              aria-label={`${t.certificates.view}: ${cert.name}`}
            >
              <span className="block text-xs text-stone-400 mb-auto">{cert.year}</span>
              <div className="mt-auto">
                <p className="font-semibold text-[1.1rem] text-stone-800 group-hover:text-[#FFB7B2] transition-colors leading-snug">
                  {cert.name}
                </p>
                <p className="text-xs text-stone-400 mt-1">{cert.issuer}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      <CertModal
        key={selected?.id ?? "certificate-modal-closed"}
        cert={selected}
        labels={t.certificates}
        onClose={() => setSelected(null)}
      />
    </section>
  );
}
