import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Restaurant Website Redesign",
    description: "Improved UI/UX leading to 40% more bookings."
  },
  {
    title: "Real Estate Lead Generation",
    description: "High-converting landing page for property leads."
  },
  {
    title: "Fitness Brand Campaign",
    description: "Social media strategy that boosted engagement by 60%."
  },
  {
    title: "AI Chatbot System",
    description: "Automated customer support with AI chatbot integration."
  }
];

export function Portfolio() {
  return (
    <section id="portfolio" className="py-24 bg-[#0B0B0F] relative">
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
              Recent projects <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-violet-500">we're proud of.</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-lg text-gray-400"
            >
              A glimpse of recent client work across web, brand, and growth.
            </motion.p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative cursor-pointer overflow-hidden rounded-2xl bg-white/5 border border-white/10"
            >
              <div className="aspect-[16/9] w-full bg-gradient-to-br from-white/5 to-white/10 flex items-center justify-center p-8 relative overflow-hidden">
                <div className="absolute inset-0 bg-indigo-500/10 group-hover:bg-indigo-500/20 transition-colors duration-500" />
                <div className="relative z-10 w-full h-full bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl shadow-2xl flex items-center justify-center text-white/30 group-hover:scale-105 transition-transform duration-700 ease-out">
                  <span className="text-2xl font-bold tracking-widest uppercase">Project</span>
                </div>
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0F] via-[#0B0B0F]/80 to-transparent opacity-80" />
              
              <div className="absolute inset-x-0 bottom-0 p-8 flex items-end justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-gray-300">{project.description}</p>
                </div>
                <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center -translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">
                  <ArrowUpRight className="text-white w-6 h-6" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
