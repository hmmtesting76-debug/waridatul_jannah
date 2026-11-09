"use client";

import { useEffect } from "react";

const REVEAL_SELECTOR = ".js [data-reveal]:not([data-reveal-initial])";

export default function AnimationSystem() {
  useEffect(() => {
    const root = document.documentElement;

    if (!root.classList.contains("js")) {
      return;
    }

    const initialElements = document.querySelectorAll<HTMLElement>(
      ".js [data-reveal-initial]"
    );
    const initialFrame = requestAnimationFrame(() => {
      initialElements.forEach((element) => element.classList.add("in"));
    });

    if (!("IntersectionObserver" in window)) {
      document
        .querySelectorAll<HTMLElement>(".js [data-reveal]")
        .forEach((element) => element.classList.add("in"));
      return () => cancelAnimationFrame(initialFrame);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("in");
          observer.unobserve(entry.target);
        });
      },
      {
        rootMargin: "0px 0px -12% 0px",
        threshold: 0.08,
      }
    );

    document.querySelectorAll<HTMLElement>(REVEAL_SELECTOR).forEach((element) => {
      observer.observe(element);
    });

    const heading = document.querySelector<HTMLElement>("[data-hero-heading]");
    let frame = 0;

    const updateHero = () => {
      frame = 0;
      const progress = Math.min(window.scrollY / 360, 1);
      heading?.style.setProperty("--hero-shift", `${progress * -18}px`);
    };

    const handleScroll = () => {
      if (!frame) frame = requestAnimationFrame(updateHero);
    };

    updateHero();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      cancelAnimationFrame(initialFrame);
      if (frame) cancelAnimationFrame(frame);
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return null;
}
