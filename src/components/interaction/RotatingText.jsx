import { useEffect, useMemo, useRef, useState } from "react";

const SHUFFLE_CHARS = ".:-+=*";

function usePrefersReducedMotion() {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(media.matches);

    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  return reducedMotion;
}

function shuffleToward(text, progress) {
  return Array.from(text)
    .map((char, index) => {
      if (char === " " || char === "/" || char === "-") return char;
      if (index / Math.max(text.length - 1, 1) < progress) return char;
      return SHUFFLE_CHARS[(index + Math.floor(progress * 11)) % SHUFFLE_CHARS.length];
    })
    .join("");
}

export default function RotatingText({
  items,
  interval = 1700,
  suffix = "",
  className = "",
  ariaLabel = "动态关键词",
}) {
  const reducedMotion = usePrefersReducedMotion();
  const safeItems = useMemo(() => items.filter(Boolean), [items]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [displayText, setDisplayText] = useState(safeItems[0] ?? "");
  const timeouts = useRef([]);

  useEffect(() => {
    setDisplayText(safeItems[0] ?? "");
    setActiveIndex(0);
  }, [safeItems]);

  useEffect(() => {
    if (reducedMotion || safeItems.length <= 1) {
      setDisplayText(safeItems[0] ?? "");
      return undefined;
    }

    const clearShuffle = () => {
      timeouts.current.forEach((timeout) => window.clearTimeout(timeout));
      timeouts.current = [];
    };

    const animateTo = (nextIndex) => {
      const nextText = safeItems[nextIndex];
      clearShuffle();

      for (let frame = 0; frame < 7; frame += 1) {
        const timeout = window.setTimeout(() => {
          const progress = frame / 6;
          setDisplayText(frame === 6 ? nextText : shuffleToward(nextText, progress));
        }, frame * 36);
        timeouts.current.push(timeout);
      }
    };

    const ticker = window.setInterval(() => {
      setActiveIndex((current) => {
        const next = (current + 1) % safeItems.length;
        animateTo(next);
        return next;
      });
    }, interval);

    return () => {
      window.clearInterval(ticker);
      clearShuffle();
    };
  }, [interval, reducedMotion, safeItems]);

  if (!safeItems.length) return null;

  return (
    <span
      className={`rotating-text ${className}`.trim()}
      aria-label={`${ariaLabel}: ${safeItems[activeIndex]}${suffix}`}
    >
      <span className="rotating-text__text" aria-hidden="true">
        {displayText}
        {suffix}
      </span>
    </span>
  );
}
