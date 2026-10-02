"use client";

import React, { useState } from "react";
import { Terminal, Activity, CheckCircle2, TrendingUp, Cpu, Play, FileText, ArrowRight, Sparkles, Zap, ShieldCheck, Flame, Sliders, Check } from "lucide-react";
import FadeIn from "./FadeIn";

export default function CommandCenter() {
  const [activeTab, setActiveTab] = useState<"ads" | "zoho" | "business-os">("ads");
  
  // Interactive Google Ads Query Simulator State
  const [selectedQuery, setSelectedQuery] = useState<number>(0);
  const sampleQueries = [
    {
      query: "best aluminium roofing sheet manufacturers erode",
      spend: "₹180",
      intent: "Commercial Purchase",
      verdict: "SCALE BID",
      verdictColor: "emerald",
      reason: "High commercial intent with local geo-modifier. Likely high-value industrial buyer.",
    },
    {
      query: "free pdf download roofing sheet design ideas youtube",
      spend: "₹420",
      intent: "Informational (Zero Commercial Value)",
      verdict: "STOP & NEGATIVE MATCH",
      verdictColor: "rose",
      reason: "Wasted consumer browsing traffic. Added to negative match list. Saved ₹420 immediately.",
    },
    {
      query: "used tin sheet scrap buyers near me",
      spend: "₹310",
      intent: "Scrap Seller (Irrelevant)",
      verdict: "STOP & NEGATIVE MATCH",
      verdictColor: "rose",
      reason: "Looking to sell scrap, not purchase new premium roofing sheets. Flagged and suppressed.",
    },
    {
      query: "heavy duty factory shed roofing contractor quote",
      spend: "₹240",
      intent: "Enterprise Lead / RFP",
      verdict: "SCALE BID",
      verdictColor: "emerald",
      reason: "Direct RFQ terminology matching Standard Roofs core high-ticket enterprise offering.",
    },
  ];

  // Interactive Zoho CRM Quote Simulator State
  const [sqft, setSqft] = useState<number>(8500);
  const estimatedPricing = Math.round(sqft * 142);
  const gst = Math.round(estimatedPricing * 0.18);
  const total = estimatedPricing + gst;

  return (
    <section id="command-center" className="relative py-24 bg-[#030712] text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <FadeIn>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 border-b border-white/10 pb-8">
            <div>
              <p className="text-cyan-400 uppercase tracking-[0.25em] text-xs font-mono font-bold flex items-center gap-2">
                <Zap className="w-3.5 h-3.5 text-cyan-400" />
                SYSTEMS TELEMETRY &amp; INTERACTIVE SANDBOX
              </p>
              <h2 className="mt-2 text-3xl sm:text-5xl font-black tracking-tight text-white">
                Live AI Command Center
              </h2>
              <p className="mt-3 max-w-3xl text-sm sm:text-base text-slate-300">
                Interactive control panel representing production automation platforms, AI auditors, and
                CRM engines actively serving live business operations. Click below to test live simulations.
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <span className="flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 shadow-sm shadow-emerald-500/20">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                3 ENGINES LIVE IN PRODUCTION
              </span>
            </div>
          </div>
        </FadeIn>

        {/* Tab Switcher */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8">
          <button
            onClick={() => setActiveTab("ads")}
            className={`px-5 py-3 rounded-2xl text-xs font-black transition whitespace-nowrap cursor-pointer flex items-center gap-2.5 ${
              activeTab === "ads"
                ? "bg-cyan-500 text-slate-950 shadow-lg shadow-cyan-500/25"
                : "bg-[#091020] text-slate-400 hover:text-white border border-white/5"
            }`}
          >
            <TrendingUp className="w-4 h-4" />
            <span>Google Ads AI Auditor (v5.0)</span>
          </button>

          <button
            onClick={() => setActiveTab("zoho")}
            className={`px-5 py-3 rounded-2xl text-xs font-black transition whitespace-nowrap cursor-pointer flex items-center gap-2.5 ${
              activeTab === "zoho"
                ? "bg-cyan-500 text-slate-950 shadow-lg shadow-cyan-500/25"
                : "bg-[#091020] text-slate-400 hover:text-white border border-white/5"
            }`}
          >
            <FileText className="w-4 h-4" />
            <span>Zoho 4-Layer Quotation Engine</span>
          </button>

          <button
            onClick={() => setActiveTab("business-os")}
            className={`px-5 py-3 rounded-2xl text-xs font-black transition whitespace-nowrap cursor-pointer flex items-center gap-2.5 ${
              activeTab === "business-os"
                ? "bg-cyan-500 text-slate-950 shadow-lg shadow-cyan-500/25"
                : "bg-[#091020] text-slate-400 hover:text-white border border-white/5"
            }`}
          >
            <Cpu className="w-4 h-4" />
            <span>Sri AI Business OS</span>
          </button>
        </div>

        {/* Dynamic Interactive Card */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Left 7 Cols: Architecture Breakdown & Stats */}
          <div className="lg:col-span-7 rounded-3xl border border-cyan-500/25 bg-[#091020]/90 backdrop-blur-xl p-6 sm:p-8 space-y-6">
            {activeTab === "ads" && (
              <div className="space-y-6">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white flex items-center gap-2">
                      <span className="text-cyan-400 font-mono text-sm">#01</span>
                      Google Ads Intelligence Pipeline
                    </h3>
                    <p className="text-xs text-slate-400 mt-1">
                      Automated daily search query extraction, Gemini reasoning, and waste mitigation.
                    </p>
                  </div>
                  <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                    LIVE &bull; 6:00 AM CRON
                  </span>
                </div>

                {/* Metrics Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  <div className="p-3.5 rounded-2xl bg-[#060a14] border border-white/5">
                    <span className="text-[10px] font-mono text-slate-400 block font-semibold">WASTE DETECTED</span>
                    <span className="text-xl font-black text-rose-400">₹14,952</span>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-[#060a14] border border-white/5">
                    <span className="text-[10px] font-mono text-slate-400 block font-semibold">QUERIES TRACKED</span>
                    <span className="text-xl font-black text-cyan-400">285+</span>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-[#060a14] border border-white/5">
                    <span className="text-[10px] font-mono text-slate-400 block font-semibold">REPORT DELIVERY</span>
                    <span className="text-xl font-black text-indigo-300">07:00 AM</span>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-[#060a14] border border-white/5">
                    <span className="text-[10px] font-mono text-slate-400 block font-semibold">RUN COST</span>
                    <span className="text-xl font-black text-emerald-400">₹0 / mo</span>
                  </div>
                </div>

                {/* Interactive Simulator: Click to inspect Gemini classification */}
                <div className="space-y-3 pt-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold uppercase text-cyan-400 flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5" />
                      Live AI Keyword Classifier (Click to Test):
                    </span>
                    <span className="text-[10px] font-mono text-slate-500">Gemini Flash Reasoning</span>
                  </div>

                  <div className="space-y-2">
                    {sampleQueries.map((q, idx) => (
                      <div
                        key={idx}
                        onClick={() => setSelectedQuery(idx)}
                        className={`p-3.5 rounded-2xl border transition-all cursor-pointer ${
                          selectedQuery === idx
                            ? "bg-[#0b1426] border-cyan-400 shadow-md shadow-cyan-500/20"
                            : "bg-[#060a14] border-white/5 hover:border-white/20"
                        }`}
                      >
                        <div className="flex items-center justify-between gap-2">
                          <span className="text-xs font-bold text-white font-mono">
                            "{q.query}"
                          </span>
                          <span
                            className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-full border ${
                              q.verdictColor === "rose"
                                ? "bg-rose-500/20 text-rose-400 border-rose-500/30"
                                : "bg-emerald-500/20 text-emerald-400 border-emerald-500/30"
                            }`}
                          >
                            {q.verdict}
                          </span>
                        </div>
                        {selectedQuery === idx && (
                          <div className="mt-2.5 pt-2 border-t border-white/10 text-xs text-slate-300 space-y-1">
                            <p className="text-[11px] text-slate-400 font-mono">
                              <strong>Intent Classification:</strong> {q.intent} &bull; <strong>Spend:</strong> {q.spend}
                            </p>
                            <p className="text-cyan-300">
                              <strong>AI Reasoning:</strong> {q.reason}
                            </p>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === "zoho" && (
              <div className="space-y-6">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white flex items-center gap-2">
                      <span className="text-cyan-400 font-mono text-sm">#02</span>
                      Zoho CRM 4-Layer Quotation System
                    </h3>
                    <p className="text-xs text-slate-400 mt-1">
                      Mission-critical sales engine deployed for Standard Roofs eliminating manual quote errors.
                    </p>
                  </div>
                  <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                    95% DEPLOYED &bull; LIVE
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  <div className="p-3.5 rounded-2xl bg-[#060a14] border border-white/5">
                    <span className="text-[10px] font-mono text-slate-400 block font-semibold">CREATION TIME</span>
                    <span className="text-xl font-black text-emerald-400">&lt; 1 min</span>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-[#060a14] border border-white/5">
                    <span className="text-[10px] font-mono text-slate-400 block font-semibold">CRM FIELDS</span>
                    <span className="text-xl font-black text-cyan-400">30+</span>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-[#060a14] border border-white/5">
                    <span className="text-[10px] font-mono text-slate-400 block font-semibold">WORKFLOW RULES</span>
                    <span className="text-xl font-black text-indigo-300">14+</span>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-[#060a14] border border-white/5">
                    <span className="text-[10px] font-mono text-slate-400 block font-semibold">MANUAL ERRORS</span>
                    <span className="text-xl font-black text-emerald-400">0%</span>
                  </div>
                </div>

                {/* 4 Layer Technical Architecture */}
                <div className="space-y-2">
                  <span className="text-xs font-mono font-bold uppercase text-slate-400">
                    4-Layer Technical Architecture
                  </span>
                  <div className="space-y-2 text-xs">
                    <div className="p-3 rounded-xl bg-[#060a14] border border-white/5">
                      <span className="font-mono text-cyan-400 font-bold block mb-1">Layer 1: Workflow Rules Engine</span>
                      <p className="text-slate-300">Automates serial numbers, status gates, and mandatory roofing parameter validations.</p>
                    </div>
                    <div className="p-3 rounded-xl bg-[#060a14] border border-white/5">
                      <span className="font-mono text-cyan-400 font-bold block mb-1">Layer 2: Deluge Business Logic</span>
                      <p className="text-slate-300">Calculates square footage formulas, tax slabs, pricing matrices, and vendor discounts.</p>
                    </div>
                    <div className="p-3 rounded-xl bg-[#060a14] border border-white/5">
                      <span className="font-mono text-cyan-400 font-bold block mb-1">Layer 3: Client Script (JavaScript)</span>
                      <p className="text-slate-300">Instant UI feedback, real-time roofing color-to-image preview, and Cloudinary asset sync.</p>
                    </div>
                    <div className="p-3 rounded-xl bg-[#060a14] border border-white/5">
                      <span className="font-mono text-cyan-400 font-bold block mb-1">Layer 4: Zoho Writer API Engine</span>
                      <p className="text-slate-300">Compiles custom branded PDF documents and auto-attaches them directly to client records.</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "business-os" && (
              <div className="space-y-6">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white flex items-center gap-2">
                      <span className="text-cyan-400 font-mono text-sm">#03</span>
                      Sri AI Business OS
                    </h3>
                    <p className="text-xs text-slate-400 mt-1">
                      Multi-tenant enterprise operating system running FastAPI, Neon PostgreSQL &amp; Gemini AI.
                    </p>
                  </div>
                  <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                    PRODUCTION READY
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  <div className="p-3.5 rounded-2xl bg-[#060a14] border border-white/5">
                    <span className="text-[10px] font-mono text-slate-400 block font-semibold">ARCHITECTURE</span>
                    <span className="text-xl font-black text-cyan-400">4-Tier</span>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-[#060a14] border border-white/5">
                    <span className="text-[10px] font-mono text-slate-400 block font-semibold">SECURITY</span>
                    <span className="text-xl font-black text-indigo-400">HMAC-SHA256</span>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-[#060a14] border border-white/5">
                    <span className="text-[10px] font-mono text-slate-400 block font-semibold">DATABASE</span>
                    <span className="text-xl font-black text-emerald-400">Neon Cloud</span>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-[#060a14] border border-white/5">
                    <span className="text-[10px] font-mono text-slate-400 block font-semibold">AI INTAKE</span>
                    <span className="text-xl font-black text-cyan-300">Gemini Flash</span>
                  </div>
                </div>

                <div className="space-y-2 text-xs">
                  <span className="text-xs font-mono font-bold uppercase text-slate-400">
                    Enterprise Capabilities
                  </span>
                  <div className="p-3 rounded-xl bg-[#060a14] border border-white/5 space-y-2">
                    <div className="flex items-center gap-2 text-slate-200">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>Multi-tenant hierarchy: Organizations &rarr; Workspaces &rarr; Projects &rarr; Tasks</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-200">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>Human-in-the-loop governance: AI-parsed tasks gated by approval queue</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-200">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>Developer API portal with secret token management and cryptographic webhooks</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-200">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>Real-time audit log stream tracking all status transitions and actors</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Right 5 Cols: Live Interactive Sandbox & Simulator */}
          <div className="lg:col-span-5 rounded-3xl border border-cyan-500/30 bg-[#060914] p-6 space-y-4 shadow-2xl">
            {activeTab === "zoho" ? (
              /* Zoho Interactive Calculator */
              <div className="space-y-4">
                <div className="border-b border-white/10 pb-3 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Sliders className="w-4 h-4 text-cyan-400" />
                    <span className="font-mono text-xs font-bold text-white">
                      Deluge Quote Calculator (Live)
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-emerald-400 font-bold bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/30">
                    Formula Active
                  </span>
                </div>

                <div className="space-y-3">
                  <label className="text-xs font-mono text-slate-400 block">
                    Adjust Roof Area: <strong className="text-cyan-400">{sqft.toLocaleString()} sq.ft.</strong>
                  </label>
                  <input
                    type="range"
                    min="1000"
                    max="30000"
                    step="500"
                    value={sqft}
                    onChange={(e) => setSqft(Number(e.target.value))}
                    className="w-full accent-cyan-400 cursor-pointer"
                  />

                  {/* Calculated breakdown */}
                  <div className="p-4 rounded-2xl bg-[#03050a] border border-white/5 space-y-2 text-xs font-mono">
                    <div className="flex justify-between text-slate-400">
                      <span>Base Material Cost:</span>
                      <span className="text-white font-bold">₹{estimatedPricing.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-slate-400">
                      <span>GST (18% Slab):</span>
                      <span className="text-white font-bold">₹{gst.toLocaleString()}</span>
                    </div>
                    <div className="border-t border-white/10 pt-2 flex justify-between text-sm font-bold">
                      <span className="text-cyan-300">Total Quote:</span>
                      <span className="text-emerald-400 text-base">₹{total.toLocaleString()}</span>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-cyan-950/30 border border-cyan-500/20 text-[11px] text-cyan-300 leading-relaxed font-mono">
                    ✓ Deluge layer automatically executes tax rounding, vendor discounts, and feeds Zoho Writer API in &lt; 48s.
                  </div>
                </div>
              </div>
            ) : (
              /* Terminal execution log */
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <div className="flex items-center gap-2">
                    <Terminal className="w-4 h-4 text-cyan-400" />
                    <span className="font-mono text-xs font-bold text-white">
                      live_execution_stream.log
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-emerald-400 font-bold bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/30">
                    PROD STREAM
                  </span>
                </div>

                {/* Terminal logs window */}
                <div className="bg-[#03050a] rounded-2xl p-4 font-mono text-xs space-y-2 border border-white/5 min-h-[280px] max-h-[340px] overflow-y-auto">
                  <div className="text-slate-600 text-[11px]">
                    // Connected to Sri AI Runtime &bull; Environment: Production
                  </div>
                  <div className="text-slate-300 leading-relaxed">
                    <span className="text-cyan-500/60 mr-1.5">&gt;</span> [06:00:02 IST] Cron trigger initiated by Google Apps Script runtime
                  </div>
                  <div className="text-slate-300 leading-relaxed">
                    <span className="text-cyan-500/60 mr-1.5">&gt;</span> [06:00:08 IST] Extracted 285+ keyword and search-term performance metrics
                  </div>
                  <div className="text-slate-300 leading-relaxed">
                    <span className="text-cyan-500/60 mr-1.5">&gt;</span> [06:00:15 IST] Primary Gemini API key engaged (Zero-cost quota tier)
                  </div>
                  <div className="text-rose-400 font-bold leading-relaxed">
                    <span className="text-cyan-500/60 mr-1.5">&gt;</span> [06:00:22 IST] Flagged ₹14,952 in negative match candidates (97% waste rate)
                  </div>
                  <div className="text-emerald-400 font-bold leading-relaxed">
                    <span className="text-cyan-500/60 mr-1.5">&gt;</span> [07:00:00 IST] Dispatched color-coded STOP/SCALE/FIX HTML audit report via Gmail API
                  </div>
                </div>

                {/* Quick Action Link to Code / Demo */}
                <div className="pt-2">
                  <a
                    href="https://github.com/Srimani26"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 rounded-xl border border-cyan-500/30 bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 font-mono text-xs font-bold transition flex items-center justify-center gap-2"
                  >
                    <span>View System Source Code on GitHub</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
