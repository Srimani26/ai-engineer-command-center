"use client";

import React from "react";
import {
  Download,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Terminal,
  Zap,
  CheckCircle2,
  Mail,
  Phone,
  Layers,
  Award,
} from "lucide-react";
import { LinkedinIcon, GithubIcon } from "./Icons";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 px-4 md:px-8 max-w-6xl mx-auto z-10">
      {/* Top Status Pill */}
      <div className="flex justify-center mb-6">
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 border border-cyan-500/30 backdrop-blur-xl shadow-lg shadow-cyan-500/10">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <span className="text-[11px] font-mono uppercase tracking-wider text-cyan-300 font-semibold">
            Tech Lead @ Standard Roofs &bull; Available for Strategic AI & Systems Roles
          </span>
        </div>
      </div>

      {/* Main Headline */}
      <div className="text-center max-w-4xl mx-auto space-y-5">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-heading font-black tracking-tight leading-[1.08] text-white">
          Architecting{" "}
          <span className="text-gradient-vibrant">Autonomous AI</span> Systems
          That Scale Enterprise Operations.
        </h1>
        <p className="text-base sm:text-xl text-slate-300 font-normal leading-relaxed max-w-3xl mx-auto">
          I build high-throughput multi-agent swarms, self-correcting prompt pipelines, and mathematical CRM quotation engines that replace manual enterprise friction with autonomous intelligence.
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

      {/* HR & Recruiter "At-A-Glance" Instant Impression Card */}
      <div className="mt-14 max-w-4xl mx-auto">
        <div className="chromatic-border-box">
          <div className="chromatic-border-inner p-6 sm:p-8">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-6 border-b border-white/[0.08]">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-cyan-400 via-violet-500 to-fuchsia-500 p-0.5 shadow-xl shadow-cyan-500/20">
                  <div className="w-full h-full rounded-[14px] bg-[#06061a] flex items-center justify-center font-mono font-black text-xl text-white">
                    ST
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h2 className="font-heading text-xl sm:text-2xl font-bold text-white">
                      Srimanikandan T
                    </h2>
                    <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[10px] font-mono font-bold border border-emerald-500/30">
                      VERIFIED LEAD
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-cyan-300 font-medium">
                    First Technical Hire & Tech Lead @ Standard Roofs
                  </p>
                  <p className="text-[11px] text-slate-400 mt-0.5">
                    Location: Tamil Nadu / Bangalore &bull; Open to Worldwide Remote & Relocation
                  </p>
                </div>
              </div>

              {/* Direct Recruiter Contact Buttons */}
              <div className="flex flex-wrap items-center gap-2">
                <a
                  href="https://wa.me/919361626177?text=Hi%20Srimanikandan,%20let's%20discuss%20an%20AI%20Systems%20role."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-1.5 rounded-lg bg-emerald-500/20 hover:bg-emerald-500/30 border border-emerald-500/30 text-emerald-300 text-xs font-semibold flex items-center gap-1.5 transition"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>WhatsApp (+91 9361626177)</span>
                </a>
                <a
                  href="mailto:srimanikandan.swe@gmail.com"
                  className="px-3.5 py-1.5 rounded-lg bg-cyan-500/20 hover:bg-cyan-500/30 border border-cyan-500/30 text-cyan-300 text-xs font-semibold flex items-center gap-1.5 transition"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>srimanikandan.swe@gmail.com</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/srimanikandan-t-swe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-slate-200 transition"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Recruiter Cheat-Sheet Points */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
              <div className="space-y-1.5">
                <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-cyan-400">
                  <Award className="w-4 h-4 text-cyan-400" />
                  <span>Primary Superpower</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Autonomous Multi-Agent AI Swarms, Self-Correcting LLM Prompt Pipelines, and Enterprise CRM Mathematical Engines.
                </p>
              </div>

              <div className="space-y-1.5">
                <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-purple-400">
                  <ShieldCheck className="w-4 h-4 text-purple-400" />
                  <span>Verified Track Record</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Engineered 4-layer quotation engine handling multi-crore roofing bids. Saved $120K+ in SaaS overhead at Standard Roofs.
                </p>
              </div>

              <div className="space-y-1.5">
                <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-pink-400">
                  <Layers className="w-4 h-4 text-pink-400" />
                  <span>Core Production Stack</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Gemini API, Claude, OpenAI, Python, FastAPI, Next.js (App Router), TypeScript, Zoho Deluge, Docker, PostgreSQL.
                </p>
              </div>
            </div>

            {/* Bottom 4 Enterprise Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6 pt-6 border-t border-white/[0.08] text-center">
              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                <div className="text-2xl sm:text-3xl font-heading font-black text-cyan-400">
                  $120K+
                </div>
                <div className="text-[11px] text-slate-400 font-medium mt-0.5">
                  Commercial SaaS Saved
                </div>
              </div>

              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                <div className="text-2xl sm:text-3xl font-heading font-black text-purple-400">
                  100%
                </div>
                <div className="text-[11px] text-slate-400 font-medium mt-0.5">
                  Production Delivery Rate
                </div>
              </div>

              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                <div className="text-2xl sm:text-3xl font-heading font-black text-pink-400">
                  4-Layer
                </div>
                <div className="text-[11px] text-slate-400 font-medium mt-0.5">
                  Quotation Engine Math
                </div>
              </div>

              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                <div className="text-2xl sm:text-3xl font-heading font-black text-emerald-400">
                  &lt;2.1s
                </div>
                <div className="text-[11px] text-slate-400 font-medium mt-0.5">
                  Agent Latency Response
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
