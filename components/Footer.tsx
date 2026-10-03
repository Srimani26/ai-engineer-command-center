"use client";

import React from "react";
import { ArrowUp } from "lucide-react";
import { LinkedinIcon, GithubIcon } from "./Icons";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-white/[0.08] py-12 px-4 md:px-8 max-w-6xl mx-auto w-full relative z-10 text-xs text-slate-400">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-cyan-400 to-fuchsia-500 flex items-center justify-center font-mono font-black text-white text-[10px]">
            SK
          </div>
          <div>
            <span className="text-white font-bold block">Srimanikandan K</span>
            <span className="text-[11px]">AI Automation Engineer &bull; Erode, Tamil Nadu</span>
          </div>
        </div>

        <div className="flex items-center gap-6">
          <a
            href="https://github.com/Srimani26"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-300 transition flex items-center gap-1.5"
          >
            <GithubIcon className="w-4 h-4" />
            <span>GitHub</span>
          </a>
          <a
            href="https://www.linkedin.com/in/srimanikandan-k-9a741620a"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-300 transition flex items-center gap-1.5"
          >
            <LinkedinIcon className="w-4 h-4" />
            <span>LinkedIn</span>
          </a>
          <button
            onClick={scrollToTop}
            className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-white transition flex items-center gap-1 cursor-pointer"
          >
            <ArrowUp className="w-3.5 h-3.5" />
            <span className="text-[10px] font-mono">TOP</span>
          </button>
        </div>
      </div>

      <div className="mt-8 pt-6 border-t border-white/[0.05] flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-slate-500">
        <span>© 2026 Srimanikandan K. All verified rights reserved.</span>
        <span className="font-mono text-emerald-400/80">● AUTHENTIC RESUME GROUNDED DATA</span>
      </div>
    </footer>
  );
}
