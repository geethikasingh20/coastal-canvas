import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import hero from "@/assets/hero-beach.jpg";
import { RevealText } from "./Reveal";
import { HeroWater } from "./HeroWater";
import { FishSwim } from "./FishSwim";
import { Bubbles } from "./Bubbles";
import { MagneticButton } from "./MagneticButton";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.05, 1.2]);
  const blur = useTransform(scrollYProgress, [0, 1], ["blur(0px)", "blur(8px)"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-40%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const waveY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);

  return (
    <section ref={ref} id="top" className="relative h-[110vh] overflow-hidden">
      <motion.div style={{ y, scale, filter: blur }} className="absolute inset-0">
        <img
          src={hero}
          alt="Marée beach restaurant at golden hour"
          className="h-full w-full object-cover"
          width={1920}
          height={1280}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-deep/40 via-deep/15 to-background" />
      </motion.div>

      {/* water caustics + life */}
      <HeroWater />
      <FishSwim />
      <Bubbles count={22} tone="light" />

      <motion.div
        style={{ y: textY, opacity }}
        className="relative z-10 mx-auto flex h-screen max-w-7xl flex-col justify-end px-6 pb-32 text-background"
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="mb-6 flex items-center gap-3 text-xs uppercase tracking-[0.4em] text-background/80"
        >
          <motion.span
            animate={{ rotate: 360 }}
            transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
            className="inline-block text-coral"
          >
            ✦
          </motion.span>
          Tulum &nbsp;·&nbsp; Est. 2014
        </motion.p>

        <h1 className="font-display text-[clamp(3rem,9vw,9rem)] leading-[0.95] tracking-tight">
          <RevealText text="Where the" delay={0.1} />
          <br />
          <em className="font-light italic text-coral">
            <RevealText text="ocean dines" delay={0.4} />
          </em>
          <br />
          <RevealText text="with you." delay={0.7} />
        </h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 1 }}
          className="mt-10 flex flex-wrap items-end justify-between gap-6"
        >
          <p className="max-w-md text-base text-background/85">
            A coastal kitchen built on tide-fresh catch, slow fire, and a horizon
            that quietly steals the show.
          </p>
          <MagneticButton
            href="#visit"
            className="group inline-flex items-center gap-3 rounded-full border border-background/40 bg-background/10 px-7 py-3.5 text-sm backdrop-blur-md transition-colors hover:bg-background hover:text-deep"
          >
            Book a table
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </MagneticButton>
        </motion.div>
      </motion.div>

      {/* animated wave foot of hero */}
      <motion.div style={{ y: waveY }} className="absolute inset-x-0 bottom-0 z-[5]">
        <svg viewBox="0 0 1440 180" preserveAspectRatio="none" className="block h-[160px] w-full">
          <motion.path
            fill="var(--color-background)"
            fillOpacity="0.5"
            initial={{ d: "M0,100 C240,140 480,60 720,100 C960,140 1200,60 1440,100 L1440,180 L0,180 Z" }}
            animate={{
              d: [
                "M0,100 C240,140 480,60 720,100 C960,140 1200,60 1440,100 L1440,180 L0,180 Z",
                "M0,110 C240,70 480,150 720,110 C960,70 1200,150 1440,110 L1440,180 L0,180 Z",
                "M0,100 C240,140 480,60 720,100 C960,140 1200,60 1440,100 L1440,180 L0,180 Z",
              ],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.path
            fill="var(--color-background)"
            initial={{ d: "M0,140 C320,110 640,170 960,140 C1200,120 1320,150 1440,140 L1440,180 L0,180 Z" }}
            animate={{
              d: [
                "M0,140 C320,110 640,170 960,140 C1200,120 1320,150 1440,140 L1440,180 L0,180 Z",
                "M0,150 C320,170 640,110 960,150 C1200,170 1320,130 1440,150 L1440,180 L0,180 Z",
                "M0,140 C320,110 640,170 960,140 C1200,120 1320,150 1440,140 L1440,180 L0,180 Z",
              ],
            }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          />
        </svg>
      </motion.div>

      {/* scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 text-deep/70"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-[10px] uppercase tracking-[0.3em]"
        >
          Scroll
          <span className="h-8 w-px bg-deep/60" />
        </motion.div>
      </motion.div>
    </section>
  );
}
