"use client";

import React from "react";
import { TrendingUp, Clock, FileCheck, ShieldCheck, Flame, Zap } from "lucide-react";
import FadeIn from "./FadeIn";

export default function Metrics() {
  const metrics = [
    {
      value: "₹14,952",
      badge: "🔥 97% AD SPEND RESCUED",
      topGradient: "from-rose-500 to-amber-500",
      valueGradient: "from-rose-400 via-pink-400 to-amber-300",
      label: "Wasted Ad Spend Flagged",
      desc: "Caught 14 high-burn junk keywords in 8 days. Real cash saved before morning coffee.",
      icon: <TrendingUp className="w-5 h-5 text-rose-400" />,
    },
    {
      value: "< 1 min",
      badge: "⚡ 30x FASTER CREATION",
      topGradient: "from-cyan-400 to-teal-400",
      valueGradient: "from-cyan-300 via-teal-200 to-emerald-300",
      label: "Quotation Generation Time",
      desc: "Replaced 30-min manual calculation slog with 4-layer automated Deluge & Writer engine.",
      icon: <Clock className="w-5 h-5 text-cyan-400" />,
    },
    {
      value: "285+",
      badge: "🎯 100% AUTONOMOUS",
      topGradient: "from-violet-500 to-indigo-500",
      valueGradient: "from-violet-300 via-indigo-300 to-cyan-300",
      label: "Search Terms Audited Daily",
      desc: "Daily 6:00 AM data pull delivered as color-coded email by 7:00 AM IST. Zero manual effort.",
      icon: <FileCheck className="w-5 h-5 text-indigo-400" />,
    },
    {
      value: "₹0 / mo",
      badge: "💎 ZERO-COST CLOUD INFRA",
      topGradient: "from-emerald-400 to-teal-500",
      valueGradient: "from-emerald-300 via-teal-200 to-cyan-300",
      label: "Operating Infrastructure Cost",
      desc: "Dual Gemini API key failover with exponential backoff & static fallback. Pure efficiency.",
      icon: <ShieldCheck className="w-5 h-5 text-emerald-400" />,
    },
  ];

  return (
    <section className="bg-[#08091a] text-white py-14 relative z-10 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((item) => (
            <FadeIn key={item.label}>
              <div className="h-full rounded-3xl vibrant-card p-6 flex flex-col justify-between relative overflow-hidden group">
                <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${item.topGradient}`} />

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-2xl bg-white/[0.06] border border-white/10 flex items-center justify-center shadow-md">
                      {item.icon}
                    </div>
                    <span className="text-[10px] font-black px-2.5 py-0.5 rounded-full bg-white/[0.08] text-white border border-white/10 font-mono">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className={`text-3xl sm:text-4xl font-black tracking-tight font-mono bg-gradient-to-r ${item.valueGradient} bg-clip-text text-transparent`}>
                    {item.value}
                  </h3>
                  <p className="text-xs font-bold text-white mt-1 uppercase tracking-wider">
                    {item.label}
                  </p>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed mt-4 pt-3 border-t border-white/10">
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
