import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import hero from "@/assets/hero-beach.jpg";
import { RevealText } from "./Reveal";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.05, 1.2]);
  const blur = useTransform(scrollYProgress, [0, 1], ["blur(0px)", "blur(8px)"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-40%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

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
        <div className="absolute inset-0 bg-gradient-to-b from-deep/30 via-deep/10 to-background" />
      </motion.div>

      <motion.div
        style={{ y: textY, opacity }}
        className="relative z-10 mx-auto flex h-screen max-w-7xl flex-col justify-end px-6 pb-24 text-background"
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="mb-6 text-xs uppercase tracking-[0.4em] text-background/80"
        >
          ✦ Tulum &nbsp;·&nbsp; Est. 2014
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
          <a
            href="#visit"
            className="group inline-flex items-center gap-3 rounded-full border border-background/30 px-6 py-3 text-sm backdrop-blur-md transition-all hover:bg-background hover:text-deep"
          >
            Book a table
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </a>
        </motion.div>
      </motion.div>

      {/* scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-background/70"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-[10px] uppercase tracking-[0.3em]"
        >
          Scroll
          <span className="h-8 w-px bg-background/60" />
        </motion.div>
      </motion.div>
    </section>
  );
}
