"use client";

import React from "react";

export default function Footer() {
  return (
    <footer className="border-t border-cyan-500/20 bg-[#03050c] text-white py-12 relative z-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-cyan-500/20 text-cyan-400 font-bold text-xs border border-cyan-500/30">
            SK
          </div>
          <div>
            <p className="text-sm font-bold text-white tracking-tight">
              Srimanikandan K
            </p>
            <p className="text-[11px] font-mono text-slate-500">
              AI Automation Engineer &bull; Erode, Tamil Nadu
            </p>
          </div>
        </div>

        <div className="flex items-center gap-6 text-xs text-slate-400 font-mono">
          <a href="#command-center" className="hover:text-cyan-400 transition">
            HUD
          </a>
          <a href="#projects" className="hover:text-cyan-400 transition">
            Projects
          </a>
          <a href="#experience" className="hover:text-cyan-400 transition">
            Experience
          </a>
          <a href="#skills" className="hover:text-cyan-400 transition">
            Skills
          </a>
          <a href="#contact" className="hover:text-cyan-400 transition">
            Contact
          </a>
        </div>

        <div className="flex items-center gap-3 text-xs text-slate-500 font-mono">
          <span>&copy; {new Date().getFullYear()} Srimanikandan K</span>
          <span>&bull;</span>
          <span className="text-cyan-400/80">Command Center v2.5</span>
        </div>
      </div>
    </footer>
  );
}