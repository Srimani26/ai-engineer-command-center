"use client";

import React from "react";
import { Terminal, Download, ArrowRight, ExternalLink, ShieldCheck, Zap, Activity, Flame } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";
import FadeIn from "./FadeIn";

export default function Hero() {
  const liveSystems = [
    {
      name: "Zoho CRM Quotation Engine",
      sub: "4-Layer Architecture • Sub-1m Quotes (30+ Fields)",
      status: "LIVE IN PROD (95%)",
      color: "emerald",
    },
    {
      name: "Google Ads AI Auditor (v5.0)",
      sub: "285+ Daily Queries • ₹14,952 Waste Obliterated",
      status: "RUNNING 6:00 AM",
      color: "cyan",
    },
    {
      name: "Sri AI Business OS",
      sub: "Multi-Tenant Enterprise Operating System",
      status: "ONLINE (NEON DB)",
      color: "indigo",
    },
  ];

  return (
    <section className="relative min-h-[92vh] flex items-center pt-28 pb-16 bg-[#050816] text-white overflow-hidden">
      {/* Background Gradients & Grid */}
      <div className="absolute inset-0 bg-grid-cyber opacity-35 pointer-events-none" />
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 w-[700px] h-[400px] bg-cyan-600/12 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[300px] bg-indigo-600/15 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Bio & Value Proposition */}
          <div className="lg:col-span-7 space-y-6">
            <FadeIn>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 text-xs font-mono font-semibold backdrop-blur shadow-sm shadow-cyan-500/20">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                <span>TECH LEAD &amp; AI SYSTEMS BUILDER &bull; ERODE, TN</span>
              </div>
            </FadeIn>

            <FadeIn>
              <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white leading-[1.06]">
                I Ship Autonomous{" "}
                <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-indigo-400 bg-clip-text text-transparent">
                  AI Pipelines &amp; Engines
                </span>{" "}
                That Print Real ROI
              </h1>
            </FadeIn>

            <FadeIn>
              <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
                First technical hire &amp; tech lead @ <strong className="text-white font-semibold">Standard Roofs</strong>. 
                Zero corporate fluff — I build production systems that actually move the needle: 
                flagged <span className="text-rose-400 font-bold">₹14,952 in wasted ad spend</span>, crushed 30-min CRM quote creation down to <span className="text-emerald-400 font-bold">&lt; 1 minute</span>, and run critical workflows on a <span className="text-cyan-300 font-bold">₹0/mo cloud stack</span>.
              </p>
            </FadeIn>

            {/* Quick Metrics Badges */}
            <FadeIn>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                <div className="p-3.5 rounded-2xl bg-[#091020]/90 border border-cyan-500/20 hover:border-cyan-500/40 transition shadow-lg">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-2xl font-black text-rose-400">₹14,952</span>
                    <Flame className="w-4 h-4 text-rose-400" />
                  </div>
                  <span className="text-[11px] text-slate-300 font-semibold block">Ad Waste Flagged</span>
                  <span className="text-[10px] text-slate-400 font-mono">97% burn rate caught</span>
                </div>

                <div className="p-3.5 rounded-2xl bg-[#091020]/90 border border-cyan-500/20 hover:border-cyan-500/40 transition shadow-lg">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-2xl font-black text-cyan-400">&lt; 1 min</span>
                    <Zap className="w-4 h-4 text-cyan-400" />
                  </div>
                  <span className="text-[11px] text-slate-300 font-semibold block">Quote Creation</span>
                  <span className="text-[10px] text-slate-400 font-mono">30+ CRM fields synced</span>
                </div>

                <div className="p-3.5 rounded-2xl bg-[#091020]/90 border border-cyan-500/20 hover:border-cyan-500/40 transition shadow-lg">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-2xl font-black text-indigo-300">285+</span>
                    <Activity className="w-4 h-4 text-indigo-400" />
                  </div>
                  <span className="text-[11px] text-slate-300 font-semibold block">Daily Queries</span>
                  <span className="text-[10px] text-slate-400 font-mono">Audited at 6:00 AM</span>
                </div>

                <div className="p-3.5 rounded-2xl bg-[#091020]/90 border border-cyan-500/20 hover:border-cyan-500/40 transition shadow-lg">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-2xl font-black text-emerald-400">₹0 / mo</span>
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  </div>
                  <span className="text-[11px] text-slate-300 font-semibold block">Operating Cost</span>
                  <span className="text-[10px] text-slate-400 font-mono">Free-tier genius</span>
                </div>
              </div>
            </FadeIn>

            {/* Action Buttons */}
            <FadeIn>
              <div className="flex flex-wrap items-center gap-4 pt-3">
                <a
                  href="#command-center"
                  className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-teal-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-slate-950 font-black text-xs shadow-xl shadow-cyan-500/25 transition flex items-center gap-2 group cursor-pointer tracking-wider uppercase"
                >
                  <span>Launch Live Telemetry HUD</span>
                  <ArrowRight className="w-4 h-4 text-slate-950 group-hover:translate-x-1 transition-transform" />
                </a>

                <a
                  href="/Srimanikandan_Resume_Professional.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3.5 rounded-xl border border-white/10 bg-[#0d1424]/90 hover:bg-[#121c32] text-slate-200 font-bold text-xs transition flex items-center gap-2 shadow-md"
                >
                  <Download className="w-4 h-4 text-cyan-400" />
                  <span>Resume (PDF)</span>
                </a>

                <a
                  href="https://github.com/Srimani26"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-xl border border-white/10 bg-[#0d1424]/90 hover:bg-[#121c32] text-slate-400 hover:text-white transition shadow-md"
                  title="GitHub Profile"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>

                <a
                  href="https://www.linkedin.com/in/srimanikandan-t-942693246/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-xl border border-white/10 bg-[#0d1424]/90 hover:bg-[#121c32] text-slate-400 hover:text-white transition shadow-md"
                  title="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
              </div>
            </FadeIn>
          </div>

          {/* Right Column: Live Telemetry Terminal HUD */}
          <div className="lg:col-span-5">
            <FadeIn>
              <div className="rounded-3xl border border-cyan-500/30 bg-[#080d1a]/95 backdrop-blur-2xl p-6 shadow-2xl shadow-cyan-950/50 relative overflow-hidden">
                {/* Terminal Header */}
                <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-5">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-rose-500/80" />
                    <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                    <span className="ml-2 font-mono text-xs text-slate-400 font-bold">
                      sri@ai-command-hud:~
                    </span>
                  </div>
                  <span className="font-mono text-[10px] text-emerald-400 font-black bg-emerald-950/60 px-2.5 py-0.5 rounded-full border border-emerald-500/30 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    LIVE TELEMETRY OK
                  </span>
                </div>

                {/* Subtitle / System info */}
                <div className="space-y-1 mb-5">
                  <div className="flex items-center justify-between text-[11px] font-mono text-slate-400">
                    <span>HOST: STANDARD_ROOFS_CLOUD</span>
                    <span className="text-emerald-400 font-bold">UPTIME: 99.98%</span>
                  </div>
                  <div className="text-[11px] font-mono text-cyan-400/80">
                    AI PIPELINES ENGINE // DUAL GEMINI RETRY &amp; FAILOVER
                  </div>
                </div>

                {/* System cards */}
                <div className="space-y-3">
                  {liveSystems.map((sys) => (
                    <div
                      key={sys.name}
                      className="p-3.5 rounded-2xl border border-white/5 bg-[#050812] hover:border-cyan-500/40 transition-all group"
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs font-bold text-white group-hover:text-cyan-300 transition-colors">
                          {sys.name}
                        </span>
                        <span className="text-[10px] font-mono font-bold text-emerald-400 flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                          {sys.status}
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-400 font-mono">
                        {sys.sub}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Live stream ticker */}
                <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span className="flex items-center gap-1.5 text-cyan-300">
                    <Activity className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
                    Daily Cron: 6:00 AM IST &bull; Zero Manual Effort
                  </span>
                  <span className="text-slate-500">v5.0 Active</span>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
