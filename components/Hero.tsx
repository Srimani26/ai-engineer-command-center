"use client";

import React, { useState, useEffect } from "react";
import { Terminal, Download, ArrowRight, ShieldCheck, Zap, Activity, Flame, Sparkles, CheckCircle2, Play } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";
import FadeIn from "./FadeIn";

export default function Hero() {
  const [activeProbe, setActiveProbe] = useState<"ads" | "zoho" | "business">("ads");
  const [probeRunning, setProbeRunning] = useState(false);

  const [tickerIndex, setTickerIndex] = useState(0);
  const tickers = [
    "Crushed 30-min CRM quotes down to < 48 seconds",
    "Flagged ₹14,952 in wasted ad spend (97% burn)",
    "Audited 285+ live search queries daily @ ₹0/mo",
    "Engineered multi-tenant autonomous AI systems",
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
    <section className="relative min-h-[92vh] flex items-center pt-32 pb-16 bg-[#030712] text-white overflow-hidden">
      {/* Background Gradients & Grid */}
      <div className="absolute inset-0 bg-grid-cyber opacity-35 pointer-events-none" />
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 w-[700px] h-[450px] bg-cyan-500/10 blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[550px] h-[350px] bg-indigo-600/15 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Bio & Value Proposition */}
          <div className="lg:col-span-7 space-y-6">
            <FadeIn>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/10 bg-white/[0.03] text-slate-300 text-xs font-medium backdrop-blur-xl shadow-sm">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-slate-200">Tech Lead &bull; First Technical Hire @ Standard Roofs</span>
              </div>
            </FadeIn>

            <FadeIn>
              <div className="space-y-3">
                <h1 className="text-4xl sm:text-6xl font-extrabold tracking-[-0.03em] text-white leading-[1.08]">
                  Building autonomous{" "}
                  <span className="bg-gradient-to-r from-cyan-300 via-teal-200 to-indigo-300 bg-clip-text text-transparent">
                    AI systems &amp; pipelines
                  </span>{" "}
                  that move real revenue.
                </h1>
                
                {/* Dynamic animated ticker */}
                <div className="h-7 flex items-center gap-2 text-xs sm:text-sm text-cyan-300">
                  <Sparkles className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span className="text-slate-400 font-normal">Proven impact:</span>
                  <span className="font-semibold text-white transition-all duration-300 underline decoration-cyan-500/40 underline-offset-4">
                    {tickers[tickerIndex]}
                  </span>
                </div>
              </div>
            </FadeIn>

            <FadeIn>
              <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed font-normal">
                I design and ship production-grade AI automation that eliminates operational drag: 
                obliterated <strong className="text-rose-400 font-semibold">₹14,952 in wasted ad spend</strong>, collapsed 30-minute CRM quotation workflows down to <strong className="text-emerald-400 font-semibold">&lt; 48 seconds</strong>, and run business intelligence pipelines on a <strong className="text-cyan-300 font-semibold">₹0/mo cloud stack</strong>.
              </p>
            </FadeIn>

            {/* Modern Bento Quick Metrics */}
            <FadeIn>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                <div className="p-3.5 rounded-2xl bento-card">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xl sm:text-2xl font-extrabold text-rose-400 font-mono tracking-tight">₹14,952</span>
                    <Flame className="w-4 h-4 text-rose-400" />
                  </div>
                  <span className="text-xs text-slate-200 font-semibold block">Ad Waste Flagged</span>
                  <span className="text-[11px] text-slate-400">97% burn rate caught</span>
                </div>

                <div className="p-3.5 rounded-2xl bento-card">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xl sm:text-2xl font-extrabold text-cyan-400 font-mono tracking-tight">&lt; 1 min</span>
                    <Zap className="w-4 h-4 text-cyan-400" />
                  </div>
                  <span className="text-xs text-slate-200 font-semibold block">Quote Creation</span>
                  <span className="text-[11px] text-slate-400">30+ CRM fields synced</span>
                </div>

                <div className="p-3.5 rounded-2xl bento-card">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xl sm:text-2xl font-extrabold text-indigo-300 font-mono tracking-tight">285+</span>
                    <Activity className="w-4 h-4 text-indigo-400" />
                  </div>
                  <span className="text-xs text-slate-200 font-semibold block">Daily Queries</span>
                  <span className="text-[11px] text-slate-400">Audited at 6:00 AM</span>
                </div>

                <div className="p-3.5 rounded-2xl bento-card">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xl sm:text-2xl font-extrabold text-emerald-400 font-mono tracking-tight">₹0 / mo</span>
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  </div>
                  <span className="text-xs text-slate-200 font-semibold block">Operating Cost</span>
                  <span className="text-[11px] text-slate-400">Dual-key failover</span>
                </div>
              </div>
            </FadeIn>

            {/* Action Buttons */}
            <FadeIn>
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href="#command-center"
                  className="px-6 py-3 rounded-full bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold text-xs shadow-lg shadow-cyan-400/20 transition-all flex items-center gap-2 group cursor-pointer"
                >
                  <Terminal className="w-4 h-4 text-slate-950" />
                  <span>Launch Systems HUD</span>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-950 group-hover:translate-x-0.5 transition-transform" />
                </a>

                <a
                  href="/Srimanikandan_Resume_Professional.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 rounded-full border border-white/10 hover:border-white/20 bg-white/[0.03] text-slate-200 font-semibold text-xs transition flex items-center gap-2 shadow-sm"
                >
                  <Download className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Resume (PDF)</span>
                </a>

                <a
                  href="https://github.com/Srimani26"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full border border-white/10 hover:border-white/20 bg-white/[0.03] text-slate-400 hover:text-white transition shadow-sm"
                  title="GitHub Profile"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>

                <a
                  href="https://www.linkedin.com/in/srimanikandan-t-942693246/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full border border-white/10 hover:border-white/20 bg-white/[0.03] text-slate-400 hover:text-white transition shadow-sm"
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
              <div className="rounded-3xl border border-white/10 bg-[#070c18]/90 backdrop-blur-2xl p-6 shadow-2xl relative overflow-hidden bento-card">
                {/* Terminal Header */}
                <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-rose-500/80" />
                    <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                    <span className="ml-2 font-mono text-xs text-slate-300 font-semibold">
                      sri@ai-telemetry-hud:~
                    </span>
                  </div>
                  <span className="font-mono text-[10px] text-emerald-400 font-bold bg-emerald-950/50 px-2.5 py-0.5 rounded-full border border-emerald-500/30 flex items-center gap-1.5">
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
                  <div className="text-xs text-slate-400 flex items-center gap-1.5">
                    <Activity className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Select real-time probe to execute:</span>
                  </div>
                </div>

                {/* Interactive Probe Buttons */}
                <div className="grid grid-cols-3 gap-2 mb-4">
                  <button
                    onClick={() => handleRunProbe("ads")}
                    className={`py-2 px-2.5 rounded-xl text-xs font-semibold transition flex items-center justify-center gap-1.5 cursor-pointer ${
                      activeProbe === "ads"
                        ? "bg-cyan-400 text-slate-950 font-bold shadow-md shadow-cyan-400/20"
                        : "bg-white/[0.03] text-slate-400 hover:text-white border border-white/5"
                    }`}
                  >
                    <Flame className="w-3 h-3 text-rose-400" />
                    <span>Ads Probe</span>
                  </button>

                  <button
                    onClick={() => handleRunProbe("zoho")}
                    className={`py-2 px-2.5 rounded-xl text-xs font-semibold transition flex items-center justify-center gap-1.5 cursor-pointer ${
                      activeProbe === "zoho"
                        ? "bg-cyan-400 text-slate-950 font-bold shadow-md shadow-cyan-400/20"
                        : "bg-white/[0.03] text-slate-400 hover:text-white border border-white/5"
                    }`}
                  >
                    <Zap className="w-3 h-3 text-cyan-400" />
                    <span>Zoho 4-Layer</span>
                  </button>

                  <button
                    onClick={() => handleRunProbe("business")}
                    className={`py-2 px-2.5 rounded-xl text-xs font-semibold transition flex items-center justify-center gap-1.5 cursor-pointer ${
                      activeProbe === "business"
                        ? "bg-cyan-400 text-slate-950 font-bold shadow-md shadow-cyan-400/20"
                        : "bg-white/[0.03] text-slate-400 hover:text-white border border-white/5"
                    }`}
                  >
                    <ShieldCheck className="w-3 h-3 text-indigo-400" />
                    <span>Business OS</span>
                  </button>
                </div>

                {/* Terminal streaming display */}
                <div className="bg-[#02050c] rounded-2xl p-4 font-mono text-xs space-y-1.5 border border-white/5 min-h-[190px] shadow-inner">
                  <div className="text-[10px] text-slate-500 mb-2 flex items-center justify-between border-b border-white/5 pb-1">
                    <span>// RUNNING: {activeProbe.toUpperCase()}_ENGINE_STREAM</span>
                    <span className="text-cyan-400">{probeRunning ? "STREAMING..." : "COMPLETED (0.04s)"}</span>
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
                      <span className="text-cyan-500/70 mr-1.5">&gt;</span>
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
