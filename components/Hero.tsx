"use client";

import React, { useState } from "react";
import {
  ArrowRight,
  Download,
  Mail,
  Phone,
  CheckCircle2,
  Cpu,
  Layers,
  Sparkles,
  ShieldCheck,
  MapPin,
  ExternalLink,
  Copy,
  Check,
} from "lucide-react";
import { LinkedinIcon } from "./Icons";

export default function Hero() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("srimanikandanece2000@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText("+916382121634");
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  return (
    <section className="relative min-h-[92vh] flex flex-col justify-center pt-36 pb-20 px-4 md:px-8 max-w-6xl mx-auto z-10">
      {/* Top Cosmic Status Pill */}
      <div className="flex items-center justify-center mb-8">
        <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-cyan-500/10 border border-cyan-400/35 text-cyan-300 text-xs font-mono font-bold backdrop-blur-2xl shadow-xl shadow-cyan-500/15">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
          <span>PRODUCTION AI AUTOMATION & SYSTEMS ENGINEER</span>
        </div>
      </div>

      {/* Main Spacious Headline */}
      <div className="text-center space-y-6 max-w-5xl mx-auto">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-heading font-black tracking-tight text-white leading-[1.12]">
          Architecting <span className="text-gradient-vibrant">Autonomous AI</span> Systems & Business Engines.
        </h1>

        <p className="text-slate-300 text-base sm:text-xl max-w-3xl mx-auto leading-relaxed font-normal">
          Hi, I&apos;m <strong>Srimanikandan K</strong>. I engineer business-critical autonomous systems: creator of <strong>Sri AI Business OS</strong>, architect of a <strong>4-layer Zoho CRM quotation automation system</strong> (&lt;1 min generation, 0 manual errors), and engineer of a live <strong>Google Ads AI Auditor</strong> that identified ₹4,952 in wasted ad spend in 8 days at ₹0 operating cost.
        </p>

        {/* Primary Call to Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <a
            href="#systems"
            className="px-8 py-4 rounded-full bg-gradient-to-r from-cyan-400 via-violet-500 to-fuchsia-500 text-white font-bold text-sm sm:text-base shadow-2xl shadow-fuchsia-500/30 hover:opacity-95 hover:scale-[1.03] transition-all flex items-center gap-2.5 cursor-pointer"
          >
            <span>Explore Flagship Production Systems</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <a
            href="/Srimanikandan_Resume_Professional.pdf"
            download="Srimanikandan_Resume_Professional.pdf"
            className="px-8 py-4 rounded-full bg-slate-900/90 hover:bg-slate-800/90 border border-white/20 text-slate-100 font-bold text-sm sm:text-base transition-all flex items-center gap-2.5 backdrop-blur-2xl hover:border-cyan-400/60 shadow-xl cursor-pointer"
          >
            <Download className="w-4 h-4 text-cyan-400" />
            <span>Download Official Resume (PDF)</span>
          </a>
        </div>
      </div>

      {/* BOLD RECRUITER CONTACT & INSTANT HIRE CARD */}
      <div className="mt-16 max-w-4xl mx-auto w-full">
        <div className="chromatic-border-box shadow-2xl shadow-cyan-950/60">
          <div className="chromatic-border-inner p-7 sm:p-10">
            {/* Header Identity Row */}
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 pb-8 border-b border-white/[0.1]">
              <div className="flex items-center gap-5">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-cyan-400 via-violet-500 to-fuchsia-500 p-0.5 shadow-2xl shadow-cyan-500/30 shrink-0">
                  <div className="w-full h-full rounded-[14px] bg-[#06061a] flex items-center justify-center font-mono font-black text-2xl text-white">
                    SK
                  </div>
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-2.5">
                    <h2 className="font-heading text-2xl sm:text-3xl font-black text-white tracking-tight">
                      Srimanikandan K
                    </h2>
                    <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-mono font-bold border border-emerald-500/40">
                      OPEN FOR IMMEDIATE HIRE
                    </span>
                  </div>
                  <p className="text-sm sm:text-base text-cyan-300 font-semibold mt-1">
                    AI Automation Engineer &bull; First Technical Hire @ Standard Roofs
                  </p>
                  <p className="text-xs sm:text-sm text-slate-400 mt-1 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-purple-400" />
                    <span>Erode, Tamil Nadu &bull; Immediate Joiner &bull; Remote / Hybrid / On-Site</span>
                  </p>
                </div>
              </div>

              {/* Instant WhatsApp Hire Action */}
              <a
                href="https://wa.me/916382121634?text=Hi%20Srimanikandan,%20I%20reviewed%20your%20portfolio%20and%20would%20like%20to%20discuss%20an%20AI%20Automation%20opportunity%20with%20you."
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-2xl bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 text-white font-black text-sm flex items-center gap-2.5 shadow-xl shadow-emerald-500/25 hover:opacity-95 hover:scale-105 transition shrink-0"
              >
                <Phone className="w-4 h-4 fill-current" />
                <span>Chat on WhatsApp (+91 6382121634)</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* BOLD DIRECT CONTACT BADGES */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 my-7">
              {/* Phone Pill */}
              <div className="p-3.5 rounded-2xl bg-white/[0.04] border border-white/[0.1] flex items-center justify-between hover:border-emerald-400/50 transition">
                <a
                  href="tel:+916382121634"
                  className="flex items-center gap-2.5 text-slate-200 hover:text-emerald-400 transition"
                >
                  <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span className="font-mono text-xs sm:text-sm font-bold">+91 63821 21634</span>
                </a>
                <button
                  onClick={handleCopyPhone}
                  className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition cursor-pointer"
                  title="Copy Phone"
                >
                  {copiedPhone ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>

              {/* Email Pill */}
              <div className="p-3.5 rounded-2xl bg-white/[0.04] border border-white/[0.1] flex items-center justify-between hover:border-cyan-400/50 transition">
                <a
                  href="mailto:srimanikandanece2000@gmail.com"
                  className="flex items-center gap-2.5 text-slate-200 hover:text-cyan-400 transition overflow-hidden"
                >
                  <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span className="font-mono text-xs sm:text-sm font-bold truncate">srimanikandanece2000@gmail.com</span>
                </a>
                <button
                  onClick={handleCopyEmail}
                  className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition cursor-pointer shrink-0 ml-1"
                  title="Copy Email"
                >
                  {copiedEmail ? <Check className="w-3.5 h-3.5 text-cyan-400" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>

              {/* LinkedIn Pill */}
              <a
                href="https://www.linkedin.com/in/srimanikandan-k-9a741620a"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-2xl bg-[#0077b5]/15 border border-[#0077b5]/35 flex items-center justify-between text-slate-200 hover:text-white hover:border-[#0077b5]/70 transition"
              >
                <div className="flex items-center gap-2.5">
                  <LinkedinIcon className="w-4 h-4 text-[#0077b5]" />
                  <span className="text-xs sm:text-sm font-bold">Connect on LinkedIn</span>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
              </a>
            </div>

            {/* Recruiter Cheat-Sheet Points */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-cyan-400">
                  <Cpu className="w-4 h-4 text-cyan-400" />
                  <span>Core Expertise</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                  Sri AI Business OS, 4-layer Zoho CRM quotation automation, Gemini AI integration, Google Ads intelligence pipelines, and Shopify theme development.
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-purple-400">
                  <ShieldCheck className="w-4 h-4 text-purple-400" />
                  <span>Verified Impact</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                  Identified ₹4,952 in wasted ad spend (97% waste rate) in 8 days. Reduced CRM quote generation to &lt;1 min with 0 calculation errors.
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-pink-400">
                  <Layers className="w-4 h-4 text-pink-400" />
                  <span>Production Stack</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                  Python, JavaScript, Next.js 15, FastAPI, Gemini AI, Zoho Deluge, Zoho CRM, Google Apps Script, Vue.js, React.js, Shopify Liquid.
                </p>
              </div>
            </div>

            {/* Bottom 4 Real Verified Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 pt-7 border-t border-white/[0.08] text-center">
              <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-cyan-500/40 transition">
                <div className="text-2xl sm:text-3xl font-heading font-black text-rose-400">
                  ₹4,952
                </div>
                <div className="text-xs text-slate-400 font-semibold mt-1">
                  Ad Waste Flagged (97%)
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-cyan-500/40 transition">
                <div className="text-2xl sm:text-3xl font-heading font-black text-cyan-400">
                  &lt; 1 Min
                </div>
                <div className="text-xs text-slate-400 font-semibold mt-1">
                  Quote Turnaround (0 Errors)
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-cyan-500/40 transition">
                <div className="text-2xl sm:text-3xl font-heading font-black text-purple-400">
                  30+ Fields
                </div>
                <div className="text-xs text-slate-400 font-semibold mt-1">
                  14+ Workflows in Zoho CRM
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-cyan-500/40 transition">
                <div className="text-2xl sm:text-3xl font-heading font-black text-emerald-400">
                  ₹0 / mo
                </div>
                <div className="text-xs text-slate-400 font-semibold mt-1">
                  AI Auditor Operating Cost
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
