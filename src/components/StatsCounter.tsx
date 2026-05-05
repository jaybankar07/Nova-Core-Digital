import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Briefcase, Users, Star } from "lucide-react";

const stats = [
  { value: 120, label: "Projects Delivered", suffix: "+", icon: Briefcase },
  { value: 50, label: "Happy Clients", suffix: "+", icon: Users },
  { value: 98, label: "Satisfaction Rate", suffix: "%", icon: Star },
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
      className="flex flex-col items-center text-center gap-3 px-6 py-8 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 transition-colors"
    >
      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center shadow-lg shadow-indigo-500/20">
        <Icon className="w-6 h-6 text-white" />
      </div>
      <div className="text-4xl sm:text-5xl font-black text-white tabular-nums">
        {count}
        <span className="text-indigo-400">{stat.suffix}</span>
      </div>
      <p className="text-sm text-gray-400 font-medium">{stat.label}</p>
    </motion.div>
  );
}

export function StatsCounter() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div ref={ref} className="py-12 bg-[#0B0B0F]">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {stats.map((stat, i) => (
            <StatItem key={stat.label} stat={stat} triggered={inView} index={i} />
          ))}
        </div>
      </div>
    </div>
  );
}
