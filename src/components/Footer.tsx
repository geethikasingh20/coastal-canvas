export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-deep py-16 text-background/80">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-10 px-6 md:flex-row md:items-end">
        <div>
          <div className="font-display text-3xl text-background">
            Marée<span className="text-coral">.</span>
          </div>
          <p className="mt-3 max-w-xs text-sm text-background/60">
            A coastal kitchen in Tulum. Salt, fire, and the slow hours.
          </p>
        </div>
        <div className="flex flex-col gap-3 text-sm md:flex-row md:gap-10">
          <a href="#" className="hover:text-coral">Instagram</a>
          <a href="#" className="hover:text-coral">Spotify</a>
          <a href="#" className="hover:text-coral">Press</a>
          <a href="#" className="hover:text-coral">Careers</a>
        </div>
        <div className="text-xs text-background/40">
          © {new Date().getFullYear()} Marée. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
