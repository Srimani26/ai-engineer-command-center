import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WorkShowcase from "@/components/WorkShowcase";
import LiveExecutionLab from "@/components/LiveExecutionLab";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import NeuralCanvas from "@/components/NeuralCanvas";
import CommandPalette from "@/components/CommandPalette";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050713] text-white flex flex-col justify-between relative selection:bg-indigo-500/30 selection:text-indigo-200">
      {/* 60fps Interactive Neural Particles Mesh */}
      <NeuralCanvas />
      
      {/* Quick Launch Command Palette (Cmd+K) */}
      <CommandPalette />

      <Navbar />
      <Hero />
      <WorkShowcase />
      <LiveExecutionLab />
      <Experience />
      <Skills />
      <Contact />
      <Footer />
    </main>
  );
}
