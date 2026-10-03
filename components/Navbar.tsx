"use client";

import React, { useState, useEffect } from "react";
import { Download, Menu, X, ArrowRight, Phone } from "lucide-react";

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
    { name: "Verified Projects", href: "#systems" },
    { name: "Live Terminal", href: "#terminal" },
    { name: "Experience", href: "#experience" },
    { name: "Skills & Education", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-4 left-0 right-0 z-50 px-4 pointer-events-none">
      <div className="max-w-5xl mx-auto flex items-center justify-between pointer-events-auto rounded-full px-5 py-2.5 bg-[#06061a]/85 backdrop-blur-2xl border border-white/[0.12] shadow-2xl shadow-black/80 transition-all duration-300">
        {/* Brand Mark */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="relative">
            <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-cyan-400 via-violet-500 to-fuchsia-500 flex items-center justify-center font-mono font-extrabold text-white text-xs shadow-lg shadow-cyan-500/25 group-hover:scale-105 transition-transform">
              SK
            </div>
            <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-emerald-400 border-2 border-[#06061a] animate-pulse" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-heading font-bold text-sm tracking-tight text-white group-hover:text-cyan-300 transition-colors">
                Srimanikandan K
              </span>
              <span className="px-1.5 py-0.2 rounded-md bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-[10px] font-mono text-cyan-300 border border-cyan-500/30">
                AI AUTOMATION
              </span>
            </div>
            <span className="text-[11px] text-slate-400 block font-normal leading-none mt-0.5">
              AI Automation Engineer &bull; Erode, Tamil Nadu
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs font-medium text-slate-300 hover:text-cyan-300 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center gap-2.5">
          <a
            href="/Srimanikandan_Resume_Professional.pdf"
            download="Srimanikandan_Resume_Professional.pdf"
            className="px-3.5 py-1.5 rounded-full border border-cyan-500/30 hover:border-cyan-400/60 text-cyan-200 text-xs font-semibold transition flex items-center gap-1.5 bg-cyan-950/20 hover:bg-cyan-950/40"
          >
            <Download className="w-3.5 h-3.5 text-cyan-400" />
            <span>Resume (PDF)</span>
          </a>

          <a
            href="https://wa.me/916382121634?text=Hi%20Srimanikandan,%20I%20reviewed%20your%20resume%20and%20portfolio%20and%20would%20like%20to%20connect."
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-1.5 rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 hover:opacity-95 text-white font-bold text-xs shadow-md shadow-emerald-500/20 transition flex items-center gap-1.5"
          >
            <Phone className="w-3.5 h-3.5 fill-current" />
            <span>+91 6382121634</span>
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-full bg-white/5 text-slate-300 hover:text-white"
        >
          {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-2 max-w-sm mx-auto bg-[#07071e]/98 backdrop-blur-2xl border border-white/10 rounded-3xl p-5 space-y-3 pointer-events-auto shadow-2xl">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-xs font-semibold text-slate-300 hover:text-cyan-400 py-1.5"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-white/10 flex flex-col gap-2">
            <a
              href="/Srimanikandan_Resume_Professional.pdf"
              download="Srimanikandan_Resume_Professional.pdf"
              className="w-full py-2.5 rounded-xl border border-cyan-500/30 text-cyan-200 text-xs font-semibold flex items-center justify-center gap-2 bg-cyan-950/20"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download Official Resume (PDF)</span>
            </a>

            <a
              href="https://wa.me/916382121634?text=Hi%20Srimanikandan,%20I%20reviewed%20your%20portfolio."
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-bold text-xs flex items-center justify-center gap-2"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>WhatsApp (+91 6382121634)</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
