"use client";

import React from "react";
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
  TrendingDown,
  Clock,
  Zap,
} from "lucide-react";
import { LinkedinIcon } from "./Icons";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center pt-32 pb-16 px-4 md:px-8 max-w-6xl mx-auto z-10">
      {/* Top Status Pill */}
      <div className="flex items-center justify-center mb-6">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 text-xs font-mono font-semibold backdrop-blur-xl shadow-lg shadow-cyan-500/10">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <span>PRODUCTION-PROVEN AI AUTOMATION ENGINEER</span>
        </div>
      </div>

      {/* Main Headline */}
      <div className="text-center space-y-4 max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-heading font-black tracking-tight text-white leading-[1.1]">
          Architecting <span className="text-gradient-vibrant">Critical Business AI</span> & Automation Engines.
        </h1>

        <p className="text-slate-300 text-sm sm:text-lg max-w-3xl mx-auto leading-relaxed font-normal">
          AI Automation Engineer with hands-on experience building business-critical automation systems. Architected a full <strong>4-layer Zoho CRM Quotation Automation System</strong> (&lt;1 min turnaround, 0 manual errors), engineered an <strong>AI-Powered Google Ads Auditor v5.0</strong> flagging ₹4,952 in wasted ad spend in 8 days at ₹0 operating cost, and leading front-end development for a live Shopify storefront.
        </p>

        {/* CTA Actions */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-3">
          <a
            href="#systems"
            className="px-6 py-3 rounded-full bg-gradient-to-r from-cyan-400 via-violet-500 to-fuchsia-500 text-white font-bold text-sm shadow-xl shadow-fuchsia-500/20 hover:opacity-95 hover:scale-[1.02] transition-all flex items-center gap-2"
          >
            <span>Explore Real Production Systems</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <a
            href="/Srimanikandan_Resume_Professional.pdf"
            download="Srimanikandan_Resume_Professional.pdf"
            className="px-6 py-3 rounded-full bg-slate-900/80 hover:bg-slate-800/80 border border-white/15 text-slate-200 font-semibold text-sm transition-all flex items-center gap-2 backdrop-blur-xl hover:border-cyan-400/50"
          >
            <Download className="w-4 h-4 text-cyan-400" />
            <span>Download Official Resume (PDF)</span>
          </a>
        </div>
      </div>

      {/* Recruiter At-A-Glance Card */}
      <div className="mt-14 max-w-4xl mx-auto">
        <div className="chromatic-border-box">
          <div className="chromatic-border-inner p-6 sm:p-8">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-6 border-b border-white/[0.08]">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-cyan-400 via-violet-500 to-fuchsia-500 p-0.5 shadow-xl shadow-cyan-500/20">
                  <div className="w-full h-full rounded-[14px] bg-[#06061a] flex items-center justify-center font-mono font-black text-xl text-white">
                    SK
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h2 className="font-heading text-xl sm:text-2xl font-bold text-white">
                      Srimanikandan K
                    </h2>
                    <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[10px] font-mono font-bold border border-emerald-500/30">
                      VERIFIED ENGINEER
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-cyan-300 font-medium">
                    AI Automation Engineer &bull; Standard Roofs
                  </p>
                  <p className="text-[11px] text-slate-400 mt-0.5">
                    Location: Erode, Tamil Nadu &bull; Immediate Availability
                  </p>
                </div>
              </div>

              {/* Direct Recruiter Contact Buttons */}
              <div className="flex flex-wrap items-center gap-2">
                <a
                  href="https://wa.me/916382121634?text=Hi%20Srimanikandan,%20let's%20discuss%20an%20AI%20Automation%20role."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-1.5 rounded-lg bg-emerald-500/20 hover:bg-emerald-500/30 border border-emerald-500/30 text-emerald-300 text-xs font-semibold flex items-center gap-1.5 transition"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>+91 6382121634</span>
                </a>
                <a
                  href="mailto:srimanikandanece2000@gmail.com"
                  className="px-3.5 py-1.5 rounded-lg bg-cyan-500/20 hover:bg-cyan-500/30 border border-cyan-500/30 text-cyan-300 text-xs font-semibold flex items-center gap-1.5 transition"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>srimanikandanece2000@gmail.com</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/srimanikandan-k-9a741620a"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-slate-200 transition"
                  title="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Recruiter Cheat-Sheet Points */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
              <div className="space-y-1.5">
                <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-cyan-400">
                  <Cpu className="w-4 h-4 text-cyan-400" />
                  <span>Core Expertise</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  End-to-end Zoho CRM quotation automation, Gemini AI integration, Google Ads intelligence scripts, and Shopify theme development.
                </p>
              </div>

              <div className="space-y-1.5">
                <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-purple-400">
                  <ShieldCheck className="w-4 h-4 text-purple-400" />
                  <span>Verified Impact</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Flagged ₹4,952 wasted ad spend (97% waste rate) in 8 days. Reduced quote creation from multi-step manual process to &lt;1 min with 0 errors.
                </p>
              </div>

              <div className="space-y-1.5">
                <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-pink-400">
                  <Layers className="w-4 h-4 text-pink-400" />
                  <span>Production Stack</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Zoho Deluge, Google Apps Script, Gemini AI, Zoho CRM (Enterprise), Zoho Writer API, Cloudinary, Vue.js, React.js, Python, JavaScript.
                </p>
              </div>
            </div>

            {/* Bottom 4 Real Verified Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6 pt-6 border-t border-white/[0.08] text-center">
              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                <div className="text-2xl sm:text-3xl font-heading font-black text-rose-400">
                  ₹4,952
                </div>
                <div className="text-[11px] text-slate-400 font-medium mt-0.5">
                  Wasted Spend Flagged (97%)
                </div>
              </div>

              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                <div className="text-2xl sm:text-3xl font-heading font-black text-cyan-400">
                  &lt; 1 Min
                </div>
                <div className="text-[11px] text-slate-400 font-medium mt-0.5">
                  Quote Generation (0 Errors)
                </div>
              </div>

              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                <div className="text-2xl sm:text-3xl font-heading font-black text-purple-400">
                  30+ Fields
                </div>
                <div className="text-[11px] text-slate-400 font-medium mt-0.5">
                  14+ Workflows in Zoho CRM
                </div>
              </div>

              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                <div className="text-2xl sm:text-3xl font-heading font-black text-emerald-400">
                  ₹0 / mo
                </div>
                <div className="text-[11px] text-slate-400 font-medium mt-0.5">
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
