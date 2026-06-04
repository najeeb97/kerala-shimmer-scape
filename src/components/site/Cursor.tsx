import { useEffect, useRef, useState } from "react";

export function Cursor() {
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(hover: none)").matches) return;
    setEnabled(true);

    const target = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const ringPos = { x: target.x, y: target.y };
    let hovering = false;

    const move = (e: MouseEvent) => {
      target.x = e.clientX;
      target.y = e.clientY;
      if (dot.current) {
        dot.current.style.transform = `translate3d(${target.x}px, ${target.y}px, 0) translate(-50%, -50%)`;
      }
    };
    const over = (e: MouseEvent) => {
      const el = (e.target as HTMLElement)?.closest("a,button,[data-cursor]");
      hovering = !!el;
      if (ring.current) ring.current.dataset.hover = hovering ? "1" : "0";
    };

    let raf = 0;
    const loop = () => {
      ringPos.x += (target.x - ringPos.x) * 0.18;
      ringPos.y += (target.y - ringPos.y) * 0.18;
      if (ring.current) {
        ring.current.style.transform = `translate3d(${ringPos.x}px, ${ringPos.y}px, 0) translate(-50%, -50%)`;
      }
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
    };
  }, []);

  if (!enabled) return null;
  return (
    <>
      <div
        ref={ring}
        data-hover="0"
        className="pointer-events-none fixed top-0 left-0 z-[90] w-10 h-10 rounded-full border border-primary/60 mix-blend-difference transition-[width,height,opacity] duration-300 data-[hover=1]:w-16 data-[hover=1]:h-16 data-[hover=1]:bg-primary/15"
        style={{ willChange: "transform" }}
      />
      <div
        ref={dot}
        className="pointer-events-none fixed top-0 left-0 z-[91] w-1.5 h-1.5 rounded-full bg-primary mix-blend-difference"
        style={{ willChange: "transform" }}
      />
    </>
  );
}