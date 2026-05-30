import { motion, useMotionValue, useSpring } from "framer-motion";
import { type ReactNode, type MouseEvent } from "react";

export function MagneticButton({
  children,
  className,
  href,
  strength = 0.35,
}: {
  children: ReactNode;
  className?: string;
  href?: string;
  strength?: number;
}) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 200, damping: 15 });
  const sy = useSpring(y, { stiffness: 200, damping: 15 });

  function onMove(e: MouseEvent<HTMLElement>) {
    const r = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - (r.left + r.width / 2)) * strength);
    y.set((e.clientY - (r.top + r.height / 2)) * strength);
  }
  function onLeave() {
    x.set(0);
    y.set(0);
  }

  const Cmp: any = href ? motion.a : motion.button;
  return (
    <Cmp
      href={href}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ x: sx, y: sy }}
      className={className}
      data-cursor="magnetic"
    >
      {children}
    </Cmp>
  );
}
