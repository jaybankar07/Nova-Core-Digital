import { Rocket, Palette, Target } from "lucide-react";

const highlights = [
  {
    icon: Rocket,
    title: "Fast Delivery",
    desc: "From kickoff to launch in days — not months. Tight scope, sharp execution.",
  },
  {
    icon: Palette,
    title: "Modern Design",
    desc: "Clean, on-brand interfaces crafted to feel premium on every device.",
  },
  {
    icon: Target,
    title: "Conversion Focused",
    desc: "Every section earns its place. We design for clicks, leads, and revenue.",
  },
];

export function About() {
  return (
    <section id="about" className="scroll-mt-20 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold tracking-widest text-indigo-600 dark:text-indigo-400 uppercase">
            About us
          </p>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            A small studio building serious digital products.
          </h2>
          <p className="mt-4 text-muted-foreground">
            NovaCore Digital is a focused team of designers, developers, and
            marketers helping startups and growing brands launch fast, look
            sharp, and convert better. We blend craft with strategy — so every
            pixel works for your business.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {highlights.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo-500/5"
            >
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 text-white shadow-md">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-foreground">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
