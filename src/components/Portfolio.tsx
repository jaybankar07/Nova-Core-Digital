import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Restaurant Website Redesign",
    desc: "A modern, mobile-first redesign that grew online reservations by 38%.",
    gradient: "from-amber-400 via-orange-500 to-rose-500",
    tag: "Web Design",
  },
  {
    title: "Real Estate Lead Generation Page",
    desc: "Conversion-focused landing page with a 6.2% qualified lead rate.",
    gradient: "from-sky-400 via-blue-500 to-indigo-600",
    tag: "Growth",
  },
  {
    title: "Fitness Brand Campaign",
    desc: "Cross-channel social campaign that doubled monthly memberships.",
    gradient: "from-emerald-400 via-teal-500 to-cyan-600",
    tag: "Marketing",
  },
  {
    title: "AI Chatbot for Support",
    desc: "GPT-powered assistant resolving 70% of tier-1 tickets instantly.",
    gradient: "from-violet-500 via-fuchsia-500 to-pink-500",
    tag: "AI Automation",
  },
];

export function Portfolio() {
  return (
    <section
      id="portfolio"
      className="scroll-mt-20 py-20 sm:py-28 bg-gradient-to-b from-transparent via-indigo-50/40 to-transparent dark:via-indigo-950/10"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div className="max-w-xl">
            <p className="text-xs font-semibold tracking-widest text-indigo-600 dark:text-indigo-400 uppercase">
              Selected work
            </p>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
              Recent projects we're proud of.
            </h2>
          </div>
          <p className="text-sm text-muted-foreground sm:max-w-sm">
            A glimpse of recent client work across web, brand, and growth.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {projects.map((p) => (
            <article
              key={p.title}
              className="group overflow-hidden rounded-2xl border border-border bg-card transition-all hover:-translate-y-1 hover:shadow-2xl hover:shadow-indigo-500/10"
            >
              <div
                className={`relative aspect-[16/10] bg-gradient-to-br ${p.gradient} overflow-hidden`}
              >
                <div className="absolute inset-0 [background-image:linear-gradient(to_right,rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.12)_1px,transparent_1px)] [background-size:32px_32px]" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
                <span className="absolute top-4 left-4 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-gray-900 backdrop-blur">
                  {p.tag}
                </span>
                <div className="absolute bottom-4 right-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-gray-900 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowUpRight className="h-5 w-5" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-foreground">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
