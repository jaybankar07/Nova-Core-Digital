import { ArrowRight, Play, TrendingUp, PieChart } from "lucide-react";
import { motion } from "framer-motion";

function scrollTo(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden pt-32 pb-16 sm:pt-40 sm:pb-20 bg-[#070710]"
    >
      {/* Background stars / dots / grid could be added here if needed */}
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-900/20 via-[#070710] to-[#070710]"></div>
      
      {/* Glowing background orbs */}
      <div className="absolute top-1/4 right-1/4 -z-10 w-[800px] h-[800px] bg-indigo-600/20 blur-[150px] rounded-full mix-blend-screen" />
      <div className="absolute top-1/2 left-1/4 -z-10 w-[600px] h-[600px] bg-violet-600/10 blur-[150px] rounded-full mix-blend-screen" />

      <div className="mx-auto max-w-7xl px-5 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="flex flex-col items-start text-left">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm font-medium text-gray-300 backdrop-blur-lg mb-8"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-violet-500"></span>
              </span>
              Next-Gen Digital Experiences
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl sm:text-7xl lg:text-[5.5rem] font-bold tracking-tight text-white leading-[1.1]"
            >
              Build. Brand.<br />
              Grow with <span className="bg-gradient-to-r from-violet-400 to-indigo-500 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(139,92,246,0.3)]">NovaCore</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 text-xl text-gray-400 font-medium max-w-xl"
            >
              We design high-converting landing pages, build powerful brands, and integrate <span className="text-violet-400 font-semibold drop-shadow-[0_0_10px_rgba(139,92,246,0.5)]">AI automations</span> to skyrocket your growth.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
            >
              <button
                onClick={() => scrollTo("contact")}
                className="group relative flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-indigo-500 to-violet-600 px-8 py-4 text-base font-bold text-white shadow-[0_0_30px_-5px_rgba(139,92,246,0.6)] hover:shadow-[0_0_40px_-5px_rgba(139,92,246,0.8)] transition-all overflow-hidden w-full sm:w-auto"
              >
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></div>
                <span className="relative z-10 flex items-center gap-2">
                  Start Your Project
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </span>
              </button>
              
              <button
                onClick={() => scrollTo("portfolio")}
                className="group flex items-center justify-center gap-3 rounded-full border border-white/20 bg-transparent px-8 py-4 text-base font-medium text-white hover:bg-white/5 backdrop-blur-md transition-all w-full sm:w-auto"
              >
                <Play className="h-5 w-5 text-gray-300 group-hover:text-white transition-colors" />
                View Our Work
              </button>
            </motion.div>

            {/* Social Proof */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-12 flex items-center gap-4"
            >
              <div className="flex -space-x-3">
                <img className="w-10 h-10 rounded-full border-2 border-[#0B0B0F]" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=64&h=64" alt="User 1" />
                <img className="w-10 h-10 rounded-full border-2 border-[#0B0B0F]" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=64&h=64" alt="User 2" />
                <img className="w-10 h-10 rounded-full border-2 border-[#0B0B0F]" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=64&h=64" alt="User 3" />
              </div>
              <div className="flex flex-col">
                <span className="text-sm text-gray-400 font-medium">Trusted by 50+ businesses worldwide</span>
                <div className="flex gap-1 mt-1 text-yellow-500">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column - 3D Illustration Stand-in */}
          <div className="relative hidden lg:block h-[600px] w-full perspective-[1000px]">
            {/* Orbital rings */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-violet-500/20 rounded-full scale-y-50 shadow-[0_0_50px_rgba(139,92,246,0.1)]"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border-2 border-violet-400/30 rounded-full scale-y-[0.4] rotate-12 shadow-[0_0_30px_rgba(139,92,246,0.2)]"></div>

            {/* Glowing Hexagon */}
            <motion.div 
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 z-10"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-violet-600 to-indigo-600 rounded-[30%] rotate-45 blur-2xl opacity-50 mix-blend-screen"></div>
              <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-[0_0_40px_rgba(139,92,246,0.8)] relative z-10 backdrop-blur-xl">
                <polygon points="50 5 90 25 90 75 50 95 10 75 10 25" fill="rgba(139,92,246,0.2)" stroke="#a78bfa" strokeWidth="1" />
                <polygon points="50 15 80 30 80 70 50 85 20 70 20 30" fill="url(#innerHex)" />
                <defs>
                  <linearGradient id="innerHex" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="rgba(124, 58, 237, 0.8)" />
                    <stop offset="100%" stopColor="rgba(79, 70, 229, 0.4)" />
                  </linearGradient>
                </defs>
                <text x="50" y="68" textAnchor="middle" fill="white" fontSize="42" fontWeight="900" style={{ textShadow: "0 0 20px rgba(255,255,255,0.8)" }}>N</text>
              </svg>
            </motion.div>

            {/* Floating UI Element 1: Growth Card */}
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-1/4 right-[5%] z-20 w-40 bg-[#1A1A24]/80 backdrop-blur-xl border border-white/10 rounded-2xl p-4 shadow-2xl shadow-indigo-900/50"
            >
              <div className="text-xs text-gray-400 font-medium mb-1">Growth</div>
              <div className="text-2xl font-bold text-white mb-2">+300%</div>
              <TrendingUp className="text-violet-400 w-8 h-8" />
            </motion.div>

            {/* Floating UI Element 2: Chart Card */}
            <motion.div 
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute top-1/4 left-[5%] z-20 w-32 bg-[#1A1A24]/80 backdrop-blur-xl border border-white/10 rounded-2xl p-3 shadow-2xl shadow-indigo-900/50"
            >
               <div className="flex gap-1 mb-3">
                 <div className="w-full h-1.5 bg-gray-600 rounded-full"></div>
                 <div className="w-1/2 h-1.5 bg-violet-400 rounded-full shadow-[0_0_10px_rgba(139,92,246,0.8)]"></div>
               </div>
               <svg viewBox="0 0 100 50" className="w-full h-12 stroke-violet-400 fill-none stroke-2">
                 <path d="M0,40 L20,30 L40,45 L70,15 L100,20" className="drop-shadow-[0_0_5px_rgba(139,92,246,0.5)]" />
               </svg>
            </motion.div>

            {/* Floating UI Element 3: Pie Chart */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              className="absolute top-1/4 right-[10%] z-0 w-16 h-16 bg-[#1A1A24]/80 backdrop-blur-xl border border-white/10 rounded-full flex items-center justify-center shadow-xl shadow-indigo-900/40"
            >
              <PieChart className="text-indigo-400 w-8 h-8" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
