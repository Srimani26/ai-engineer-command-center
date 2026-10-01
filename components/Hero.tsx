"use client";

import React from "react";
import { Terminal, Download, ArrowRight, ExternalLink, ShieldCheck, Zap, Activity } from "lucide-react";
import { GithubIcon } from "./Icons";
import FadeIn from "./FadeIn";

export default function Hero() {
  const liveSystems = [
    {
      name: "Zoho CRM Quotation Engine",
      sub: "4-Layer Architecture (< 1 min quotes)",
      status: "LIVE (95%)",
      color: "emerald",
    },
    {
      name: "Google Ads AI Auditor (v5.0)",
      sub: "285+ Daily Queries • ₹4,952 Waste Detected",
      status: "RUNNING 7:00 AM",
      color: "cyan",
    },
    {
      name: "Sri AI Business OS",
      sub: "Multi-Tenant Enterprise Operating System",
      status: "ONLINE (NEON DB)",
      color: "indigo",
    },
    {
      name: "Centralized MCP Knowledge Hub",
      sub: "Cloud-hosted MCP • OAuth 2.1 • GitHub Sync",
      status: "SYNCED",
      color: "cyan",
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
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 text-xs font-mono font-semibold backdrop-blur">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                <span>AI AUTOMATION & SYSTEMS ENGINEER &bull; ERODE, TN</span>
              </div>
            </FadeIn>

            <FadeIn>
              <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-[1.08]">
                Building Production{" "}
                <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-indigo-400 bg-clip-text text-transparent">
                  AI Systems & Autonomous
                </span>{" "}
                Business Pipelines
              </h1>
            </FadeIn>

            <FadeIn>
              <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
                First technical hire & tech lead at Standard Roofs. Architected a 4-layer Zoho CRM
                quotation engine cutting creation to &lt; 1 minute, built a zero-cost daily Google Ads AI
                auditor flagging ₹4,952 in wasted spend, and engineered enterprise multi-tenant AI business operating systems.
              </p>
            </FadeIn>

            {/* Quick Metrics Badges */}
            <FadeIn>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                <div className="p-3 rounded-2xl bg-[#091020] border border-cyan-500/20">
                  <span className="block text-2xl font-black text-cyan-400">₹4,952</span>
                  <span className="text-[11px] text-slate-400 font-medium">Ad Waste Flagged (97%)</span>
                </div>
                <div className="p-3 rounded-2xl bg-[#091020] border border-cyan-500/20">
                  <span className="block text-2xl font-black text-cyan-400">&lt; 1 min</span>
                  <span className="text-[11px] text-slate-400 font-medium">Quote Time (30+ Fields)</span>
                </div>
                <div className="p-3 rounded-2xl bg-[#091020] border border-cyan-500/20">
                  <span className="block text-2xl font-black text-cyan-400">285+</span>
                  <span className="text-[11px] text-slate-400 font-medium">Daily Queries Audited</span>
                </div>
                <div className="p-3 rounded-2xl bg-[#091020] border border-cyan-500/20">
                  <span className="block text-2xl font-black text-emerald-400">₹0 / mo</span>
                  <span className="text-[11px] text-slate-400 font-medium">Operating Cost</span>
                </div>
              </div>
            </FadeIn>

            {/* Action Buttons */}
            <FadeIn>
              <div className="flex flex-wrap items-center gap-4 pt-3">
                <a
                  href="#command-center"
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white font-bold text-xs shadow-xl shadow-cyan-500/25 transition flex items-center gap-2 group cursor-pointer"
                >
                  <span>Launch Systems HUD</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>

                <a
                  href="/Srimanikandan_Resume_Professional.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 rounded-xl border border-white/10 bg-[#0d1424]/80 hover:bg-[#121c32] text-slate-200 font-semibold text-xs transition flex items-center gap-2"
                >
                  <Download className="w-4 h-4 text-cyan-400" />
                  <span>Resume (PDF)</span>
                </a>

                <a
                  href="https://github.com/Srimani26"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl border border-white/10 bg-[#0d1424]/80 hover:bg-[#121c32] text-slate-400 hover:text-white transition"
                  title="GitHub Profile"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
              </div>
            </FadeIn>
          </div>

          {/* Right Column: Live Telemetry Terminal HUD */}
          <div className="lg:col-span-5">
            <FadeIn>
              <div className="rounded-3xl border border-cyan-500/30 bg-[#080d1a]/90 backdrop-blur-2xl p-6 shadow-2xl shadow-cyan-950/40 relative overflow-hidden">
                {/* Terminal Header */}
                <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-5">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-rose-500/80" />
                    <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                    <span className="ml-2 font-mono text-xs text-slate-400 font-semibold">
                      sri@ai-command-hud:~
                    </span>
                  </div>
                  <span className="font-mono text-[10px] text-cyan-400 font-bold bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-500/30">
                    STATUS: OK
                  </span>
                </div>

                {/* Subtitle / System info */}
                <div className="space-y-1 mb-5">
                  <div className="flex items-center justify-between text-[11px] font-mono text-slate-400">
                    <span>HOST: STANDARD_ROOFS_CLOUD</span>
                    <span className="text-emerald-400">UPTIME: 99.98%</span>
                  </div>
                  <div className="text-[11px] font-mono text-slate-500">
                    AI PIPELINES ENGINE // DUAL GEMINI RETRY LOGIC
                  </div>
                </div>

                {/* System cards */}
                <div className="space-y-3">
                  {liveSystems.map((sys) => (
                    <div
                      key={sys.name}
                      className="p-3 rounded-xl border border-white/5 bg-[#050812] hover:border-cyan-500/30 transition group"
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
                    Live Cron: Daily 6:00 AM IST
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