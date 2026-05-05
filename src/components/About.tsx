import { motion } from "framer-motion";
import { Zap, Layout, TrendingUp } from "lucide-react";

const highlights = [
  {
    title: "Fast Delivery",
    description: "From kickoff to launch in days, not months. We ship features fast.",
    icon: Zap,
    color: "from-amber-400 to-orange-500"
  },
  {
    title: "Modern Design",
    description: "Clean, performant, and premium interfaces crafted for your brand.",
    icon: Layout,
    color: "from-indigo-400 to-violet-500"
  },
  {
    title: "Conversion Focused",
    description: "Every pixel is optimized to turn visitors into paying customers.",
    icon: TrendingUp,
    color: "from-emerald-400 to-teal-500"
  }
];

export function About() {
  return (
    <section id="about" className="py-24 bg-[#0B0B0F] relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-5xl font-bold text-white mb-6"
          >
            A small studio building <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-violet-500">serious digital products.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-gray-400"
          >
            NovaCore Digital is a focused team of designers, developers, and marketers helping startups and growing brands launch fast, look sharp, and convert better.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 p-8 hover:bg-white/10 transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_30px_-5px_rgba(255,255,255,0.1)]"
              >
                <div className={`inline-flex items-center justify-center p-4 rounded-xl bg-gradient-to-br ${item.color} shadow-lg mb-6`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed">{item.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
