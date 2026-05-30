import { useEffect, useRef } from "react";

/**
 * Lightweight animated water-caustic overlay rendered on a canvas.
 * Cheap sine field — no WebGL — but reads like sunlight dancing on water.
 */
export function HeroWater() {
  const canvas = useRef<HTMLCanvasElement>(null);
  const mouse = useRef({ x: 0.5, y: 0.5 });

  useEffect(() => {
    const c = canvas.current!;
    const ctx = c.getContext("2d")!;
    let w = 0, h = 0, t = 0, raf = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const resize = () => {
      w = c.clientWidth;
      h = c.clientHeight;
      c.width = w * dpr;
      c.height = h * dpr;
      ctx.scale(dpr, dpr);
    };
    resize();

    const onMove = (e: MouseEvent) => {
      const r = c.getBoundingClientRect();
      mouse.current.x = (e.clientX - r.left) / r.width;
      mouse.current.y = (e.clientY - r.top) / r.height;
    };

    const draw = () => {
      t += 0.008;
      ctx.clearRect(0, 0, w, h);
      const cols = 36;
      const rows = 22;
      const cw = w / cols;
      const rh = h / rows;
      const mx = mouse.current.x;
      const my = mouse.current.y;

      for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
          const nx = x / cols;
          const ny = y / rows;
          const dx = nx - mx;
          const dy = ny - my;
          const d = Math.sqrt(dx * dx + dy * dy);
          const wave =
            Math.sin(x * 0.4 + t * 2) +
            Math.cos(y * 0.5 + t * 1.5) +
            Math.sin(d * 12 - t * 4) * 1.2;
          const a = Math.max(0, (wave + 2) * 0.04);
          ctx.fillStyle = `rgba(255,255,255,${a})`;
          ctx.fillRect(x * cw, y * rh, cw + 1, rh + 1);
        }
      }
      raf = requestAnimationFrame(draw);
    };
    raf = requestAnimationFrame(draw);

    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", onMove);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
    };
  }, []);

  return (
    <canvas
      ref={canvas}
      className="pointer-events-none absolute inset-0 h-full w-full mix-blend-soft-light"
      aria-hidden
    />
  );
}
