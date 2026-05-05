import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { StatsCounter } from "@/components/StatsCounter";
import { Services } from "@/components/Services";
import { HowWeWork } from "@/components/HowWeWork";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { Estimator } from "@/components/Estimator";
import { Portfolio } from "@/components/Portfolio";
import { Testimonials } from "@/components/Testimonials";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { ChatWidget } from "@/components/ChatWidget";

export function App() {
  return (
    <div className="min-h-screen bg-[#0B0B0F] text-white antialiased">
      <Navbar />
      <main>
        <Hero />
        <StatsCounter />
        <About />
        <Services />
        <HowWeWork />
        <WhyChooseUs />
        <Estimator />
        <Portfolio />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <ChatWidget />
    </div>
  );
}
