"use client";

import { getLocalizedData, useLanguage } from "@/i18n";

const colorMap = {
  sage: { bg: "#E8EFE8", label: "bg-[#E8EFE8]" },
  lavender: { bg: "#EFEDF4", label: "bg-[#EFEDF4]" },
};

export default function ExperienceSection() {
  const { language, t } = useLanguage();
  const { experienceData } = getLocalizedData(language);
  return (
    <section
      id="pengalaman"
      className="py-24 px-6 max-w-2xl mx-auto"
      aria-label={t.experience.aria}
    >
      <h2 className="reveal font-[Outfit] font-semibold text-[clamp(2rem,5vw,3rem)] tracking-[-0.025em] mb-16 text-center" data-reveal="up">
        {t.experience.title}
      </h2>

      <div className="relative">
        <div
          aria-hidden="true"
          className="absolute left-4 top-0 bottom-0 w-px bg-stone-200"
        />

        <div className="flex flex-col gap-8">
          {experienceData.map((exp, i) => {
            const c = colorMap[exp.color];
            return (
              <div
                key={exp.id}
                className="reveal flex gap-6"
                data-reveal="left"
                style={{ transitionDelay: `${i * 0.15}s` }}
              >
                {/* Dot */}
                <div className="relative shrink-0">
                  <div
                    className="w-8 h-8 rounded-full border-4 border-white shadow-sm"
                    style={{ background: "#FFB7B2" }}
                    aria-hidden="true"
                  />
                </div>

                {/* Card */}
                <div
                  className="flex-1 rounded-3xl p-6 shadow-[0_4px_20px_-2px_rgba(0,0,0,0.05)]"
                  style={{ background: c.bg }}
                >
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                    <div>
                      <h3 className="font-semibold text-lg text-[#292524]">{exp.position}</h3>
                      <p className="text-sm text-[#78716C]">{exp.company}</p>
                    </div>
                    <span className="text-xs font-medium text-[#78716C] bg-white/70 px-2.5 py-1 rounded-full shrink-0">
                      {exp.period}
                    </span>
                  </div>
                  <ul className="space-y-1.5">
                    {exp.achievements.map((a, j) => (
                      <li key={j} className="text-sm text-[#292524] flex gap-2">
                        <span className="text-[#FFB7B2] mt-0.5 shrink-0" aria-hidden="true">
                          ◆
                        </span>
                        {a}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
