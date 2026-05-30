import { Reveal, RevealText } from "./Reveal";
import { TiltCard } from "./TiltCard";

export function Visit() {
  return (
    <section id="visit" className="relative overflow-hidden bg-gradient-ocean py-32 text-background md:py-48">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 px-6 md:grid-cols-2 md:items-center">
        <div>
          <Reveal>
            <p className="mb-6 text-xs uppercase tracking-[0.4em] text-background/60">
              04 — Visit
            </p>
          </Reveal>
          <h2 className="font-display text-5xl leading-[1.05] md:text-7xl">
            <RevealText text="Reserve" />
            <br />
            <em className="italic text-coral">
              <RevealText text="your sunset." delay={0.2} />
            </em>
          </h2>
          <Reveal delay={1}>
            <p className="mt-8 max-w-md text-background/75">
              We seat in two services — early at 5, late at 8. Tables by the
              water go quickly; we suggest booking a week ahead.
            </p>
          </Reveal>

          <Reveal delay={2}>
            <dl className="mt-12 grid grid-cols-2 gap-8 text-sm">
              <div>
                <dt className="mb-2 text-background/50 uppercase tracking-widest text-xs">Hours</dt>
                <dd>Wed — Sun · 5pm — late</dd>
              </div>
              <div>
                <dt className="mb-2 text-background/50 uppercase tracking-widest text-xs">Address</dt>
                <dd>Km 7, Carretera Tulum — Boca Paila</dd>
              </div>
              <div>
                <dt className="mb-2 text-background/50 uppercase tracking-widest text-xs">Phone</dt>
                <dd>+52 984 802 0119</dd>
              </div>
              <div>
                <dt className="mb-2 text-background/50 uppercase tracking-widest text-xs">Email</dt>
                <dd>hola@maree.mx</dd>
              </div>
            </dl>
          </Reveal>
        </div>

        <div className="perspective-1000">
          <TiltCard intensity={6} className="preserve-3d rounded-3xl bg-background/10 p-2 ring-1 ring-background/20 backdrop-blur-xl">
            <form className="space-y-5 rounded-2xl bg-background p-8 text-foreground md:p-10">
              <div className="grid grid-cols-2 gap-4">
                <Field label="Name" placeholder="Your name" />
                <Field label="Guests" placeholder="2" type="number" />
              </div>
              <Field label="Date" type="date" />
              <Field label="Time" placeholder="19:30" />
              <Field label="Email" type="email" placeholder="you@email.com" />
              <button
                type="button"
                className="group mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-deep px-6 py-4 text-sm text-background transition-all hover:bg-ocean"
              >
                Request reservation
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </button>
              <p className="text-center text-xs text-muted-foreground">
                We'll confirm by email within 24 hours.
              </p>
            </form>
          </TiltCard>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  placeholder,
  type = "text",
}: {
  label: string;
  placeholder?: string;
  type?: string;
}) {
  return (
    <label className="block">
      <span className="mb-1 block text-xs uppercase tracking-widest text-muted-foreground">
        {label}
      </span>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full border-b border-border bg-transparent py-2.5 text-base text-foreground outline-none transition-colors focus:border-ocean"
      />
    </label>
  );
}
