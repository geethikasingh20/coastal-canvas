import { useMemo } from "react";
import { motion } from "framer-motion";

/** Lazy drifting bubbles — decorative sea texture. */
export function Bubbles({
  count = 18,
  className,
  tone = "light",
}: {
  count?: number;
  className?: string;
  tone?: "light" | "dark";
}) {
  const items = useMemo(
    () =>
      Array.from({ length: count }).map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        size: 6 + Math.random() * 28,
        delay: Math.random() * 8,
        duration: 10 + Math.random() * 14,
        drift: (Math.random() - 0.5) * 80,
      })),
    [count],
  );

  const ring = tone === "light" ? "border-background/40" : "border-ocean/40";
  const fill = tone === "light" ? "bg-background/10" : "bg-ocean/10";

  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className ?? ""}`}
      aria-hidden
    >
      {items.map((b) => (
        <motion.span
          key={b.id}
          initial={{ y: "110%", x: 0, opacity: 0 }}
          animate={{
            y: "-20%",
            x: [0, b.drift, 0],
            opacity: [0, 0.9, 0.9, 0],
          }}
          transition={{
            duration: b.duration,
            delay: b.delay,
            repeat: Infinity,
            ease: "easeInOut",
            times: [0, 0.1, 0.85, 1],
          }}
          style={{
            left: `${b.left}%`,
            width: b.size,
            height: b.size,
          }}
          className={`absolute bottom-0 rounded-full border ${ring} ${fill} backdrop-blur-[2px]`}
        />
      ))}
    </div>
  );
}
