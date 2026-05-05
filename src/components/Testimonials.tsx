import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "Founder, Bloom Café",
    review:
      "NovaCore Digital completely transformed our online presence. Bookings increased by over 40% within the first month of launch. The team was incredibly professional and efficient.",
  },
  {
    name: "Daniel Weber",
    role: "CEO, FitZone Studio",
    review:
      "They delivered a clean, modern website in record time — exactly to spec. What impressed me most was their communication style and the quality of their design thinking.",
  },
  {
    name: "Aisha Khan",
    role: "Marketing Manager, UrbanNest Realty",
    review:
      "Our lead generation improved significantly after partnering with NovaCore. The SEO work and landing page redesign were both exceptional. Highly recommend.",
  },
  {
    name: "Jonas Meier",
    role: "CTO, PulseAI",
    review:
      "We hired them for an AI automation integration, and the results spoke for themselves. Tier-1 support tickets dropped by 60% within two weeks. World-class execution.",
  },
];

const variants = {
  enter: (dir: number) => ({ x: dir > 0 ? 60 : -60, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir: number) => ({ x: dir < 0 ? 60 : -60, opacity: 0 }),
};

export function Testimonials() {
  const [[current, direction], setCurrent] = useState([0, 0]);

  const paginate = useCallback(
    (newDir: number) => {
      setCurrent(([prev]) => [(prev + newDir + testimonials.length) % testimonials.length, newDir]);
    },
    []
  );

  useEffect(() => {
    const timer = setInterval(() => paginate(1), 5000);
    return () => clearInterval(timer);
  }, [paginate]);

  const t = testimonials[current];

  return (
    <section
      id="testimonials"
      className="py-24 bg-indigo-950/30 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B0B0F] via-indigo-950/20 to-[#0B0B0F] -z-10" />

      <div className="mx-auto max-w-4xl px-6 sm:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-5xl font-bold text-white mb-4"
          >
            Loved by founders &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-violet-500">
              marketing teams.
            </span>
          </motion.h2>
        </div>

        <div className="relative min-h-[260px] flex items-center">
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={current}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="w-full bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-10 shadow-2xl"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 fill-amber-400 text-amber-400" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <p className="text-xl text-gray-200 italic leading-relaxed mb-8">
                "{t.review}"
              </p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-indigo-500 to-violet-600 flex items-center justify-center text-white font-bold text-lg shrink-0">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="font-bold text-white">{t.name}</p>
                  <p className="text-sm text-gray-400">{t.role}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-6 mt-10">
          <button
            onClick={() => paginate(-1)}
            className="w-10 h-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-gray-300 hover:bg-white/10 hover:text-white transition-colors active:scale-90"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent([i, i > current ? 1 : -1])}
                aria-label={`Go to testimonial ${i + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === current
                    ? "w-8 bg-indigo-400"
                    : "w-2 bg-white/20 hover:bg-white/40"
                }`}
              />
            ))}
          </div>

          <button
            onClick={() => paginate(1)}
            className="w-10 h-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-gray-300 hover:bg-white/10 hover:text-white transition-colors active:scale-90"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
