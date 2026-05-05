import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "Founder, Bloom Café",
    review: "NovaCore Digital transformed our online presence and increased customer inquiries."
  },
  {
    name: "Daniel Weber",
    role: "CEO, FitZone Studio",
    review: "They delivered a clean and modern website in record time."
  },
  {
    name: "Aisha Khan",
    role: "Marketing Manager, UrbanNest Realty",
    review: "Our lead generation improved significantly after working with them."
  }
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-[#0B0B0F] relative overflow-hidden">
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-violet-600/10 blur-[100px] rounded-full -z-10" />
      
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-5xl font-bold text-white mb-6"
          >
            Loved by founders & <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-violet-500">marketing teams.</span>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-lg border border-white/10 p-8 rounded-2xl relative hover:bg-white/10 transition-colors"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-white/10" />
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-amber-500 fill-amber-500" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-lg text-gray-300 italic mb-8 relative z-10 leading-relaxed">
                "{testimonial.review}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-indigo-500 to-violet-600 flex items-center justify-center text-white font-bold text-lg">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-white leading-tight">{testimonial.name}</h4>
                  <p className="text-sm text-gray-400">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
