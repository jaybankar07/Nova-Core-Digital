import { motion } from "framer-motion";

const services = [
  {
    title: "Website Design & Development",
    description: "Modern, fast, and responsive websites tailored for business growth.",
    icon: "🌐"
  },
  {
    title: "Social Media Marketing",
    description: "Content strategy, reels, and campaigns that drive engagement.",
    icon: "📱"
  },
  {
    title: "Branding & Graphic Design",
    description: "Logos, brand identity, and visuals that stand out.",
    icon: "🎨"
  },
  {
    title: "SEO & Growth Marketing",
    description: "Improve rankings and generate quality leads organically.",
    icon: "📈"
  },
  {
    title: "AI Automation",
    description: "Smart chatbots and automation tools to scale your business.",
    icon: "🤖"
  }
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-[#0B0B0F] relative overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute top-0 right-0 -z-10 w-[500px] h-[500px] bg-indigo-600/10 blur-[120px] rounded-full" />
      
      <div className="mx-auto max-w-7xl px-6 sm:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-5xl font-bold text-white mb-6"
          >
            Services that <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-violet-500">move the needle.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-gray-400"
          >
            End-to-end design, marketing, and automation under one roof. We optimize for outcomes — leads, signups, revenue.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group relative rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 p-8 hover:bg-white/10 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_40px_-10px_rgba(99,102,241,0.2)]"
            >
              <div className="text-5xl mb-6">{service.icon}</div>
              <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-gray-400 leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
