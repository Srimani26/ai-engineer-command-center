"use client";

import React, { useState } from "react";
import { Terminal, Activity, TrendingUp, Cpu, FileText, ArrowRight, Sparkles, Sliders, CheckCircle2 } from "lucide-react";
import FadeIn from "./FadeIn";

export default function LiveExecutionLab() {
  const [activeTab, setActiveTab] = useState<"ads" | "zoho">("ads");
  
  // Interactive Google Ads Query Simulator State
  const [selectedQuery, setSelectedQuery] = useState<number>(0);
  const sampleQueries = [
    {
      query: "best aluminium roofing sheet manufacturers erode",
      spend: "₹180",
      intent: "Commercial Purchase Lead",
      verdict: "SCALE BID",
      verdictColor: "emerald",
      reason: "High commercial intent with localized geo-modifier. Matches Standard Roofs core high-ticket buyer profile.",
    },
    {
      query: "free pdf download roofing sheet design ideas youtube",
      spend: "₹420",
      intent: "Informational (Zero Commercial Intent)",
      verdict: "STOP & NEGATIVE MATCH",
      verdictColor: "rose",
      reason: "Wasted consumer browsing traffic. Added to negative match list. Saved ₹420 immediately.",
    },
    {
      query: "used tin sheet scrap buyers near me",
      spend: "₹310",
      intent: "Scrap Seller (Irrelevant Intent)",
      verdict: "STOP & NEGATIVE MATCH",
      verdictColor: "rose",
      reason: "User looking to sell scrap metal, not buy premium roofing sheets. Flagged and eliminated.",
    },
    {
      query: "heavy duty factory shed roofing contractor quote",
      spend: "₹240",
      intent: "Enterprise RFQ Lead",
      verdict: "SCALE BID",
      verdictColor: "emerald",
      reason: "Direct RFQ terminology matching Standard Roofs high-margin industrial project offerings.",
    },
  ];

  // Interactive Zoho CRM Quote Simulator State
  const [sqft, setSqft] = useState<number>(8500);
  const estimatedPricing = Math.round(sqft * 142);
  const gst = Math.round(estimatedPricing * 0.18);
  const total = estimatedPricing + gst;

  return (
    <section id="systems-lab" className="py-28 bg-[#050713] text-white relative border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <FadeIn>
          <div className="mb-14 border-b border-white/10 pb-8 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <div>
              <p className="text-xs font-mono font-bold uppercase tracking-widest text-cyan-400">
                INTERACTIVE SYSTEMS SANDBOX
              </p>
              <h2 className="mt-2 text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
                Live Execution Lab
              </h2>
              <p className="mt-3 text-sm sm:text-base text-slate-400 max-w-2xl font-normal">
                Test the actual algorithms and business logic powering Srimanikandan's production deployments.
              </p>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setActiveTab("ads")}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition cursor-pointer ${
                  activeTab === "ads"
                    ? "bg-white text-slate-950 font-bold"
                    : "bg-white/[0.04] text-slate-400 hover:text-white"
                }`}
              >
                Ads AI Classifier
              </button>
              <button
                onClick={() => setActiveTab("zoho")}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition cursor-pointer ${
                  activeTab === "zoho"
                    ? "bg-white text-slate-950 font-bold"
                    : "bg-white/[0.04] text-slate-400 hover:text-white"
                }`}
              >
                Deluge Quotation Engine
              </button>
            </div>
          </div>
        </FadeIn>

        {/* Interactive Lab Display */}
        <FadeIn>
          <div className="rounded-3xl premium-card p-6 sm:p-10">
            {activeTab === "ads" ? (
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-white tracking-tight">
                    Google Ads AI Keyword Intent Classifier
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 mt-1 font-normal">
                    Click any real search query below to view how Gemini AI evaluates commercial intent and eliminates ad waste.
                  </p>
                </div>

                {/* Query Cards */}
                <div className="grid md:grid-cols-2 gap-3">
                  {sampleQueries.map((q, idx) => (
                    <div
                      key={idx}
                      onClick={() => setSelectedQuery(idx)}
                      className={`p-4 rounded-2xl border transition-all cursor-pointer ${
                        selectedQuery === idx
                          ? "bg-white/[0.06] border-cyan-400 shadow-md shadow-cyan-500/10"
                          : "bg-black/30 border-white/5 hover:border-white/10"
                      }`}
                    >
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-xs font-bold text-white font-mono">
                          "{q.query}"
                        </span>
                        <span
                          className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full border font-mono ${
                            q.verdictColor === "rose"
                              ? "bg-rose-500/10 text-rose-400 border-rose-500/30"
                              : "bg-emerald-500/10 text-emerald-400 border-emerald-500/30"
                          }`}
                        >
                          {q.verdict}
                        </span>
                      </div>
                      <div className="mt-2 text-xs text-slate-400 font-mono">
                        Spend: <strong className="text-white">{q.spend}</strong> &bull; Intent: {q.intent}
                      </div>
                    </div>
                  ))}
                </div>

                {/* AI Reasoning Output Box */}
                <div className="p-5 rounded-2xl bg-black/50 border border-white/10 space-y-2">
                  <div className="flex items-center justify-between text-xs font-mono text-cyan-400">
                    <span className="flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5" />
                      Gemini Flash Reasoning Breakdown:
                    </span>
                    <span className="text-slate-500">Latency: 0.04s &bull; Cost: ₹0.00</span>
                  </div>
                  <p className="text-sm text-slate-200 leading-relaxed font-normal">
                    {sampleQueries[selectedQuery].reason}
                  </p>
                </div>
              </div>
            ) : (
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-white tracking-tight">
                    Deluge 4-Layer Dynamic Roofing Calculation Engine
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 mt-1 font-normal">
                    Adjust the square footage slider below to inspect the dynamic Deluge formulas computing material pricing, tax slabs, and Zoho Writer PDF output.
                  </p>
                </div>

                <div className="space-y-4 max-w-xl">
                  <div className="flex justify-between items-center text-xs font-mono">
                    <span className="text-slate-400">Roof Area Specification:</span>
                    <span className="text-cyan-400 font-bold text-sm">{sqft.toLocaleString()} sq.ft.</span>
                  </div>

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
                  <div className="p-4 rounded-2xl bg-black/50 border border-white/10 space-y-2 text-xs font-mono">
                    <div className="flex justify-between text-slate-400">
                      <span>Base Material Formulation:</span>
                      <span className="text-white font-bold">₹{estimatedPricing.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-slate-400">
                      <span>Applicable GST (18% Slab):</span>
                      <span className="text-white font-bold">₹{gst.toLocaleString()}</span>
                    </div>
                    <div className="border-t border-white/10 pt-2 flex justify-between text-sm font-bold">
                      <span className="text-cyan-300">Total Client Proposal:</span>
                      <span className="text-emerald-400 text-base">₹{total.toLocaleString()}</span>
                    </div>
                  </div>

                  <p className="text-xs text-slate-400 leading-relaxed font-normal">
                    ✓ Formulas execute in Zoho CRM Deluge backend, syncing with Cloudinary product color assets and auto-attaching a branded PDF via Zoho Writer API in &lt; 48s.
                  </p>
                </div>
              </div>
            )}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
