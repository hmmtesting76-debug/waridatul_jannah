"use client";

import { getLocalizedData, useLanguage } from "@/i18n";

export default function EducationSection() {
  const { language, t } = useLanguage();
  const { educationData } = getLocalizedData(language);
  return (
    <section
      id="pendidikan"
      className="py-24 px-6 max-w-2xl mx-auto"
      aria-label={t.education.aria}
    >
      <h2
        className="reveal font-[Outfit] font-semibold text-[clamp(2rem,5vw,3rem)] tracking-[-0.025em] mb-16 text-center"
        data-reveal="up"
      >
        {t.education.title}
      </h2>

      <div className="relative">
        {/* Timeline line */}
        <div
          aria-hidden="true"
          className="absolute left-4 top-0 bottom-0 w-px bg-stone-200"
        />

        <div className="flex flex-col gap-8">
          {educationData.map((edu, i) => (
            <div
              key={edu.id}
              className="reveal flex gap-6"
              data-reveal="right"
              style={{ transitionDelay: `${i * 0.15}s` }}
            >
              {/* Dot */}
              <div className="relative shrink-0 flex flex-col items-center">
                <div
                  className="w-8 h-8 rounded-full border-4 border-white flex items-center justify-center shadow-sm"
                  style={{ background: "#FFB7B2" }}
                  aria-hidden="true"
                />
              </div>

              {/* Card */}
              <div
                className="flex-1 bg-white rounded-3xl p-6 shadow-[0_4px_20px_-2px_rgba(0,0,0,0.05)]"
              >
                <span className="text-xs font-medium text-[#78716C] bg-stone-100 px-2.5 py-1 rounded-full">
                  {edu.year}
                </span>
                <h3 className="font-semibold text-lg mt-3 mb-0.5 text-[#292524]">
                  {edu.institution}
                </h3>
                <p className="text-sm text-[#78716C] mb-2">{edu.major}</p>
                <p className="text-sm text-[#292524]">{edu.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
