import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import interior from "@/assets/interior.jpg";
import wave from "@/assets/wave.jpg";
import { Reveal, RevealText } from "./Reveal";

export function About() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y1 = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);

  return (
    <section ref={ref} id="about" className="relative overflow-hidden bg-background py-32 md:py-48">
      <div className="mx-auto grid max-w-7xl grid-cols-12 gap-6 px-6">
        <div className="col-span-12 md:col-span-5">
          <Reveal>
            <p className="mb-6 text-xs uppercase tracking-[0.4em] text-muted-foreground">
              01 — Our Story
            </p>
          </Reveal>

          <h2 className="font-display text-5xl leading-[1.05] text-deep md:text-7xl">
            <RevealText text="Salt air," />
            <br />
            <em className="italic text-ocean">
              <RevealText text="open fire," delay={0.15} />
            </em>
            <br />
            <RevealText text="slow hours." delay={0.3} />
          </h2>

          <Reveal delay={1}>
            <p className="mt-10 max-w-md text-base text-muted-foreground">
              We cook what the morning tide brings in. No menu set in stone — only
              fishermen we've known for a decade, citrus picked at dawn, and a
              wood-fire grill that hasn't gone cold since opening night.
            </p>
          </Reveal>

          <Reveal delay={2}>
            <div className="mt-12 flex gap-10">
              <div>
                <div className="font-display text-4xl text-coral">11</div>
                <div className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">
                  Years on the shore
                </div>
              </div>
              <div>
                <div className="font-display text-4xl text-coral">36</div>
                <div className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">
                  Seats by the water
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="col-span-12 md:col-span-7">
          <div className="relative grid grid-cols-2 gap-6">
            <motion.div
              style={{ y: y1 }}
              className="relative aspect-[3/4] overflow-hidden rounded-2xl shadow-soft"
            >
              <img
                src={interior}
                alt="Candlelit beach restaurant interior at dusk"
                loading="lazy"
                width={1920}
                height={1200}
                className="h-full w-full object-cover"
              />
            </motion.div>
            <motion.div
              style={{ y: y2 }}
              className="relative mt-16 aspect-[3/4] overflow-hidden rounded-2xl shadow-soft"
            >
              <img
                src={wave}
                alt="Turquoise ocean wave macro shot"
                loading="lazy"
                width={1920}
                height={1080}
                className="h-full w-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
