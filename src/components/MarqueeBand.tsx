import { Marquee } from "./Marquee";

const phrases = [
  "Fire & Tide",
  "Slow dinners",
  "Wood-grilled",
  "By the water",
  "Open · 5pm — late",
  "Reservations encouraged",
];

export function MarqueeBand() {
  return (
    <div className="relative border-y border-border bg-sand py-10">
      <Marquee
        speed={45}
        items={phrases.map((p) => (
          <span className="font-display text-5xl text-deep md:text-7xl">{p}</span>
        ))}
      />
    </div>
  );
}
