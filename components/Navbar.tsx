"use client";

import React, { useState, useEffect } from "react";
import { Download, Menu, X, ArrowRight, Phone, Mail, Sparkles } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 25);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Flagship Projects", href: "#systems" },
    { name: "Diagnostic Console", href: "#terminal" },
    { name: "Experience", href: "#experience" },
    { name: "Tech Stack", href: "#skills" },
    { name: "Contact & Hire", href: "#contact" },
  ];

  return (
    <header className="fixed top-5 left-0 right-0 z-50 px-4 md:px-8 pointer-events-none">
      <div className="max-w-6xl mx-auto flex items-center justify-between pointer-events-auto rounded-full px-6 py-3 bg-[#06061c]/90 backdrop-blur-2xl border border-white/[0.12] shadow-2xl shadow-black/90 transition-all duration-300">
        {/* Brand Mark */}
        <a href="#" className="flex items-center gap-3.5 group">
          <div className="relative">
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-cyan-400 via-violet-500 to-fuchsia-500 flex items-center justify-center font-mono font-extrabold text-white text-xs shadow-lg shadow-cyan-500/25 group-hover:scale-105 transition-transform">
              SK
            </div>
            <span className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 rounded-full bg-emerald-400 border-2 border-[#06061c] animate-pulse" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-heading font-black text-base tracking-tight text-white group-hover:text-cyan-300 transition-colors">
                Srimanikandan K
              </span>
              <span className="px-2 py-0.5 rounded-md bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-[10px] font-mono font-bold text-cyan-300 border border-cyan-500/30">
                AVAILABLE FOR HIRE
              </span>
            </div>
            <span className="text-xs text-slate-400 block font-normal leading-none mt-0.5">
              AI Automation Engineer &bull; Erode, Tamil Nadu
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs font-semibold text-slate-300 hover:text-cyan-300 transition-colors tracking-wide"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="/Srimanikandan_Resume_Professional.pdf"
            download="Srimanikandan_Resume_Professional.pdf"
            className="px-4 py-2 rounded-full border border-cyan-500/30 hover:border-cyan-400/60 text-cyan-200 text-xs font-bold transition flex items-center gap-2 bg-cyan-950/20 hover:bg-cyan-950/50 cursor-pointer"
          >
            <Download className="w-3.5 h-3.5 text-cyan-400" />
            <span>Resume (PDF)</span>
          </a>

          <a
            href="https://wa.me/916382121634?text=Hi%20Srimanikandan,%20I%20reviewed%20your%20portfolio%20and%20would%20like%20to%20hire/connect%20with%20you."
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 rounded-full bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 hover:opacity-95 text-white font-bold text-xs shadow-lg shadow-emerald-500/25 transition flex items-center gap-2 cursor-pointer hover:scale-105"
          >
            <Phone className="w-3.5 h-3.5 fill-current" />
            <span>Hire Me / WhatsApp</span>
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-full bg-white/5 text-slate-300 hover:text-white cursor-pointer"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-3 max-w-sm mx-auto bg-[#07071e]/98 backdrop-blur-2xl border border-white/10 rounded-3xl p-6 space-y-4 pointer-events-auto shadow-2xl">
          <div className="flex flex-col space-y-2.5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-semibold text-slate-200 hover:text-cyan-400 py-1.5 transition"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-4 border-t border-white/10 flex flex-col gap-2.5">
            <a
              href="/Srimanikandan_Resume_Professional.pdf"
              download="Srimanikandan_Resume_Professional.pdf"
              className="w-full py-3 rounded-xl border border-cyan-500/30 text-cyan-200 text-xs font-bold flex items-center justify-center gap-2 bg-cyan-950/30"
            >
              <Download className="w-4 h-4 text-cyan-400" />
              <span>Download Official Resume (PDF)</span>
            </a>

            <a
              href="https://wa.me/916382121634?text=Hi%20Srimanikandan,%20let's%20connect%20about%20an%20opportunity."
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20"
            >
              <Phone className="w-4 h-4" />
              <span>WhatsApp (+91 63821 21634)</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
