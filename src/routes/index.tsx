import { createFileRoute } from "@tanstack/react-router";
import { SmoothScroll } from "@/components/SmoothScroll";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { MarqueeBand } from "@/components/MarqueeBand";
import { Menu } from "@/components/Menu";
import { Experience } from "@/components/Experience";
import { Visit } from "@/components/Visit";
import { Footer } from "@/components/Footer";
import { CursorBubble } from "@/components/CursorBubble";
import { ScrollProgress } from "@/components/ScrollProgress";
import { WaveDivider } from "@/components/WaveDivider";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Marée — Coastal kitchen in Tulum" },
      {
        name: "description",
        content:
          "A cinematic beach restaurant in Tulum: tide-fresh catch, wood-fired cooking, sunset service. Reserve your table by the water.",
      },
      { property: "og:title", content: "Marée — Coastal kitchen in Tulum" },
      {
        property: "og:description",
        content:
          "Tide-fresh catch, wood fire, slow hours. A coastal kitchen where the ocean dines with you.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative bg-background">
      <SmoothScroll />
      <ScrollProgress />
      <CursorBubble />
      <Nav />
      <Hero />
      <About />
      <MarqueeBand />
      <div className="relative -mb-px bg-sand">
        <WaveDivider fill="var(--color-deep)" />
      </div>
      <Menu />
      <div className="relative -mt-px bg-deep">
        <WaveDivider fill="var(--color-background)" />
      </div>
      <Experience />
      <Visit />
      <Footer />
    </main>
  );
}
