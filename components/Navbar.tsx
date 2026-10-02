"use client";

import React, { useState, useEffect } from "react";
import { Download, Menu, X, ArrowRight, Zap, Sparkles } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Command HUD", href: "#command-center" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-4 left-0 right-0 z-50 px-4 pointer-events-none">
      <div className="max-w-4xl mx-auto flex items-center justify-between pointer-events-auto rounded-full px-5 py-2.5 bg-[#0e102b]/90 backdrop-blur-2xl border border-violet-500/30 shadow-[0_0_35px_rgba(124,58,237,0.25)] transition-all duration-300">
        {/* Brand */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-violet-600 via-cyan-400 to-emerald-400 flex items-center justify-center font-mono font-black text-slate-950 text-xs shadow-md shadow-violet-500/30 group-hover:scale-105 transition-transform">
            ST
          </div>
          <div>
            <span className="font-bold text-xs tracking-tight text-white block group-hover:text-cyan-300 transition-colors">
              Srimanikandan T
            </span>
            <span className="text-[10px] text-cyan-400 block font-medium">
              AI Automation &amp; Systems Lead
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-5">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs font-semibold text-slate-300 hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action Button */}
        <div className="hidden md:flex items-center gap-2.5">
          <a
            href="/Srimanikandan_Resume_Professional.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3.5 py-1.5 rounded-full border border-white/10 hover:border-violet-500/40 text-slate-200 hover:text-white font-medium text-xs transition flex items-center gap-1.5 bg-white/[0.04]"
          >
            <Download className="w-3.5 h-3.5 text-cyan-400" />
            <span>Resume</span>
          </a>

          <a
            href="#contact"
            className="px-4 py-1.5 rounded-full bg-gradient-to-r from-cyan-400 via-teal-400 to-indigo-500 hover:opacity-95 text-slate-950 font-black text-xs shadow-lg shadow-cyan-500/25 transition-all flex items-center gap-1.5"
          >
            <span>Let's Talk</span>
            <ArrowRight className="w-3 h-3 text-slate-950" />
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-1.5 rounded-full bg-white/10 text-slate-300"
        >
          {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 max-w-sm mx-auto bg-[#0e102b]/98 backdrop-blur-2xl border border-violet-500/30 rounded-3xl p-5 space-y-3 pointer-events-auto shadow-2xl shadow-violet-950/80">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-xs font-semibold text-slate-300 hover:text-cyan-400 py-1"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-white/10 flex flex-col gap-2">
            <a
              href="/Srimanikandan_Resume_Professional.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2 rounded-xl border border-white/10 text-slate-200 text-xs font-medium flex items-center justify-center gap-2"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Resume (PDF)</span>
            </a>

            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-2 rounded-xl bg-gradient-to-r from-cyan-400 to-indigo-500 text-slate-950 font-bold text-xs flex items-center justify-center gap-2"
            >
              <span>Get in Touch</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
