"use client";
import { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";
import { portfolioData } from "@/data";
import { getLocalizedData, useLanguage } from "@/i18n";

// ─── Tool icons are loaded from public/images/tools ───────────────────────────
const ToolIcon = ({ name, src }: { name: string; src: string }) => {
  const [hasError, setHasError] = useState(false);
  const colors: Record<string, string> = {
    figma: "#F24E1E",
    illustrator: "#FF9A00",
    photoshop: "#31A8FF",
    figjam: "#F24E1E",
    maze: "#FF4154",
    notion: "#000000",
    zeplin: "#FDBD39",
    miro: "#050038",
    indesign: "#FF3366",
  };
  const color = colors[name.toLowerCase()] ?? "#a78b71";
  const initials = name.slice(0, 2).toUpperCase();

  if (!hasError) {
    return (
      <Image
        src={src}
        alt=""
        fill
        sizes="32px"
        loading="lazy"
        className="object-contain"
        onError={() => setHasError(true)}
      />
    );
  }

  return (
    <div
      className="w-full h-full rounded-full flex items-center justify-center text-white text-xs font-bold"
      style={{ background: color }}
      aria-hidden="true"
    >
      {initials}
    </div>
  );
};

// ─── Parse title with *highlighted* words ─────────────────────────────────────
function ParsedTitle({ raw }: { raw: string }) {
  const parts = raw.split(/(\*[^*]+\*)/g);
  return (
    <>
      {parts.map((part, i) =>
        part.startsWith("*") && part.endsWith("*") ? (
          <em key={i} className="not-italic" style={{ color: "#a78b71" }}>
            {part.slice(1, -1)}
          </em>
        ) : (
          <span key={i}>{part}</span>
        )
      )}
    </>
  );
}

// ─── Satellite positions (desktop) ───────────────────────────────────────────
const SAT_POSITIONS_DESKTOP = [
  { top: "10%", left: "5%", delay: "0s" },
  { top: "50%", left: "2%", delay: "0.8s" },
  { top: "80%", left: "12%", delay: "1.4s" },
  { top: "10%", right: "5%", left: "auto", delay: "0.4s" },
  { top: "50%", right: "2%", left: "auto", delay: "1.1s" },
  { top: "80%", right: "12%", left: "auto", delay: "1.7s" },
];
const SAT_POSITIONS_MOBILE = [
  { x: "-120px", y: "-30px" },
  { x: "-60px", y: "-80px" },
  { x: "0px", y: "-100px" },
  { x: "60px", y: "-80px" },
  { x: "120px", y: "-30px" },
  { x: "60px", y: "30px" },
];

// ─── SVG Connector ────────────────────────────────────────────────────────────
function Connectors({
  nodeRef,
  satRefs,
  count,
}: {
  nodeRef: React.RefObject<HTMLDivElement | null>;
  satRefs: React.RefObject<(HTMLDivElement | null)[]>;
  count: number;
}) {
  const svgRef = useRef<SVGSVGElement>(null);
  const pathsRef = useRef<SVGPathElement[]>([]);

  const updatePaths = useCallback(() => {
    const svg = svgRef.current;
    const node = nodeRef.current;
    if (!svg || !node) return;

    const svgRect = svg.getBoundingClientRect();
    const nodeRect = node.getBoundingClientRect();
    const nCx = nodeRect.left - svgRect.left + nodeRect.width / 2;
    const nCy = nodeRect.top - svgRect.top + nodeRect.height / 2;

    satRefs.current.slice(0, count).forEach((sat, i) => {
      if (!sat || !pathsRef.current[i]) return;
      const sRect = sat.getBoundingClientRect();
      const sCx = sRect.left - svgRect.left + sRect.width / 2;
      const sCy = sRect.top - svgRect.top + sRect.height / 2;

      const dx = sCx - nCx;
      const dy = sCy - nCy;
      const mx = nCx + dx * 0.5 - dy * 0.15;
      const my = nCy + dy * 0.5 + dx * 0.15;

      pathsRef.current[i].setAttribute(
        "d",
        `M ${nCx} ${nCy} Q ${mx} ${my} ${sCx} ${sCy}`
      );
    });
  }, [nodeRef, satRefs, count]);

  useEffect(() => {
    // Initial draw + on resize
    const raf = requestAnimationFrame(updatePaths);
    window.addEventListener("resize", updatePaths);
    // Re-draw on animation frame loop for floating sats
    let running = true;
    const loop = () => {
      updatePaths();
      if (running) requestAnimationFrame(loop);
    };
    requestAnimationFrame(loop);
    return () => {
      running = false;
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", updatePaths);
    };
  }, [updatePaths, count]);

  return (
    <svg
      ref={svgRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      aria-hidden="true"
      style={{ zIndex: 0 }}
    >
      {Array.from({ length: count }).map((_, i) => (
        <path
          key={i}
          ref={(el) => {
            pathsRef.current[i] = el!;
          }}
          fill="none"
          stroke="#a78b71"
          strokeWidth="1.5"
          opacity="0.5"
          className="branch-path"
          style={{ animationDelay: `${i * 0.4}s` }}
        />
      ))}
    </svg>
  );
}

function ProjectDetailModal({
  project,
  onClose,
  labels,
}: {
  project: (typeof portfolioData)[0] | null;
  onClose: () => void;
  labels: ReturnType<typeof useLanguage>["t"]["portfolio"];
}) {
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    if (!project) return;
    const handler = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-detail-title"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" aria-hidden="true" />
      <div
        className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-3xl bg-white shadow-2xl"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="relative aspect-video bg-stone-100">
          <Image
            src={project.image}
            alt={`${labels.image}: ${project.projectTitle}`}
            fill
            className="object-cover"
            loading="lazy"
            onError={() => setImageError(true)}
          />
          {imageError && (
            <div className="absolute inset-0 flex items-center justify-center text-sm text-stone-400">
              {labels.image}
            </div>
          )}
        </div>
        <div className="p-6 sm:p-8">
          <p className="mb-1 text-xs text-stone-400">
            {project.role} · {project.year}
          </p>
          <h2 id="project-detail-title" className="text-2xl font-semibold text-stone-800">
            {project.projectTitle}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-stone-600">{project.description}</p>
          <h3 className="mt-6 text-sm font-semibold uppercase tracking-widest text-[#a78b71]">
            {labels.information}
          </h3>
          <ul className="mt-3 space-y-3 text-sm leading-relaxed text-stone-600">
            {project.caseStudy.points.map((point) => (
              <li key={point} className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#a78b71]" aria-hidden="true" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
          <div className="mt-6 flex flex-wrap gap-2">
            {project.tools.map((tool) => (
              <span key={tool.name} className="rounded-full bg-stone-100 px-3 py-1 text-xs text-stone-600">
                {tool.name}
              </span>
            ))}
          </div>
        </div>
        <button
          onClick={onClose}
          className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/85 text-stone-600 shadow-sm backdrop-blur hover:bg-white transition-colors"
          aria-label={labels.close}
        >
          ✕
        </button>
      </div>
    </div>
  );
}

// ─── Single portfolio slide ───────────────────────────────────────────────────
function PortfolioSlide({
  project,
  index,
  total,
  onOpenDetails,
  labels,
}: {
  project: (typeof portfolioData)[0];
  index: number;
  total: number;
  onOpenDetails: (project: (typeof portfolioData)[0]) => void;
  labels: ReturnType<typeof useLanguage>["t"]["portfolio"];
}) {
  const nodeRef = useRef<HTMLDivElement>(null);
  const satRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [imageError, setImageError] = useState(false);

  return (
    <div
      className="portfolio-slide relative flex flex-col items-center justify-center px-6 py-20 overflow-hidden"
      aria-label={`${labels.project} ${index + 1} ${labels.of} ${total}: ${project.projectTitle}`}
    >
      {/* Background blob */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full blur-3xl pointer-events-none"
        style={{ background: "#a78b71", opacity: 0.08 }}
      />

      {/* Top headline */}
      <h2
        className="font-playfair italic text-center mb-8 relative z-10 max-w-2xl"
        style={{
          fontSize: "clamp(2rem, 6vw, 4.5rem)",
          color: "#F5F0E8",
          lineHeight: 1.15,
        }}
      >
        <ParsedTitle raw={project.title} />
      </h2>

      {/* Main layout */}
      <div className="relative w-full max-w-4xl flex items-center justify-center min-h-[320px] z-10">
        {/* SVG connectors (behind everything) */}
        <Connectors
          nodeRef={nodeRef}
          satRefs={satRefs}
          count={project.tools.length}
        />

        {/* Satellites — desktop: absolute, mobile: flex row above/below */}
        <div className="hidden md:block absolute inset-0" aria-hidden="true">
          {project.tools.map((tool, i) => {
            const pos = SAT_POSITIONS_DESKTOP[i] ?? { top: "50%", left: "50%", delay: "0s" };
            return (
              <div
                key={tool.name}
                ref={(el) => { satRefs.current[i] = el; }}
                className="absolute w-14 h-14 glass-card flex flex-col items-center justify-center gap-1 cursor-default"
                style={{
                  ...pos,
                  borderRadius: "50%",
                  animation: `floatSat 6s ease-in-out ${pos.delay} infinite`,
                  transform: "translate(-50%,-50%)",
                }}
                title={tool.name}
              >
                <div className="relative w-8 h-8">
                  <ToolIcon name={tool.name} src={tool.icon} />
                </div>
                <span className="text-[9px] text-white/70 font-medium leading-none">
                  {tool.name}
                </span>
              </div>
            );
          })}
        </div>

        {/* Mobile satellites */}
        <div
          className="md:hidden absolute -top-16 left-1/2 -translate-x-1/2 flex gap-2 z-10"
          aria-hidden="true"
        >
          {project.tools.slice(0, 4).map((tool, i) => (
            <div
              key={tool.name}
              ref={(el) => { satRefs.current[i] = el; }}
              className="w-11 h-11 glass-card flex items-center justify-center rounded-full"
              style={{ animation: `floatSat 6s ease-in-out ${i * 0.4}s infinite` }}
              title={tool.name}
            >
              <div className="relative w-7 h-7">
                <ToolIcon name={tool.name} src={tool.icon} />
              </div>
            </div>
          ))}
        </div>

        {/* Central node card */}
        <div
          ref={nodeRef}
          className="glass-card relative z-10 overflow-hidden hover:scale-[1.02] transition-transform duration-500"
          style={{
            width: "min(100%, 480px)",
            aspectRatio: "16/9",
            boxShadow: "0 0 40px rgba(167,139,113,0.15)",
          }}
        >
          <Image
            src={project.image}
            alt={`${labels.image}: ${project.projectTitle}`}
            fill
            className="object-cover"
            loading="lazy"
            onError={() => setImageError(true)}
          />
          {imageError && (
            <div
              className="absolute inset-0 flex items-center justify-center"
              style={{ background: "linear-gradient(135deg,#a78b71 0%,#78716C 100%)" }}
            >
              <span className="text-white/60 font-[Outfit] text-sm">{labels.image}</span>
            </div>
          )}
        </div>

        {/* Mobile bottom sats */}
        <div
          className="md:hidden absolute -bottom-16 left-1/2 -translate-x-1/2 flex gap-2 z-10"
          aria-hidden="true"
        >
          {project.tools.slice(4).map((tool, i) => (
            <div
              key={tool.name}
              ref={(el) => { satRefs.current[4 + i] = el; }}
              className="w-11 h-11 glass-card flex items-center justify-center rounded-full"
              style={{ animation: `floatSat 6s ease-in-out ${(4 + i) * 0.4}s infinite` }}
              title={tool.name}
            >
              <div className="relative w-7 h-7">
                <ToolIcon name={tool.name} src={tool.icon} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project info + CTAs */}
      <div className="relative z-10 mt-10 md:mt-14 text-center max-w-lg">
        <p className="text-xs text-[#a78b71] font-medium uppercase tracking-widest mb-1">
          {project.role} · {project.year}
        </p>
        <h3 className="text-white font-semibold text-xl mb-2">{project.projectTitle}</h3>
        <p className="text-white/60 text-sm leading-relaxed mb-6">{project.description}</p>

        <div className="flex flex-wrap gap-3 justify-center">
          <button
            type="button"
            onClick={() => onOpenDetails(project)}
            className="px-5 py-2.5 rounded-full border border-white/40 text-white/90 text-sm font-medium hover:bg-white/10 hover:-translate-y-0.5 transition-all duration-200"
          >
            {labels.details}
          </button>
          <a
            href={project.projectUrl}
            className="px-5 py-2.5 rounded-full bg-white text-[#292524] text-sm font-medium hover:bg-white/90 hover:-translate-y-0.5 transition-all duration-200"
          >
            {labels.open}
          </a>
        </div>
      </div>
    </div>
  );
}

// ─── Portfolio Section ────────────────────────────────────────────────────────
export default function PortfolioSection() {
  const { language, t } = useLanguage();
  const { portfolioData } = getLocalizedData(language);
  const trackRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedProject, setSelectedProject] = useState<(typeof portfolioData)[0] | null>(null);
  const total = portfolioData.length;

  // Translate vertical wheel -> horizontal scroll while section is in view
  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    const onWheel = (e: WheelEvent) => {
      const rect = section.getBoundingClientRect();
      if (rect.top > 0 || rect.bottom < window.innerHeight) return;

      const maxScrollLeft = track.scrollWidth - track.clientWidth;
      const atStart = track.scrollLeft <= 1;
      const atEnd = track.scrollLeft >= maxScrollLeft - 1;
      const scrollingDown = e.deltaY > 0;
      const scrollingUp = e.deltaY < 0;

      // Let the page continue vertically once the horizontal track reaches an edge.
      if ((scrollingDown && atEnd) || (scrollingUp && atStart)) return;

      e.preventDefault();
      track.scrollBy({ left: e.deltaY, behavior: "auto" });
    };
    window.addEventListener("wheel", onWheel, { passive: false });
    return () => window.removeEventListener("wheel", onWheel);
  }, []);

  // Track current slide
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const onScroll = () => {
      const index = Math.round(track.scrollLeft / track.clientWidth);
      setCurrentIndex(index);
    };
    track.addEventListener("scroll", onScroll, { passive: true });
    return () => track.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = useCallback((index: number) => {
    const track = trackRef.current;
    if (!track) return;
    const clamped = Math.max(0, Math.min(total - 1, index));
    track.scrollTo({ left: clamped * track.clientWidth, behavior: "smooth" });
  }, [total]);

  // Keyboard nav
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const track = trackRef.current;
      if (!track) return;
      if (e.key === "ArrowRight") scrollTo(currentIndex + 1);
      if (e.key === "ArrowLeft") scrollTo(currentIndex - 1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [currentIndex, scrollTo]);

  return (
    <section
      id="portofolio"
      ref={sectionRef}
      className="relative"
      aria-label={t.portfolio.aria}
      style={{ background: "#292524" }}
    >
      {/* Section label */}
      <div className="absolute top-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1">
        <span className="text-xs text-[#a78b71] font-medium uppercase tracking-widest">
          Portofolio
        </span>
      </div>

      {/* Horizontal track */}
      <div
        ref={trackRef}
        id="portfolio-track"
        role="region"
        aria-label={t.portfolio.track}
        tabIndex={0}
      >
        {portfolioData.map((project, i) => (
          <PortfolioSlide
            key={project.id}
            project={project}
            index={i}
            total={total}
            onOpenDetails={setSelectedProject}
            labels={t.portfolio}
          />
        ))}
      </div>

      {/* Nav controls */}
      <div
        className="absolute bottom-6 left-0 right-0 flex items-center justify-center gap-4 z-20"
        aria-label={t.portfolio.navigation}
      >
        <button
          onClick={() => scrollTo(currentIndex - 1)}
          disabled={currentIndex === 0}
          aria-label={t.portfolio.previous}
          className="w-9 h-9 rounded-full border border-white/20 text-white/70 flex items-center justify-center hover:bg-white/10 disabled:opacity-30 transition-all"
        >
          ←
        </button>

        {/* Dots */}
        <div className="flex gap-2" role="tablist" aria-label={t.portfolio.choose}>
          {portfolioData.map((_, i) => (
            <button
              key={i}
              role="tab"
              aria-selected={i === currentIndex}
              aria-label={`${t.portfolio.slide} ${i + 1}`}
              onClick={() => scrollTo(i)}
              className="transition-all duration-300"
              style={{
                width: i === currentIndex ? "24px" : "8px",
                height: "8px",
                borderRadius: "9999px",
                background: i === currentIndex ? "#a78b71" : "rgba(255,255,255,0.3)",
              }}
            />
          ))}
        </div>

        <button
          onClick={() => scrollTo(currentIndex + 1)}
          disabled={currentIndex === total - 1}
          aria-label={t.portfolio.next}
          className="w-9 h-9 rounded-full border border-white/20 text-white/70 flex items-center justify-center hover:bg-white/10 disabled:opacity-30 transition-all"
        >
          →
        </button>

        <span className="text-[#a78b71] text-xs font-medium tabular-nums ml-2">
          {String(currentIndex + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
        </span>
      </div>

      <ProjectDetailModal
        key={selectedProject?.id ?? "project-detail-closed"}
        project={selectedProject}
        labels={t.portfolio}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
