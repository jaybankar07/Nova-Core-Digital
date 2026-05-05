import { createFileRoute } from "@tanstack/react-router";
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
import { Toaster } from "@/components/ui/sonner";

export const Route = createFileRoute("/")(({
  head: () => ({
    meta: [
      { title: "NovaCore Digital — Web Design, Marketing & AI Automation" },
      {
        name: "description",
        content:
          "NovaCore Digital builds modern websites, growth marketing campaigns, and AI automations for ambitious startups and SMBs.",
      },
      { property: "og:title", content: "NovaCore Digital — Modern Digital Experiences" },
      {
        property: "og:description",
        content:
          "Web design, social marketing, branding, SEO, and AI automation for growing businesses.",
      },
    ],
  }),
  component: Index,
}));

function Index() {
  return (
    <div className="min-h-screen bg-[#070710] text-white antialiased">
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
      <Toaster richColors position="top-right" />
    </div>
  );
}
