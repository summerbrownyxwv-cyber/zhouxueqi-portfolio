import { useEffect, useRef } from "react";

const CHARS = ["~", "-", "_", "/", "\\", "|", "+", "=", ":"];

export default function MouseReactiveBackground({ className = "" }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");
    if (!canvas || !context) return undefined;

    const root = canvas.parentElement;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let animationFrame = 0;
    let width = 0;
    let height = 0;
    let cells = [];
    let running = true;
    const mouse = {
      x: -1000,
      y: -1000,
      targetX: -1000,
      targetY: -1000,
      strength: 0,
      lastMove: 0,
    };

    function buildCells() {
      const cellSize = width < 700 ? 24 : 20;
      const fontSize = width < 700 ? 12 : 13;
      const columns = Math.ceil(width / cellSize) + 2;
      const rows = Math.ceil(height / cellSize) + 2;

      cells = [];
      for (let y = 0; y < rows; y += 1) {
        for (let x = 0; x < columns; x += 1) {
          cells.push({
            x: x * cellSize - cellSize * 0.5,
            y: y * cellSize - cellSize * 0.2,
            base: Math.floor(Math.random() * CHARS.length),
            phase: Math.random() * Math.PI * 2,
            drift: Math.random() * 0.8 + 0.2,
            cellSize,
            fontSize,
          });
        }
      }
    }

    function resize() {
      const rect = root?.getBoundingClientRect();
      width = Math.max(1, rect?.width ?? window.innerWidth);
      height = Math.max(1, rect?.height ?? window.innerHeight);
      const dpr = Math.min(window.devicePixelRatio || 1, 1.25);
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
      buildCells();
    }

    function draw(time = 0) {
      context.clearRect(0, 0, width, height);
      context.textBaseline = "middle";
      context.textAlign = "center";

      const sinceMove = time - mouse.lastMove;
      const targetStrength = sinceMove < 1300 ? 1.08 : 0;
      mouse.strength += (targetStrength - mouse.strength) * 0.06;
      mouse.x += (mouse.targetX - mouse.x) * 0.08;
      mouse.y += (mouse.targetY - mouse.y) * 0.08;

      for (const cell of cells) {
        const dx = cell.x - mouse.x;
        const dy = cell.y - mouse.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const wave = Math.sin(time * 0.00062 + cell.phase + cell.x * 0.018) * 0.5 + 0.5;
        const radius = 250 + wave * 70;
        const rawInfluence = Math.max(0, 1 - distance / radius) * mouse.strength;
        const influence = rawInfluence * rawInfluence * (3 - 2 * rawInfluence);
        const lift = Math.sin(time * 0.0011 + cell.phase) * cell.drift * 1.2;
        const offsetX = influence * Math.sin(cell.phase + time * 0.002) * 6.4;
        const offsetY = lift + influence * Math.cos(cell.phase + time * 0.0016) * 6.4;
        const charIndex = Math.min(
          CHARS.length - 1,
          cell.base + Math.floor(influence * 5.2 + wave * 1.35),
        );

        context.font = `${cell.fontSize}px var(--font-sans)`;
        context.fillStyle = `rgba(0, 0, 0, ${0.04 + wave * 0.012 + influence * 0.18})`;
        context.fillText(CHARS[charIndex], cell.x + offsetX, cell.y + offsetY);
      }

      if (running && !reducedMotion.matches && !document.hidden) {
        animationFrame = window.requestAnimationFrame(draw);
      }
    }

    function handlePointerMove(event) {
      if (event.pointerType && event.pointerType !== "mouse") return;
      const rect = root?.getBoundingClientRect();
      mouse.targetX = event.clientX - (rect?.left ?? 0);
      mouse.targetY = event.clientY - (rect?.top ?? 0);
      mouse.lastMove = performance.now();
    }

    function handlePointerLeave() {
      mouse.lastMove = 0;
    }

    function handleVisibilityChange() {
      if (document.hidden) {
        window.cancelAnimationFrame(animationFrame);
        return;
      }
      if (!reducedMotion.matches) {
        animationFrame = window.requestAnimationFrame(draw);
      }
    }

    resize();

    if (reducedMotion.matches) {
      draw(0);
    } else {
      animationFrame = window.requestAnimationFrame(draw);
    }

    const resizeObserver = root && "ResizeObserver" in window ? new ResizeObserver(resize) : null;
    resizeObserver?.observe(root);

    window.addEventListener("resize", resize);
    root?.addEventListener("pointermove", handlePointerMove, { passive: true });
    root?.addEventListener("pointerleave", handlePointerLeave);
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      running = false;
      window.cancelAnimationFrame(animationFrame);
      resizeObserver?.disconnect();
      window.removeEventListener("resize", resize);
      root?.removeEventListener("pointermove", handlePointerMove);
      root?.removeEventListener("pointerleave", handlePointerLeave);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  return (
    <canvas className={`mouse-background ${className}`.trim()} ref={canvasRef} aria-hidden="true" />
  );
}
