"use client";

import React from "react";
import { TrendingUp, Clock, FileCheck, ShieldCheck, Flame, Zap } from "lucide-react";
import FadeIn from "./FadeIn";

export default function Metrics() {
  const metrics = [
    {
      value: "₹14,952",
      badge: "🔥 97% AD SPEND RESCUED",
      badgeColor: "rose",
      label: "Wasted Ad Spend Flagged",
      desc: "Caught 14 high-burn junk keywords in 8 days. Real cash saved before morning coffee.",
      icon: <TrendingUp className="w-5 h-5 text-rose-400" />,
    },
    {
      value: "< 1 min",
      badge: "⚡ 30x FASTER CREATION",
      badgeColor: "emerald",
      label: "Quotation Generation Time",
      desc: "Replaced 30-min manual calculation slog with 4-layer automated Deluge & Writer engine.",
      icon: <Clock className="w-5 h-5 text-emerald-400" />,
    },
    {
      value: "285+",
      badge: "🎯 100% AUTONOMOUS",
      badgeColor: "cyan",
      label: "Search Terms Audited Daily",
      desc: "Daily 6:00 AM data pull delivered as color-coded email by 7:00 AM IST. Zero manual effort.",
      icon: <FileCheck className="w-5 h-5 text-cyan-400" />,
    },
    {
      value: "₹0 / mo",
      badge: "💎 ZERO-COST CLOUD INFRA",
      badgeColor: "indigo",
      label: "Operating Infrastructure Cost",
      desc: "Dual Gemini API key failover with exponential backoff & static fallback. Pure efficiency.",
      icon: <ShieldCheck className="w-5 h-5 text-indigo-400" />,
    },
  ];

  return (
    <section className="bg-[#050816] text-white py-12 relative z-10 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((item) => (
            <FadeIn key={item.label}>
              <div className="h-full rounded-3xl border border-white/10 bg-[#091020]/90 hover:border-cyan-500/35 transition-all p-6 flex flex-col justify-between shadow-xl">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[#060a14] border border-white/5 flex items-center justify-center">
                      {item.icon}
                    </div>
                    <span
                      className={`text-[9px] font-mono font-bold px-2.5 py-0.5 rounded-full border ${
                        item.badgeColor === "rose"
                          ? "bg-rose-500/10 text-rose-400 border-rose-500/30"
                          : item.badgeColor === "emerald"
                          ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/30"
                          : item.badgeColor === "cyan"
                          ? "bg-cyan-500/10 text-cyan-400 border-cyan-500/30"
                          : "bg-indigo-500/10 text-indigo-400 border-indigo-500/30"
                      }`}
                    >
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                    {item.value}
                  </h3>
                  <p className="text-xs font-bold text-slate-200 mt-1 uppercase font-mono">
                    {item.label}
                  </p>
                </div>

                <p className="text-xs text-slate-400 leading-relaxed mt-4 pt-3 border-t border-white/5">
                  {item.desc}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
