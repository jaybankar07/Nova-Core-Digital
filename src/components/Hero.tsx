import { ArrowRight, Play } from "lucide-react";
import { motion } from "framer-motion";

function scrollTo(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden pt-32 pb-24 sm:pt-40 sm:pb-32 bg-[#0B0B0F]"
    >
      {/* Dynamic Gradient Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#0B0B0F] via-indigo-950/40 to-violet-900/20" />
      
      {/* Optional: Rotating 3D Sphere effect using CSS */}
      <div className="absolute top-1/2 left-1/2 -translate-x-[20%] -translate-y-1/2 -z-10 w-[600px] h-[600px] bg-gradient-to-tr from-indigo-500/20 to-violet-500/20 blur-[100px] rounded-full [transform:rotate3d(1,1,1,45deg)] animate-[spin_20s_linear_infinite]" />
      
      {/* Floating Shapes */}
      <motion.div 
        animate={{ y: [0, -30, 0], x: [0, 20, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[20%] left-[10%] -z-10 w-24 h-24 rounded-2xl bg-gradient-to-br from-indigo-500/30 to-transparent backdrop-blur-xl border border-white/10 rotate-12"
      />
      <motion.div 
        animate={{ y: [0, 40, 0], x: [0, -20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-[20%] right-[15%] -z-10 w-32 h-32 rounded-full bg-gradient-to-tl from-violet-500/30 to-transparent backdrop-blur-xl border border-white/10 -rotate-12"
      />

      <div className="mx-auto max-w-6xl px-5 sm:px-8 text-center relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-sm font-medium text-gray-300 backdrop-blur-lg"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
          </span>
          Next-Gen Digital Experiences
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-8 text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight text-white leading-tight"
        >
          NovaCore{" "}
          <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-indigo-400 bg-clip-text text-transparent bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]">
            Digital
          </span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 text-xl sm:text-2xl text-gray-300 font-medium max-w-3xl mx-auto"
        >
          We design high-converting landing pages, build powerful brands, and integrate AI automations to skyrocket your growth.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            onClick={() => scrollTo("contact")}
            className="group relative flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-indigo-500 to-violet-600 px-8 py-4 text-base font-bold text-white shadow-[0_0_40px_-10px_rgba(99,102,241,0.5)] hover:shadow-[0_0_60px_-15px_rgba(99,102,241,0.7)] hover:scale-105 transition-all overflow-hidden w-full sm:w-auto"
          >
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></div>
            <span className="relative z-10 flex items-center gap-2">
              Start Your Project
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </span>
          </button>
          
          <button
            onClick={() => scrollTo("portfolio")}
            className="group flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-8 py-4 text-base font-medium text-white hover:bg-white/10 backdrop-blur-md transition-all hover:scale-105 w-full sm:w-auto"
          >
            <Play className="h-5 w-5 text-gray-300 group-hover:text-white transition-colors" />
            View Our Work
          </button>
        </motion.div>
      </div>
    </section>
  );
}
