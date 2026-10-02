import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Metrics from "@/components/Metrics";
import CommandCenter from "@/components/CommandCenter";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import NeuralCanvas from "@/components/NeuralCanvas";
import CommandPalette from "@/components/CommandPalette";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#030712] text-white flex flex-col justify-between relative selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Dynamic 60fps Interactive Neural Particles Background */}
      <NeuralCanvas />
      
      {/* Quick Launch Command Palette (Cmd+K) */}
      <CommandPalette />

      <Navbar />
      <Hero />
      <Metrics />
      <CommandCenter />
      <Projects />
      <Experience />
      <Skills />
      <Contact />
      <Footer />
    </main>
  );
}
