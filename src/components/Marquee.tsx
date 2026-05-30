import { motion } from "framer-motion";
import { type ReactNode } from "react";

export function Marquee({
  items,
  speed = 40,
  className,
}: {
  items: ReactNode[];
  speed?: number;
  className?: string;
}) {
  const loop = [...items, ...items];
  return (
    <div className={`overflow-hidden ${className ?? ""}`}>
      <motion.div
        className="flex shrink-0 gap-12 whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: speed, ease: "linear", repeat: Infinity }}
      >
        {loop.map((item, i) => (
          <span key={i} className="flex items-center gap-12">
            {item}
            <span className="text-coral">✦</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}
