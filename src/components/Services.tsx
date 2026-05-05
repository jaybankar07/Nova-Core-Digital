import { Code2, Megaphone, Brush, TrendingUp, Bot } from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Website Design & Development",
    desc: "Custom marketing sites and web apps built with modern stacks — fast, responsive, and SEO-ready.",
  },
  {
    icon: Megaphone,
    title: "Social Media Marketing",
    desc: "Content systems and paid campaigns that grow audiences and drive qualified traffic.",
  },
  {
    icon: Brush,
    title: "Branding & Graphic Design",
    desc: "Logos, identities, and visual systems that make your brand instantly recognisable.",
  },
  {
    icon: TrendingUp,
    title: "SEO & Growth Marketing",
    desc: "Technical SEO, content strategy, and CRO experiments that compound over time.",
  },
  {
    icon: Bot,
    title: "AI Automation",
    desc: "Custom GPT workflows, chatbots, and internal tools that save your team hours every week.",
  },
];

export function Services() {
  return (
    <section
      id="services"
      className="scroll-mt-20 py-20 sm:py-28 bg-gradient-to-b from-transparent via-indigo-50/40 to-transparent dark:via-indigo-950/10"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-xs font-semibold tracking-widest text-indigo-600 dark:text-indigo-400 uppercase">
            What we do
          </p>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            Services that move the needle.
          </h2>
          <p className="mt-4 text-muted-foreground">
            End-to-end design, marketing, and automation under one roof.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-indigo-500/10"
            >
              <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-gradient-to-br from-indigo-500/10 to-violet-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 text-white shadow-md transition-transform group-hover:scale-110">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-foreground">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
