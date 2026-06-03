"use client";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-[#050816]/70 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-8 h-20 flex items-center justify-between">
        <div className="font-bold text-cyan-400 tracking-widest">
          Srimanikandan K AI
        </div>

        <div className="hidden md:flex items-center gap-8 text-gray-300">
          <a href="#projects" className="hover:text-cyan-400 transition">
            Projects
          </a>

          <a href="#experience" className="hover:text-cyan-400 transition">
            Experience
          </a>

          <a href="#github" className="hover:text-cyan-400 transition">
            GitHub
          </a>

          <a href="#contact" className="hover:text-cyan-400 transition">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}