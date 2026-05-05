import { motion } from "framer-motion";
import { ArrowUpRight, Globe, ShoppingCart, Megaphone, Bot, Palette, BarChart3 } from "lucide-react";

const projects = [
  {
    title: "Bloom Café — Website Redesign",
    description: "Full UX overhaul of a Berlin-based café chain. Reservations increased by 40% in the first month post-launch.",
    tag: "Web Design",
    icon: Globe,
    gradient: "from-indigo-500/30 to-violet-500/20",
    accent: "text-indigo-400",
    border: "border-indigo-500/20",
  },
  {
    title: "UrbanNest Realty — Lead Gen",
    description: "Conversion-focused landing page with targeted paid campaigns yielding a 6.2% qualified lead rate.",
    tag: "Marketing",
    icon: BarChart3,
    gradient: "from-emerald-500/30 to-teal-500/20",
    accent: "text-emerald-400",
    border: "border-emerald-500/20",
  },
  {
    title: "FitZone — E-Commerce Store",
    description: "Built a full Shopify-based e-commerce store with custom brand identity. Monthly GMV exceeded €80k in Q1.",
    tag: "E-Commerce",
    icon: ShoppingCart,
    gradient: "from-amber-500/30 to-orange-500/20",
    accent: "text-amber-400",
    border: "border-amber-500/20",
  },
  {
    title: "PulseAI — AI Support Bot",
    description: "GPT-powered customer service bot that resolved 70% of tier-1 support tickets autonomously.",
    tag: "AI Automation",
    icon: Bot,
    gradient: "from-violet-500/30 to-fuchsia-500/20",
    accent: "text-violet-400",
    border: "border-violet-500/20",
  },
  {
    title: "Solaris — Brand Identity",
    description: "Logo, visual identity system, brand guidelines, and social media templates for a clean-energy startup.",
    tag: "Branding",
    icon: Palette,
    gradient: "from-rose-500/30 to-pink-500/20",
    accent: "text-rose-400",
    border: "border-rose-500/20",
  },
  {
    title: "GrowthLoop — Social Campaign",
    description: "Cross-channel social strategy and content production that doubled follower count and tripled engagement in 60 days.",
    tag: "Social Media",
    icon: Megaphone,
    gradient: "from-cyan-500/30 to-sky-500/20",
    accent: "text-cyan-400",
    border: "border-cyan-500/20",
  },
];

export function Portfolio() {
  return (
    <section id="portfolio" className="py-24 bg-[#0B0B0F] relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-indigo-600/5 blur-[100px] rounded-full -z-10" />

      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl sm:text-5xl font-bold text-white mb-6"
            >
              Recent projects{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-violet-500">
                we're proud of.
              </span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-lg text-gray-400"
            >
              A selection of recent client work spanning web design, branding, marketing, and AI automation.
            </motion.p>
          </div>
          <motion.a
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="shrink-0 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium text-gray-300 hover:bg-white/10 hover:text-white transition-all"
          >
            Start a project <ArrowUpRight className="w-4 h-4" />
          </motion.a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.07 }}
                className={`group relative flex flex-col overflow-hidden rounded-2xl bg-white/5 border ${project.border} hover:bg-white/10 hover:-translate-y-1.5 hover:shadow-[0_10px_40px_-10px_rgba(99,102,241,0.15)] transition-all duration-300 cursor-pointer`}
              >
                {/* Thumbnail */}
                <div className={`h-48 w-full bg-gradient-to-br ${project.gradient} relative flex items-center justify-center overflow-hidden`}>
                  <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:24px_24px]" />
                  <div className="relative z-10 w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                    <Icon className={`w-8 h-8 ${project.accent}`} />
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 p-6 gap-3">
                  <span className={`text-xs font-semibold uppercase tracking-widest ${project.accent}`}>
                    {project.tag}
                  </span>
                  <h3 className="text-lg font-bold text-white leading-snug">{project.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed flex-1">{project.description}</p>
                  <div className="flex items-center gap-1.5 text-xs font-medium text-gray-500 group-hover:text-white transition-colors pt-2">
                    View case study
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
