import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const features = [
  { title: "Fast delivery", description: "Most projects ship in 2–4 weeks, without cutting corners." },
  { title: "Modern UI/UX", description: "Polished, accessible interfaces your users will actually love." },
  { title: "Affordable pricing", description: "Transparent packages tailored for startups and SMBs." },
  { title: "Business-focused strategy", description: "We optimise for outcomes — leads, signups, revenue." },
];

export function WhyChooseUs() {
  return (
    <section className="py-24 bg-[#0B0B0F] relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              A partner that ships, <br className="hidden sm:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-violet-500">not just promises.</span>
            </h2>
            <p className="text-lg text-gray-400 mb-10">
              We work like an in-house team — embedded, responsive, and obsessed with the details that make your product feel premium.
            </p>
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, i) => (
                <motion.div 
                  key={feature.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="flex gap-3"
                >
                  <CheckCircle2 className="w-6 h-6 text-indigo-500 shrink-0" />
                  <div>
                    <h4 className="text-sm font-bold text-white mb-1">{feature.title}</h4>
                    <p className="text-sm text-gray-400">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/30 to-violet-500/30 blur-[80px] rounded-full -z-10" />
            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 shadow-2xl">
              <div className="space-y-6">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="animate-pulse flex space-x-4">
                    <div className="rounded-full bg-white/10 h-12 w-12 shrink-0"></div>
                    <div className="flex-1 space-y-4 py-1">
                      <div className="h-3 bg-white/10 rounded w-3/4"></div>
                      <div className="space-y-2">
                        <div className="h-3 bg-white/10 rounded"></div>
                        <div className="h-3 bg-white/10 rounded w-5/6"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
