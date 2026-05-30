import { motion } from "framer-motion";

function Fish({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 32" className={className} aria-hidden>
      <path
        d="M2 16 C 12 4, 36 4, 46 16 C 36 28, 12 28, 2 16 Z"
        fill="currentColor"
        opacity="0.85"
      />
      <path d="M46 16 L62 6 L58 16 L62 26 Z" fill="currentColor" opacity="0.7" />
      <circle cx="14" cy="14" r="1.6" fill="var(--color-background)" />
    </svg>
  );
}

/** A small school of fish drifting across the section. */
export function FishSwim({ className }: { className?: string }) {
  const fish = [
    { top: "18%", size: 56, dur: 28, delay: 0, opacity: 0.5 },
    { top: "62%", size: 40, dur: 36, delay: 4, opacity: 0.4 },
    { top: "82%", size: 30, dur: 22, delay: 10, opacity: 0.35 },
  ];
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className ?? ""}`} aria-hidden>
      {fish.map((f, i) => (
        <motion.div
          key={i}
          initial={{ x: "-15%" }}
          animate={{ x: "115%", y: [0, -8, 0, 8, 0] }}
          transition={{
            x: { duration: f.dur, repeat: Infinity, ease: "linear", delay: f.delay },
            y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
          }}
          style={{ top: f.top, width: f.size, opacity: f.opacity }}
          className="absolute text-coral"
        >
          <Fish className="h-auto w-full" />
        </motion.div>
      ))}
    </div>
  );
}
