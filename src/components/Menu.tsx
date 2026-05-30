import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import pasta from "@/assets/dish-pasta.jpg";
import fish from "@/assets/dish-fish.jpg";
import cocktail from "@/assets/dish-cocktail.jpg";
import { Reveal, RevealText } from "./Reveal";
import { TiltCard } from "./TiltCard";

const dishes = [
  {
    img: pasta,
    name: "Linguine al Mare",
    note: "Wild prawns · lemon zest · garlic confit",
    price: "32",
  },
  {
    img: fish,
    name: "Whole Sea Bass",
    note: "Banana leaf · charred lime · chili oil",
    price: "48",
  },
  {
    img: cocktail,
    name: "Sunset Spritz",
    note: "Mezcal · passion fruit · sea salt rim",
    price: "18",
  },
];

export function Menu() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <section ref={ref} id="menu" className="relative overflow-hidden bg-deep py-32 text-background md:py-48">
      <motion.div
        style={{ y: bgY }}
        className="pointer-events-none absolute -right-40 top-20 h-[600px] w-[600px] rounded-full bg-coral/30 blur-[140px]"
      />
      <motion.div
        style={{ y: bgY }}
        className="pointer-events-none absolute -left-40 bottom-20 h-[500px] w-[500px] rounded-full bg-ocean/40 blur-[140px]"
      />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-20 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <Reveal>
              <p className="mb-6 text-xs uppercase tracking-[0.4em] text-background/60">
                02 — The Table
              </p>
            </Reveal>
            <h2 className="font-display text-5xl leading-[1.05] md:text-7xl">
              <RevealText text="Dishes that" />
              <br />
              <em className="italic text-coral">
                <RevealText text="taste of place." delay={0.2} />
              </em>
            </h2>
          </div>
          <Reveal delay={1}>
            <p className="max-w-sm text-background/70">
              Three signatures from a menu that shifts with the season. Ask your
              server what arrived this morning.
            </p>
          </Reveal>
        </div>

        <div className="perspective-1000 grid grid-cols-1 gap-8 md:grid-cols-3">
          {dishes.map((d, i) => (
            <Reveal key={d.name} delay={i}>
              <TiltCard className="preserve-3d group relative overflow-hidden rounded-3xl bg-background/5 ring-1 ring-background/10 backdrop-blur-sm">
                <div className="aspect-[3/4] overflow-hidden">
                  <motion.img
                    src={d.img}
                    alt={d.name}
                    loading="lazy"
                    width={1280}
                    height={1600}
                    className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
                  />
                </div>
                <div className="flex items-end justify-between gap-4 p-6">
                  <div>
                    <h3 className="font-display text-2xl text-background">
                      {d.name}
                    </h3>
                    <p className="mt-1 text-sm text-background/60">{d.note}</p>
                  </div>
                  <div className="font-display text-2xl text-coral">${d.price}</div>
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>

        <Reveal delay={3}>
          <div className="mt-20 text-center">
            <a
              href="#visit"
              className="group inline-flex items-center gap-3 text-sm uppercase tracking-[0.3em] text-background/80 hover:text-coral"
            >
              The full menu
              <span className="h-px w-12 bg-current transition-all group-hover:w-20" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
