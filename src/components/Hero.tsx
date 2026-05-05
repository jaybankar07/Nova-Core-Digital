import { ArrowRight, Play } from "lucide-react";

function scrollTo(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden pt-32 pb-24 sm:pt-40 sm:pb-32"
    >
      {/* Gradient backdrop */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-indigo-50 via-white to-white dark:from-indigo-950/40 dark:via-background dark:to-background" />
      <div className="absolute inset-0 -z-10 opacity-60 [background:radial-gradient(60%_50%_at_50%_0%,rgba(99,102,241,0.25),transparent_70%)]" />
      <div className="absolute inset-0 -z-10 [background-image:linear-gradient(to_right,rgba(15,23,42,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.06)_1px,transparent_1px)] [background-size:40px_40px] [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" />

      <div className="mx-auto max-w-6xl px-5 sm:px-8 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-background/60 px-3 py-1 text-xs text-muted-foreground backdrop-blur">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
          Now booking projects for Q3
        </div>

        <h1 className="mt-6 text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-foreground">
          NovaCore{" "}
          <span className="bg-gradient-to-r from-indigo-500 via-violet-600 to-fuchsia-500 bg-clip-text text-transparent">
            Digital
          </span>
        </h1>

        <p className="mt-5 text-lg sm:text-xl text-foreground/80 font-medium">
          Building modern digital experiences for growing businesses.
        </p>
        <p className="mx-auto mt-4 max-w-2xl text-base sm:text-lg text-muted-foreground">
          We design high-converting websites, run growth-driven marketing, and
          ship AI automations that help ambitious teams scale faster.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            onClick={() => scrollTo("contact")}
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-500 to-violet-600 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-indigo-500/25 hover:shadow-xl hover:shadow-indigo-500/30 hover:scale-[1.02] transition"
          >
            Book a Free Consultation
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </button>
          <button
            onClick={() => scrollTo("portfolio")}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-6 py-3 text-sm font-medium text-foreground hover:bg-accent transition"
          >
            <Play className="h-4 w-4" />
            View our work
          </button>
        </div>

        <div className="mt-16 grid grid-cols-3 gap-6 sm:gap-10 max-w-2xl mx-auto">
          {[
            { k: "120+", v: "Projects shipped" },
            { k: "45+", v: "Happy clients" },
            { k: "4.9/5", v: "Average rating" },
          ].map((s) => (
            <div key={s.v} className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-foreground">{s.k}</div>
              <div className="mt-1 text-xs sm:text-sm text-muted-foreground">{s.v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
