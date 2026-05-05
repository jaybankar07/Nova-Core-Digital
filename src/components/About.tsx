import { motion } from "framer-motion";
import { Building2, Globe, Sparkles } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-24 bg-[#070710] relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-violet-900/10 blur-[120px] rounded-full mix-blend-screen pointer-events-none" />

      <div className="mx-auto max-w-7xl px-5 sm:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-violet-500/20 bg-violet-500/10 px-4 py-1.5 text-sm font-medium text-violet-300 backdrop-blur-lg mb-6">
            <Sparkles className="w-4 h-4" />
            Discover Who We Are
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            About <span className="bg-gradient-to-r from-violet-400 to-indigo-500 bg-clip-text text-transparent">The Company</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12">
          {/* Company Details Column */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-5 flex flex-col gap-6"
          >
            <div className="p-8 rounded-3xl bg-[#13131A]/80 backdrop-blur-xl border border-white/5 shadow-xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-violet-500/10 blur-3xl rounded-full transition-all group-hover:bg-violet-500/20" />
              
              <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                <Building2 className="text-violet-400" />
                Company Details
              </h3>

              <div className="space-y-6">
                <div>
                  <p className="text-sm text-gray-500 font-medium mb-1 uppercase tracking-wider">Company Name</p>
                  <p className="text-lg text-white font-semibold">NovaCore Digital</p>
                </div>
                
                <div>
                  <p className="text-sm text-gray-500 font-medium mb-1 uppercase tracking-wider">Industry</p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {["Digital Marketing", "Web Design", "AI Automation"].map(tag => (
                      <span key={tag} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-sm text-gray-500 font-medium mb-1 uppercase tracking-wider">Tagline</p>
                  <p className="text-lg text-violet-300 font-medium italic">"Building modern digital experiences for growing businesses."</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* About Text Column */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-7"
          >
            <div className="h-full p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-[#13131A]/80 to-[#0A0A0F]/80 backdrop-blur-xl border border-white/5 shadow-xl relative">
              <div className="absolute -top-10 -left-10 text-9xl text-white/5 font-serif leading-none select-none">"</div>
              
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <Globe className="text-indigo-400" />
                Our Mission & Vision
              </h3>
              
              <div className="prose prose-invert max-w-none text-gray-300 text-lg leading-relaxed space-y-6">
                <p>
                  <strong className="text-white font-semibold">NovaCore Digital</strong> is a modern digital agency that helps startups, creators, and small businesses grow online through beautiful websites, social media marketing, branding, SEO, and AI automation tools.
                </p>
                <p>
                  The company focuses on clean design, fast delivery, and conversion-focused digital solutions to ensure our partners achieve their maximum potential in the digital space.
                </p>
              </div>

              {/* Decorative elements */}
              <div className="absolute bottom-0 right-0 w-full h-1/2 bg-gradient-to-t from-violet-900/10 to-transparent pointer-events-none rounded-b-3xl" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
