import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "Founder, Bloom Studio",
    initials: "SM",
    quote: "NovaCore Digital completely transformed our online presence.",
    color: "from-pink-500 to-rose-500",
  },
  {
    name: "Daniel Weber",
    role: "CEO, Weber & Co.",
    initials: "DW",
    quote: "Delivered a clean, modern website within days.",
    color: "from-indigo-500 to-violet-600",
  },
  {
    name: "Aisha Khan",
    role: "Marketing Lead, Lumio",
    initials: "AK",
    quote: "Helped us generate more leads and improved brand image.",
    color: "from-emerald-500 to-teal-600",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="scroll-mt-20 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-xs font-semibold tracking-widest text-indigo-600 dark:text-indigo-400 uppercase">
            Testimonials
          </p>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            Loved by founders & marketing teams.
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="relative rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:shadow-xl"
            >
              <Quote className="absolute top-5 right-5 h-8 w-8 text-indigo-500/15" />
              <div className="flex gap-0.5 text-amber-500">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <blockquote className="mt-4 text-foreground/90 leading-relaxed">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <div
                  className={`inline-flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br ${t.color} text-white text-sm font-semibold`}
                >
                  {t.initials}
                </div>
                <div>
                  <div className="text-sm font-semibold text-foreground">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
