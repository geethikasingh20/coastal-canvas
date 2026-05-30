import { motion } from "framer-motion";

type Props = {
  /** Fill color of the wave (matches the section it transitions INTO). */
  fill?: string;
  /** Flip vertically when wave should sit at top of next section. */
  flip?: boolean;
  className?: string;
  height?: number;
};

/** Animated layered SVG wave divider. */
export function WaveDivider({
  fill = "var(--color-background)",
  flip = false,
  className,
  height = 120,
}: Props) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none relative w-full ${className ?? ""}`}
      style={{ height, transform: flip ? "scaleY(-1)" : undefined }}
    >
      <svg
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        className="absolute inset-0 h-full w-full"
      >
        <motion.path
          fill={fill}
          fillOpacity={0.4}
          initial={{ d: "M0,60 C240,100 480,20 720,60 C960,100 1200,20 1440,60 L1440,120 L0,120 Z" }}
          animate={{
            d: [
              "M0,60 C240,100 480,20 720,60 C960,100 1200,20 1440,60 L1440,120 L0,120 Z",
              "M0,70 C240,30 480,110 720,70 C960,30 1200,110 1440,70 L1440,120 L0,120 Z",
              "M0,60 C240,100 480,20 720,60 C960,100 1200,20 1440,60 L1440,120 L0,120 Z",
            ],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.path
          fill={fill}
          fillOpacity={0.7}
          initial={{ d: "M0,80 C320,40 640,120 960,80 C1120,60 1280,90 1440,80 L1440,120 L0,120 Z" }}
          animate={{
            d: [
              "M0,80 C320,40 640,120 960,80 C1120,60 1280,90 1440,80 L1440,120 L0,120 Z",
              "M0,90 C320,120 640,40 960,90 C1120,110 1280,60 1440,90 L1440,120 L0,120 Z",
              "M0,80 C320,40 640,120 960,80 C1120,60 1280,90 1440,80 L1440,120 L0,120 Z",
            ],
          }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.path
          fill={fill}
          initial={{ d: "M0,100 C360,80 720,120 1080,100 C1260,90 1350,105 1440,100 L1440,120 L0,120 Z" }}
          animate={{
            d: [
              "M0,100 C360,80 720,120 1080,100 C1260,90 1350,105 1440,100 L1440,120 L0,120 Z",
              "M0,105 C360,120 720,80 1080,105 C1260,115 1350,95 1440,105 L1440,120 L0,120 Z",
              "M0,100 C360,80 720,120 1080,100 C1260,90 1350,105 1440,100 L1440,120 L0,120 Z",
            ],
          }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        />
      </svg>
    </div>
  );
}
