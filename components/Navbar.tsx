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
      <div className="max-w-4xl mx-auto flex items-center justify-between pointer-events-auto rounded-full px-5 py-2.5 bg-[#070c18]/80 backdrop-blur-2xl border border-white/10 shadow-2xl shadow-black/80 transition-all duration-300">
        {/* Brand */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-cyan-400 via-teal-400 to-indigo-500 flex items-center justify-center font-mono font-bold text-slate-950 text-xs shadow-md shadow-cyan-500/20 group-hover:scale-105 transition-transform">
            ST
          </div>
          <div>
            <span className="font-bold text-xs tracking-tight text-white block group-hover:text-cyan-300 transition-colors">
              Srimanikandan T
            </span>
            <span className="text-[10px] text-slate-400 block font-medium">
              AI Systems Lead
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-5">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs font-medium text-slate-300 hover:text-white transition-colors"
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
            className="px-3.5 py-1.5 rounded-full border border-white/10 hover:border-cyan-500/40 text-slate-300 hover:text-white font-medium text-xs transition flex items-center gap-1.5 bg-white/[0.03]"
          >
            <Download className="w-3.5 h-3.5 text-cyan-400" />
            <span>Resume</span>
          </a>

          <a
            href="#contact"
            className="px-4 py-1.5 rounded-full bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold text-xs shadow-md shadow-cyan-400/20 transition flex items-center gap-1.5"
          >
            <span>Let's Talk</span>
            <ArrowRight className="w-3 h-3 text-slate-950" />
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-1.5 rounded-full bg-white/5 text-slate-300"
        >
          {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 max-w-sm mx-auto bg-[#070c18]/95 backdrop-blur-2xl border border-white/10 rounded-3xl p-5 space-y-3 pointer-events-auto shadow-2xl">
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
              className="w-full py-2 rounded-xl bg-cyan-400 text-slate-950 font-bold text-xs flex items-center justify-center gap-2"
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
