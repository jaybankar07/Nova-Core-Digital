import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Briefcase, Users, Star } from "lucide-react";

const stats = [
  { value: 120, label: "Projects Delivered", desc: "Successful projects that drive real business results.", suffix: "+", icon: Briefcase },
  { value: 50, label: "Happy Clients", desc: "Long-term partnerships built on trust and performance.", suffix: "+", icon: Users },
  { value: 98, label: "Satisfaction Rate", desc: "Our clients love the results we deliver.", suffix: "%", icon: Star },
];

function useCountUp(target: number, duration = 1500, triggered = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!triggered) return;
    let start = 0;
    const step = Math.ceil(target / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [target, duration, triggered]);

  return count;
}

function StatItem({
  stat,
  triggered,
  index,
}: {
  stat: (typeof stats)[0];
  triggered: boolean;
  index: number;
}) {
  const count = useCountUp(stat.value, 1500, triggered);
  const Icon = stat.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={triggered ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="flex flex-col text-left px-8 py-8 rounded-3xl bg-[#13131A]/80 backdrop-blur-xl border border-white/5 hover:border-violet-500/30 hover:bg-[#1A1A24]/90 transition-all shadow-xl group"
    >
      <div className="flex items-center gap-6 mb-4">
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-600 to-indigo-700 flex items-center justify-center shadow-[0_0_20px_rgba(139,92,246,0.5)] group-hover:shadow-[0_0_30px_rgba(139,92,246,0.8)] transition-all">
          <Icon className="w-8 h-8 text-white" strokeWidth={1.5} />
        </div>
        <div className="text-5xl font-bold text-white tabular-nums tracking-tight">
          {count}
          <span className="text-violet-400">{stat.suffix}</span>
        </div>
      </div>
      <p className="text-lg text-gray-200 font-semibold mb-2">{stat.label}</p>
      <p className="text-sm text-gray-500 font-medium leading-relaxed">{stat.desc}</p>
      {/* Background glow line */}
      <div className="absolute bottom-0 left-10 right-10 h-px bg-gradient-to-r from-transparent via-violet-500/20 to-transparent"></div>
    </motion.div>
  );
}

export function StatsCounter() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const logos = [
    { name: "ANKER", style: "font-serif tracking-widest text-xl" },
    { name: "HubSpot", style: "font-sans font-bold text-xl" },
    { name: "Notion", style: "font-serif font-medium text-xl", icon: true },
    { name: "stripe", style: "font-sans font-bold text-xl tracking-tight" },
    { name: "slack", style: "font-sans font-bold text-xl", hash: true },
    { name: "zoom", style: "font-sans font-bold text-xl tracking-tight" }
  ];

  return (
    <div ref={ref} className="pb-20 bg-[#070710] relative z-20 -mt-10">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat, i) => (
            <StatItem key={stat.label} stat={stat} triggered={inView} index={i} />
          ))}
        </div>
        
        {/* Logo Strip */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-12 py-8 px-10 rounded-3xl bg-[#13131A]/60 backdrop-blur-sm border border-white/5 flex flex-wrap justify-between items-center gap-8"
        >
          {logos.map((logo) => (
            <div key={logo.name} className={`text-gray-500 hover:text-gray-300 transition-colors flex items-center gap-2 ${logo.style}`}>
              {logo.icon && (
                <div className="w-6 h-6 border-2 border-current rounded-md flex items-center justify-center font-bold text-sm">N</div>
              )}
              {logo.hash && (
                <span className="text-xl">#</span>
              )}
              {logo.name}
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
