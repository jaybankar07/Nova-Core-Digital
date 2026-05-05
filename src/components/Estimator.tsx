import { useState } from "react";
import { motion } from "framer-motion";
import { Calculator, Clock, BadgeEuro, CheckSquare, Square } from "lucide-react";

type WebsiteType = "landing" | "ecommerce" | "corporate" | "webapp";

const websiteTypes: { id: WebsiteType; label: string; base: number; weeks: number }[] = [
  { id: "landing", label: "Landing Page", base: 800, weeks: 2 },
  { id: "ecommerce", label: "E-Commerce Store", base: 2500, weeks: 5 },
  { id: "corporate", label: "Corporate Website", base: 1800, weeks: 4 },
  { id: "webapp", label: "Web Application", base: 4000, weeks: 8 },
];

const services: { id: string; label: string; price: number; weeks: number }[] = [
  { id: "design", label: "UI/UX Design", price: 400, weeks: 1 },
  { id: "seo", label: "SEO Optimisation", price: 200, weeks: 1 },
  { id: "branding", label: "Branding & Identity", price: 400, weeks: 1 },
  { id: "ai", label: "AI Automation", price: 600, weeks: 2 },
  { id: "social", label: "Social Media Setup", price: 150, weeks: 0 },
];

export function Estimator() {
  const [selectedType, setSelectedType] = useState<WebsiteType>("landing");
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  const typeData = websiteTypes.find((t) => t.id === selectedType)!;
  const totalPrice =
    typeData.base + selectedServices.reduce((sum, id) => sum + (services.find((s) => s.id === id)?.price ?? 0), 0);
  const totalWeeks =
    typeData.weeks + selectedServices.reduce((sum, id) => sum + (services.find((s) => s.id === id)?.weeks ?? 0), 0);

  const toggleService = (id: string) => {
    setSelectedServices((prev) => (prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]));
  };

  return (
    <section className="py-24 bg-[#0B0B0F] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-violet-600/10 blur-[120px] rounded-full -z-10" />

      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-5xl font-bold text-white mb-6 flex items-center justify-center gap-4"
          >
            <Calculator className="w-10 h-10 text-indigo-400" />
            Estimate Your Project
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-gray-400"
          >
            Select your website type and required services to get an instant cost and timeline estimate.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Inputs */}
          <div className="lg:col-span-2 space-y-8">
            {/* Website Type */}
            <div>
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-4">
                Website Type
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {websiteTypes.map((type) => (
                  <button
                    key={type.id}
                    onClick={() => setSelectedType(type.id)}
                    className={`px-4 py-3 rounded-xl text-sm font-medium border transition-all duration-200 active:scale-95 ${
                      selectedType === type.id
                        ? "bg-gradient-to-r from-indigo-500 to-violet-600 border-transparent text-white shadow-lg shadow-indigo-500/20"
                        : "bg-white/5 border-white/10 text-gray-300 hover:bg-white/10"
                    }`}
                  >
                    {type.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-4">
                Additional Services
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {services.map((service) => {
                  const active = selectedServices.includes(service.id);
                  const Icon = active ? CheckSquare : Square;
                  return (
                    <button
                      key={service.id}
                      onClick={() => toggleService(service.id)}
                      className={`flex items-center gap-3 px-5 py-4 rounded-xl border text-left transition-all duration-200 active:scale-[0.98] ${
                        active
                          ? "bg-indigo-500/15 border-indigo-500/50 text-white"
                          : "bg-white/5 border-white/10 text-gray-300 hover:bg-white/10"
                      }`}
                    >
                      <Icon className={`w-5 h-5 shrink-0 ${active ? "text-indigo-400" : "text-gray-500"}`} />
                      <div className="flex-1 min-w-0">
                        <span className="block text-sm font-medium">{service.label}</span>
                        <span className="block text-xs text-gray-400">+€{service.price}</span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Output */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 rounded-2xl bg-gradient-to-br from-indigo-500/10 to-violet-600/10 border border-indigo-500/20 backdrop-blur-xl p-8 shadow-2xl">
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-6">
                Your Estimate
              </h3>

              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-indigo-500/20 flex items-center justify-center shrink-0">
                    <BadgeEuro className="w-5 h-5 text-indigo-400" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 mb-1">Estimated Cost</p>
                    <motion.p
                      key={totalPrice}
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      className="text-3xl font-black text-white"
                    >
                      €{totalPrice.toLocaleString()}
                      <span className="text-lg text-gray-400 font-medium">–€{(totalPrice * 1.2).toLocaleString()}</span>
                    </motion.p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-violet-500/20 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-violet-400" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 mb-1">Estimated Timeline</p>
                    <motion.p
                      key={totalWeeks}
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      className="text-3xl font-black text-white"
                    >
                      {totalWeeks}
                      <span className="text-lg text-gray-400 font-medium"> weeks</span>
                    </motion.p>
                  </div>
                </div>
              </div>

              <div className="border-t border-white/10 pt-6">
                <p className="text-xs text-gray-500 mb-5">
                  This is a rough estimate. Final pricing depends on project complexity. Contact us for a precise quote.
                </p>
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="flex items-center justify-center gap-2 w-full rounded-full bg-gradient-to-r from-indigo-500 to-violet-600 px-6 py-3.5 text-sm font-bold text-white hover:shadow-lg hover:shadow-indigo-500/30 hover:scale-[1.02] transition-all active:scale-95"
                >
                  Request a Precise Quote
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
