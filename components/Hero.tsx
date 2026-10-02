"use client";

import React, { useState, useEffect } from "react";
import { Terminal, Download, ArrowRight, ShieldCheck, Zap, Activity, Flame, Sparkles, CheckCircle2 } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";
import FadeIn from "./FadeIn";

export default function Hero() {
  const [activeProbe, setActiveProbe] = useState<"ads" | "zoho" | "business">("ads");
  const [probeRunning, setProbeRunning] = useState(false);

  const [tickerIndex, setTickerIndex] = useState(0);
  const tickers = [
    "Crushed 30-min CRM quotes down to < 48 seconds",
    "Flagged ₹14,952 in wasted ad spend (97% burn caught)",
    "Audited 285+ live search queries daily @ ₹0/mo",
    "Engineered multi-tenant autonomous AI business systems",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setTickerIndex((prev) => (prev + 1) % tickers.length);
    }, 3200);
    return () => clearInterval(interval);
  }, [tickers.length]);

  const probeLogs = {
    ads: [
      "[06:00:02 IST] Google Ads Script API triggered via Apps Script cron",
      "[06:00:09 IST] 285+ search queries pulled into Sheets data warehouse",
      "[06:00:15 IST] Dual Gemini Flash API failover logic verified",
      "[06:00:22 IST] IDENTIFIED: ₹14,952 wasted on 14 negative keywords",
      "[07:00:00 IST] DISPATCHED: Color-coded STOP/SCALE/FIX email to leadership",
    ],
    zoho: [
      "[11:14:02 IST] Deal moved to 'Quotation Required' in Zoho CRM",
      "[11:14:05 IST] Layer 1 (Rules): 14+ CRM required fields validated",
      "[11:14:12 IST] Layer 2 (Deluge): Dynamic roofing square-footage computed",
      "[11:14:20 IST] Layer 3 (JS): Real-time Cloudinary color image attached",
      "[11:14:48 IST] Layer 4 (Writer): Branded proposal PDF compiled in 48s!",
    ],
    business: [
      "[14:20:01 IST] FastAPI Gateway: Inbound business message received",
      "[14:20:03 IST] Gemini Flash parser: Extracted deliverables & urgency (99.4%)",
      "[14:20:04 IST] Multi-tenant isolation: Tenant -> Workspace -> Project",
      "[14:20:05 IST] Gated in Human-in-the-Loop review queue",
      "[14:20:06 IST] Delivered cryptographic HMAC-SHA256 webhook to client",
    ],
  };

  const handleRunProbe = (probe: "ads" | "zoho" | "business") => {
    setActiveProbe(probe);
    setProbeRunning(true);
    setTimeout(() => {
      setProbeRunning(false);
    }, 500);
  };

  return (
    <section className="relative min-h-[94vh] flex items-center pt-32 pb-20 bg-[#08091a] text-white overflow-hidden">
      {/* Dynamic Cosmic Aurora Orbs */}
      <div className="absolute top-10 left-1/4 -translate-x-1/2 w-[750px] h-[500px] bg-gradient-to-r from-violet-600/25 via-indigo-600/20 to-transparent blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute top-20 right-10 w-[600px] h-[450px] bg-gradient-to-l from-cyan-500/25 via-teal-500/20 to-transparent blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 left-1/3 w-[500px] h-[350px] bg-gradient-to-t from-fuchsia-600/20 via-pink-600/15 to-transparent blur-[180px] rounded-full pointer-events-none" />
      <div className="absolute inset-0 bg-grid-cyber opacity-45 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Bio & Value Proposition */}
          <div className="lg:col-span-7 space-y-6">
            <FadeIn>
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-violet-500/40 bg-gradient-to-r from-violet-950/60 to-indigo-950/60 text-violet-300 text-xs font-semibold backdrop-blur-xl shadow-lg shadow-violet-950/50">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-white font-bold">Tech Lead &bull; First Technical Hire @ Standard Roofs</span>
              </div>
            </FadeIn>

            <FadeIn>
              <div className="space-y-3">
                <h1 className="text-4xl sm:text-6xl font-extrabold tracking-[-0.03em] text-white leading-[1.06]">
                  Building Autonomous{" "}
                  <span className="bg-gradient-to-r from-cyan-300 via-violet-300 to-fuchsia-400 bg-clip-text text-transparent">
                    AI Systems &amp; Pipelines
                  </span>{" "}
                  That Move Real Revenue.
                </h1>
                
                {/* Dynamic animated ticker */}
                <div className="h-8 flex items-center gap-2 text-xs sm:text-sm text-cyan-300 font-medium">
                  <Sparkles className="w-4 h-4 text-cyan-400 shrink-0 animate-spin" />
                  <span className="text-slate-400">Proven ROI:</span>
                  <span className="font-bold text-white transition-all duration-300 underline decoration-cyan-400/50 underline-offset-4">
                    {tickers[tickerIndex]}
                  </span>
                </div>
              </div>
            </FadeIn>

            <FadeIn>
              <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed font-normal">
                Zero wrapper demos, zero fluff. I architect production AI pipelines that eliminate operational drag: 
                obliterated <strong className="text-rose-400 font-bold">₹14,952 in wasted ad spend</strong>, crushed 30-minute CRM quotation workflows down to <strong className="text-emerald-400 font-bold">&lt; 48 seconds</strong>, and run business intelligence pipelines on a <strong className="text-cyan-300 font-bold">₹0/mo cloud stack</strong>.
              </p>
            </FadeIn>

            {/* Vibrant Bento Quick Metrics with Glowing Tops */}
            <FadeIn>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                <div className="p-4 rounded-3xl vibrant-card relative overflow-hidden group">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-rose-500 to-amber-500" />
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xl sm:text-2xl font-black text-rose-400 font-mono tracking-tight">₹14,952</span>
                    <Flame className="w-4 h-4 text-rose-400" />
                  </div>
                  <span className="text-xs text-white font-bold block">Ad Waste Flagged</span>
                  <span className="text-[11px] text-slate-400">97% burn caught</span>
                </div>

                <div className="p-4 rounded-3xl vibrant-card relative overflow-hidden group">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 to-teal-400" />
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xl sm:text-2xl font-black text-cyan-400 font-mono tracking-tight">&lt; 1 min</span>
                    <Zap className="w-4 h-4 text-cyan-400" />
                  </div>
                  <span className="text-xs text-white font-bold block">Quote Creation</span>
                  <span className="text-[11px] text-slate-400">30+ CRM fields synced</span>
                </div>

                <div className="p-4 rounded-3xl vibrant-card relative overflow-hidden group">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-violet-500 to-indigo-500" />
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xl sm:text-2xl font-black text-indigo-300 font-mono tracking-tight">285+</span>
                    <Activity className="w-4 h-4 text-indigo-400" />
                  </div>
                  <span className="text-xs text-white font-bold block">Daily Queries</span>
                  <span className="text-[11px] text-slate-400">Audited at 6:00 AM</span>
                </div>

                <div className="p-4 rounded-3xl vibrant-card relative overflow-hidden group">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-400 to-teal-500" />
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xl sm:text-2xl font-black text-emerald-400 font-mono tracking-tight">₹0 / mo</span>
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  </div>
                  <span className="text-xs text-white font-bold block">Operating Cost</span>
                  <span className="text-[11px] text-slate-400">Dual-key failover</span>
                </div>
              </div>
            </FadeIn>

            {/* Action Buttons */}
            <FadeIn>
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href="#command-center"
                  className="px-6 py-3.5 rounded-full bg-gradient-to-r from-cyan-400 via-teal-400 to-indigo-500 hover:opacity-95 text-slate-950 font-black text-xs shadow-xl shadow-cyan-500/30 transition-all flex items-center gap-2 group cursor-pointer"
                >
                  <Terminal className="w-4 h-4 text-slate-950" />
                  <span>Launch Systems HUD</span>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-950 group-hover:translate-x-1 transition-transform" />
                </a>

                <a
                  href="/Srimanikandan_Resume_Professional.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3.5 rounded-full border border-violet-500/30 hover:border-violet-500/60 bg-violet-950/30 text-white font-bold text-xs transition flex items-center gap-2 shadow-md shadow-violet-950/40"
                >
                  <Download className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Resume (PDF)</span>
                </a>

                <a
                  href="https://github.com/Srimani26"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-full border border-white/10 hover:border-violet-500/50 bg-white/[0.04] text-slate-400 hover:text-white transition shadow-sm"
                  title="GitHub Profile"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>

                <a
                  href="https://www.linkedin.com/in/srimanikandan-t-942693246/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-full border border-white/10 hover:border-violet-500/50 bg-white/[0.04] text-slate-400 hover:text-white transition shadow-sm"
                  title="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
              </div>
            </FadeIn>
          </div>

          {/* Right Column: Live Interactive Telemetry Terminal HUD */}
          <div className="lg:col-span-5">
            <FadeIn>
              <div className="rounded-3xl border border-violet-500/30 bg-[#0c0e29]/95 backdrop-blur-2xl p-6 shadow-2xl shadow-violet-950/70 relative overflow-hidden">
                {/* Terminal Header */}
                <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-rose-500" />
                    <span className="w-3 h-3 rounded-full bg-amber-500" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500" />
                    <span className="ml-2 font-mono text-xs text-slate-300 font-semibold">
                      sri@ai-telemetry-hud:~
                    </span>
                  </div>
                  <span className="font-mono text-[10px] text-emerald-400 font-bold bg-emerald-950/70 px-2.5 py-0.5 rounded-full border border-emerald-500/40 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    PROD ONLINE
                  </span>
                </div>

                {/* Subtitle / Telemetry Info */}
                <div className="space-y-1 mb-4">
                  <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                    <span>HOST: STANDARD_ROOFS_CLOUD</span>
                    <span className="text-emerald-400 font-bold">UPTIME: 99.98%</span>
                  </div>
                  <div className="text-xs text-cyan-300 flex items-center gap-1.5 font-medium">
                    <Activity className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
                    <span>Select real-time probe to execute:</span>
                  </div>
                </div>

                {/* Interactive Probe Buttons */}
                <div className="grid grid-cols-3 gap-2 mb-4">
                  <button
                    onClick={() => handleRunProbe("ads")}
                    className={`py-2 px-2.5 rounded-xl text-xs font-bold transition flex items-center justify-center gap-1.5 cursor-pointer ${
                      activeProbe === "ads"
                        ? "bg-gradient-to-r from-rose-500 to-amber-500 text-white shadow-lg shadow-rose-500/30"
                        : "bg-white/[0.04] text-slate-400 hover:text-white border border-white/5"
                    }`}
                  >
                    <Flame className="w-3.5 h-3.5" />
                    <span>Ads Probe</span>
                  </button>

                  <button
                    onClick={() => handleRunProbe("zoho")}
                    className={`py-2 px-2.5 rounded-xl text-xs font-bold transition flex items-center justify-center gap-1.5 cursor-pointer ${
                      activeProbe === "zoho"
                        ? "bg-gradient-to-r from-cyan-400 to-teal-400 text-slate-950 shadow-lg shadow-cyan-400/30"
                        : "bg-white/[0.04] text-slate-400 hover:text-white border border-white/5"
                    }`}
                  >
                    <Zap className="w-3.5 h-3.5" />
                    <span>Zoho 4-Layer</span>
                  </button>

                  <button
                    onClick={() => handleRunProbe("business")}
                    className={`py-2 px-2.5 rounded-xl text-xs font-bold transition flex items-center justify-center gap-1.5 cursor-pointer ${
                      activeProbe === "business"
                        ? "bg-gradient-to-r from-violet-500 to-indigo-500 text-white shadow-lg shadow-violet-500/30"
                        : "bg-white/[0.04] text-slate-400 hover:text-white border border-white/5"
                    }`}
                  >
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>Business OS</span>
                  </button>
                </div>

                {/* Terminal streaming display */}
                <div className="bg-[#050616] rounded-2xl p-4 font-mono text-xs space-y-1.5 border border-white/5 min-h-[190px] shadow-inner">
                  <div className="text-[10px] text-slate-500 mb-2 flex items-center justify-between border-b border-white/5 pb-1">
                    <span>// RUNNING: {activeProbe.toUpperCase()}_ENGINE_STREAM</span>
                    <span className="text-cyan-400 font-bold">{probeRunning ? "STREAMING..." : "COMPLETED (0.04s)"}</span>
                  </div>
                  {probeLogs[activeProbe].map((line, idx) => (
                    <div
                      key={idx}
                      className={`leading-relaxed ${
                        line.includes("IDENTIFIED") || line.includes("wasted")
                          ? "text-rose-400 font-bold"
                          : line.includes("DISPATCHED") || line.includes("compiled") || line.includes("Delivered")
                          ? "text-emerald-400 font-bold"
                          : "text-slate-300"
                      }`}
                    >
                      <span className="text-violet-400 mr-1.5">&gt;</span>
                      {line}
                    </div>
                  ))}
                </div>

                {/* Live stream ticker */}
                <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
                  <span className="flex items-center gap-1.5 text-cyan-300">
                    <Activity className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
                    Live Cron: Daily 6:00 AM IST
                  </span>
                  <span className="text-emerald-400 font-bold font-mono">100% Autonomous</span>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
