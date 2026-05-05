import { Zap, Sparkles, BadgeDollarSign, Briefcase } from "lucide-react";

const reasons = [
  { icon: Zap, title: "Fast delivery", desc: "Most projects ship in 2–4 weeks, without cutting corners." },
  { icon: Sparkles, title: "Modern UI/UX", desc: "Polished, accessible interfaces your users will actually love." },
  { icon: BadgeDollarSign, title: "Affordable pricing", desc: "Transparent packages tailored for startups and SMBs." },
  { icon: Briefcase, title: "Business-focused strategy", desc: "We optimise for outcomes — leads, signups, revenue." },
];

export function WhyChooseUs() {
  return (
    <section id="why" className="scroll-mt-20 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-xs font-semibold tracking-widest text-indigo-600 dark:text-indigo-400 uppercase">
              Why choose us
            </p>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
              A partner that ships, not just promises.
            </h2>
            <p className="mt-4 text-muted-foreground">
              We work like an in-house team — embedded, responsive, and obsessed
              with the details that make your product feel premium.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {reasons.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="rounded-2xl border border-border bg-card p-5 transition-all hover:-translate-y-0.5 hover:shadow-lg"
              >
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-500/10 text-indigo-600 dark:text-indigo-400">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-base font-semibold text-foreground">{title}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
