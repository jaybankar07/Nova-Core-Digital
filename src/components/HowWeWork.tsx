import { motion } from "framer-motion";
import { Search, Palette, Code2, Rocket } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Discovery",
    description: "We audit your goals, target audience, and competitors to map out a precise strategy and project scope.",
    icon: Search,
    color: "from-blue-500 to-cyan-500",
  },
  {
    number: "02",
    title: "Design",
    description: "Our designers craft pixel-perfect wireframes and high-fidelity mockups aligned with your brand identity.",
    icon: Palette,
    color: "from-violet-500 to-fuchsia-500",
  },
  {
    number: "03",
    title: "Development",
    description: "We build with modern stacks — fast, accessible, and production-ready — with clean, documented code.",
    icon: Code2,
    color: "from-indigo-500 to-violet-500",
  },
  {
    number: "04",
    title: "Launch",
    description: "After thorough QA, we ship your product and provide a handoff package with a 30-day support window.",
    icon: Rocket,
    color: "from-amber-500 to-orange-500",
  },
];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function HowWeWork() {
  return (
    <section className="py-24 bg-[#0d0d12] relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-indigo-600/10 blur-[100px] rounded-full -z-10" />

      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-5xl font-bold text-white mb-6"
          >
            How we{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-violet-500">
              work.
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-gray-400"
          >
            A structured, transparent process that takes you from idea to launch without surprises.
          </motion.p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="relative grid grid-cols-1 md:grid-cols-4 gap-6"
        >
          {/* Connector line — desktop only */}
          <div className="hidden md:block absolute top-[3.25rem] left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-indigo-500/30 via-violet-500/30 to-transparent -z-10" />

          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                variants={item}
                className="group relative flex flex-col items-center text-center gap-5 p-8 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 hover:shadow-[0_0_30px_-8px_rgba(99,102,241,0.3)] hover:-translate-y-1 transition-all duration-300"
              >
                <div
                  className={`relative z-10 w-14 h-14 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg`}
                >
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <span className="text-5xl font-black text-white/5 absolute top-4 right-5 leading-none select-none">
                  {step.number}
                </span>
                <h3 className="text-lg font-bold text-white">{step.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{step.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
