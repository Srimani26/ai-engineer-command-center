import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WorkShowcase from "@/components/WorkShowcase";
import LiveExecutionLab from "@/components/LiveExecutionLab";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import GalaxyCanvas from "@/components/GalaxyCanvas";
import RecruiterDock from "@/components/RecruiterDock";
import CommandPalette from "@/components/CommandPalette";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#03030c] text-white flex flex-col justify-between relative selection:bg-cyan-400/30 selection:text-cyan-200">
      {/* 60fps Interactive Deep Space Galaxy & Quantum Canvas */}
      <GalaxyCanvas />
      
      {/* Quick Launch Command Palette (Cmd+K) */}
      <CommandPalette />

      {/* Floating Recruiter Fast-Track Dock */}
      <RecruiterDock />

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
