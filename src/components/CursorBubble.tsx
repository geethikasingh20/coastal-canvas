import { useEffect, useRef } from "react";

/** Soft cursor follower with a trailing bubble — desktop only. */
export function CursorBubble() {
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    let mx = window.innerWidth / 2;
    let my = window.innerHeight / 2;
    let rx = mx;
    let ry = my;
    let raf = 0;

    const move = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      if (dot.current) {
        dot.current.style.transform = `translate3d(${mx - 4}px, ${my - 4}px, 0)`;
      }
    };
    const loop = () => {
      rx += (mx - rx) * 0.12;
      ry += (my - ry) * 0.12;
      if (ring.current) {
        ring.current.style.transform = `translate3d(${rx - 20}px, ${ry - 20}px, 0)`;
      }
      raf = requestAnimationFrame(loop);
    };

    const over = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      const interactive = t.closest("a,button,input,textarea,[data-cursor]");
      ring.current?.classList.toggle("cursor-ring--active", !!interactive);
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    raf = requestAnimationFrame(loop);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div
        ref={ring}
        className="cursor-ring pointer-events-none fixed left-0 top-0 z-[100] hidden h-10 w-10 rounded-full border border-ocean/60 mix-blend-difference md:block"
      />
      <div
        ref={dot}
        className="pointer-events-none fixed left-0 top-0 z-[100] hidden h-2 w-2 rounded-full bg-coral md:block"
      />
    </>
  );
}
