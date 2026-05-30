import { motion, useScroll, useTransform } from "framer-motion";

const links = ["About", "Menu", "Experience", "Visit"];

export function Nav() {
  const { scrollY } = useScroll();
  const bg = useTransform(scrollY, [0, 200], ["rgba(255,255,255,0)", "rgba(255,253,247,0.85)"]);
  const blur = useTransform(scrollY, [0, 200], ["blur(0px)", "blur(14px)"]);
  const border = useTransform(scrollY, [0, 200], ["rgba(255,255,255,0)", "rgba(0,0,0,0.06)"]);

  return (
    <motion.header
      style={{ backgroundColor: bg, backdropFilter: blur, borderBottom: "1px solid", borderColor: border }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <a href="#top" className="font-display text-xl tracking-tight text-deep">
          Marée<span className="text-coral">.</span>
        </a>
        <ul className="hidden items-center gap-10 text-sm md:flex">
          {links.map((l) => (
            <li key={l}>
              <a
                href={`#${l.toLowerCase()}`}
                className="relative text-foreground/70 transition-colors hover:text-foreground"
              >
                {l}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#visit"
          className="group relative inline-flex items-center gap-2 rounded-full bg-deep px-5 py-2.5 text-sm text-background transition-all hover:bg-ocean"
        >
          Reserve
          <span className="transition-transform group-hover:translate-x-0.5">→</span>
        </a>
      </nav>
    </motion.header>
  );
}
