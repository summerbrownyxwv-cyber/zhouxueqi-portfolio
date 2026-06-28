import { useEffect } from "react";

const REVEAL_SELECTORS = [
  ".reel-copy",
  ".section-divider",
  ".project-showcase",
  ".library-intro",
  ".library-card",
  ".resume-hero",
  ".resume-section",
  ".email-grid",
  ".project-hero",
];

export default function RevealOnScroll({ watchKey }) {
  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let observer;
    let frame = 0;
    const timers = [];

    function revealElement(element) {
      element.classList.add("is-visible");
      const timer = window.setTimeout(() => {
        element.classList.add("reveal-done");
      }, 720);
      timers.push(timer);
    }

    frame = window.requestAnimationFrame(() => {
      const elements = Array.from(document.querySelectorAll(REVEAL_SELECTORS.join(",")));

      elements.forEach((element, index) => {
        element.classList.add("reveal");
        element.style.setProperty("--reveal-delay", `${Math.min(index % 6, 5) * 55}ms`);
      });

      if (reducedMotion || !("IntersectionObserver" in window)) {
        elements.forEach((element) => {
          element.classList.add("is-visible", "reveal-done");
        });
        return;
      }

      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            revealElement(entry.target);
            observer.unobserve(entry.target);
          });
        },
        { rootMargin: "0px 0px -8% 0px", threshold: 0.12 },
      );

      elements.forEach((element) => observer.observe(element));
    });

    return () => {
      window.cancelAnimationFrame(frame);
      timers.forEach((timer) => window.clearTimeout(timer));
      observer?.disconnect();
    };
  }, [watchKey]);

  return null;
}
