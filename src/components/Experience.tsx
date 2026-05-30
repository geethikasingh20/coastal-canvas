import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Reveal, RevealText } from "./Reveal";

const moments = [
  { time: "17:00", title: "Golden hour", body: "Tables open as the sun bends. Aperitifs arrive without asking." },
  { time: "19:30", title: "Fire kissed", body: "The grill peaks. Catch of the day meets coals and citrus." },
  { time: "21:45", title: "Slow finale", body: "Mezcal, cacao, and the sound of waves carrying conversation home." },
];

export function Experience() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const lineHeight = useTransform(scrollYProgress, [0.1, 0.85], ["0%", "100%"]);

  return (
    <section id="experience" className="relative overflow-hidden bg-background py-32 md:py-48">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-24 max-w-3xl">
          <Reveal>
            <p className="mb-6 text-xs uppercase tracking-[0.4em] text-muted-foreground">
              03 — An Evening
            </p>
          </Reveal>
          <h2 className="font-display text-5xl leading-[1.05] text-deep md:text-7xl">
            <RevealText text="A night here" />
            <br />
            <em className="italic text-ocean">
              <RevealText text="unfolds in three." delay={0.2} />
            </em>
          </h2>
        </div>

        <div ref={ref} className="relative grid gap-20 pl-10 md:gap-32 md:pl-20">
          <div className="absolute left-0 top-0 h-full w-px bg-border md:left-6">
            <motion.div style={{ height: lineHeight }} className="w-full bg-gradient-sunset" />
          </div>

          {moments.map((m, i) => (
            <Reveal key={m.time} delay={i}>
              <div className="grid grid-cols-1 items-start gap-6 md:grid-cols-[140px_1fr_1fr] md:gap-16">
                <div className="font-display text-3xl text-coral">{m.time}</div>
                <h3 className="font-display text-4xl text-deep md:text-5xl">{m.title}</h3>
                <p className="max-w-md text-muted-foreground">{m.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
