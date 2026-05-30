export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-deep pt-28 pb-16 text-background/80">
      {/* top wave */}
      <svg
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        className="pointer-events-none absolute inset-x-0 top-0 h-20 w-full text-ocean"
        aria-hidden
      >
        <path
          d="M0,80 C240,40 480,120 720,80 C960,40 1200,120 1440,80 L1440,0 L0,0 Z"
          fill="currentColor"
          fillOpacity="0.25"
        />
        <path
          d="M0,100 C320,70 640,130 960,100 C1200,80 1320,110 1440,100 L1440,0 L0,0 Z"
          fill="currentColor"
          fillOpacity="0.15"
        />
      </svg>

      <div className="relative mx-auto flex max-w-7xl flex-col items-start justify-between gap-10 px-6 md:flex-row md:items-end">
        <div>
          <div className="font-display text-3xl text-background">
            Marée<span className="text-coral">.</span>
          </div>
          <p className="mt-3 max-w-xs text-sm text-background/60">
            A coastal kitchen in Tulum. Salt, fire, and the slow hours.
          </p>
        </div>
        <div className="flex flex-col gap-3 text-sm md:flex-row md:gap-10">
          <a href="#" className="story-link hover:text-coral">Instagram</a>
          <a href="#" className="story-link hover:text-coral">Spotify</a>
          <a href="#" className="story-link hover:text-coral">Press</a>
          <a href="#" className="story-link hover:text-coral">Careers</a>
        </div>
        <div className="text-xs text-background/40">
          © {new Date().getFullYear()} Marée. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
