"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Terminal, Download, Mail, Menu, X } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-[#050816]/85 border-b border-cyan-500/20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-cyan-600 via-cyan-500 to-indigo-600 text-white font-bold text-sm shadow-lg shadow-cyan-500/25 group-hover:scale-105 transition-transform">
            SK
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-white text-base tracking-tight group-hover:text-cyan-300 transition-colors">
                Srimanikandan K
              </span>
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                ONLINE
              </span>
            </div>
            <p className="text-[11px] font-mono text-cyan-400/90 tracking-wider uppercase">
              AI Automation Engineer
            </p>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex items-center gap-8 text-xs font-semibold text-slate-300">
          <a href="#command-center" className="hover:text-cyan-400 transition-colors flex items-center gap-1.5">
            <span className="text-cyan-500 font-mono text-[10px]">01</span>
            <span>Command Center</span>
          </a>
          <a href="#projects" className="hover:text-cyan-400 transition-colors flex items-center gap-1.5">
            <span className="text-cyan-500 font-mono text-[10px]">02</span>
            <span>Projects</span>
          </a>
          <a href="#experience" className="hover:text-cyan-400 transition-colors flex items-center gap-1.5">
            <span className="text-cyan-500 font-mono text-[10px]">03</span>
            <span>Experience</span>
          </a>
          <a href="#skills" className="hover:text-cyan-400 transition-colors flex items-center gap-1.5">
            <span className="text-cyan-500 font-mono text-[10px]">04</span>
            <span>Skills</span>
          </a>
          <a href="#contact" className="hover:text-cyan-400 transition-colors flex items-center gap-1.5">
            <span className="text-cyan-500 font-mono text-[10px]">05</span>
            <span>Contact</span>
          </a>
        </div>

        {/* Actions */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="/Srimanikandan_Resume_Professional.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl border border-cyan-500/30 bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 text-xs font-bold transition shadow-sm"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Resume</span>
          </a>
          <a
            href="#contact"
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white text-xs font-bold shadow-lg shadow-cyan-500/25 transition"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Hire Me</span>
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-xl border border-white/10 text-slate-300 hover:text-white"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0a0e1a]/95 border-b border-cyan-500/20 px-6 py-6 space-y-4 text-sm font-semibold">
          <a
            href="#command-center"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-slate-300 hover:text-cyan-400"
          >
            01. Command Center
          </a>
          <a
            href="#projects"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-slate-300 hover:text-cyan-400"
          >
            02. Production Projects
          </a>
          <a
            href="#experience"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-slate-300 hover:text-cyan-400"
          >
            03. Experience
          </a>
          <a
            href="#skills"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-slate-300 hover:text-cyan-400"
          >
            04. Skills
          </a>
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-slate-300 hover:text-cyan-400"
          >
            05. Contact
          </a>
          <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
            <a
              href="/Srimanikandan_Resume_Professional.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-2.5 rounded-xl border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 text-xs font-bold"
            >
              <Download className="w-4 h-4" />
              <span>Download Resume PDF</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}