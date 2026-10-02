"use client";

import React, { useState } from "react";
import { ArrowRight, Download, Terminal, ShieldCheck, Zap, Activity, Flame, Sparkles } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";
import FadeIn from "./FadeIn";

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] flex items-center pt-36 pb-20 bg-[#050713] text-white overflow-hidden spotlight-top">
      {/* Subtle Grid & Luminous Blobs */}
      <div className="absolute inset-0 bg-subtle-grid pointer-events-none opacity-40" />
      <div className="absolute top-1/3 left-1/4 -translate-x-1/2 w-[600px] h-[400px] bg-indigo-600/10 blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[350px] bg-cyan-500/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 lg:px-8 w-full relative z-10">
        <div className="space-y-8 text-center max-w-4xl mx-auto">
          {/* Status Badge */}
          <FadeIn>
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-white/[0.08] bg-white/[0.03] backdrop-blur-xl shadow-lg">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs font-medium text-slate-300">
                Tech Lead &bull; First Technical Hire @ <strong className="text-white font-semibold">Standard Roofs</strong>
              </span>
            </div>
          </FadeIn>

          {/* Headline */}
          <FadeIn>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-[-0.03em] text-white leading-[1.08]">
              Engineering autonomous{" "}
              <span className="bg-gradient-to-r from-white via-slate-200 to-indigo-300 bg-clip-text text-transparent">
                AI pipelines &amp; systems
              </span>{" "}
              that move real business revenue.
            </h1>
          </FadeIn>

          {/* Bio Subtitle */}
          <FadeIn>
            <p className="text-base sm:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed font-normal">
              I lead engineering for live production systems. Architected an AI auditor flagging{" "}
              <strong className="text-rose-400 font-semibold">₹14,952 in wasted ad spend</strong>, built a 4-layer Zoho CRM engine cutting quote generation to{" "}
              <strong className="text-emerald-400 font-semibold">&lt; 48 seconds</strong>, and run critical workflows on a{" "}
              <strong className="text-cyan-300 font-semibold">₹0/mo cloud stack</strong>.
            </p>
          </FadeIn>

          {/* Action CTAs */}
          <FadeIn>
            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <a
                href="#works"
                className="px-7 py-3.5 rounded-full bg-white hover:bg-slate-200 text-slate-950 font-bold text-xs shadow-xl shadow-white/10 transition-all flex items-center gap-2 group cursor-pointer"
              >
                <span>Inspect Production Works</span>
                <ArrowRight className="w-3.5 h-3.5 text-slate-950 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#systems-lab"
                className="px-6 py-3.5 rounded-full border border-white/10 hover:border-white/20 bg-white/[0.04] text-slate-200 hover:text-white font-medium text-xs transition flex items-center gap-2"
              >
                <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                <span>Live Systems Lab</span>
              </a>

              <a
                href="/Srimanikandan_Resume_Professional.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3.5 rounded-full border border-white/10 hover:border-white/20 bg-white/[0.02] text-slate-300 hover:text-white font-medium text-xs transition flex items-center gap-2"
              >
                <Download className="w-3.5 h-3.5 text-slate-400" />
                <span>Resume (PDF)</span>
              </a>

              <a
                href="https://github.com/Srimani26"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-full border border-white/10 hover:border-white/20 bg-white/[0.02] text-slate-400 hover:text-white transition"
                title="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>

              <a
                href="https://www.linkedin.com/in/srimanikandan-t-942693246/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-full border border-white/10 hover:border-white/20 bg-white/[0.02] text-slate-400 hover:text-white transition"
                title="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
            </div>
          </FadeIn>
        </div>

        {/* Bento Metrics Bar */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-16 max-w-5xl mx-auto">
          <FadeIn>
            <div className="p-5 rounded-3xl premium-card text-left">
              <span className="text-[11px] font-mono text-slate-400 block mb-1">WASTED AD SPEND</span>
              <span className="text-3xl font-extrabold text-rose-400 font-mono tracking-tight block">₹14,952</span>
              <span className="text-xs text-slate-400 mt-1 block">97% burn caught in 8 days</span>
            </div>
          </FadeIn>

          <FadeIn>
            <div className="p-5 rounded-3xl premium-card text-left">
              <span className="text-[11px] font-mono text-slate-400 block mb-1">QUOTE GENERATION</span>
              <span className="text-3xl font-extrabold text-emerald-400 font-mono tracking-tight block">&lt; 48s</span>
              <span className="text-xs text-slate-400 mt-1 block">Reduced from 30+ min slog</span>
            </div>
          </FadeIn>

          <FadeIn>
            <div className="p-5 rounded-3xl premium-card text-left">
              <span className="text-[11px] font-mono text-slate-400 block mb-1">DAILY QUERIES AUDITED</span>
              <span className="text-3xl font-extrabold text-cyan-400 font-mono tracking-tight block">285+</span>
              <span className="text-xs text-slate-400 mt-1 block">Autonomous daily 6 AM cron</span>
            </div>
          </FadeIn>

          <FadeIn>
            <div className="p-5 rounded-3xl premium-card text-left">
              <span className="text-[11px] font-mono text-slate-400 block mb-1">CLOUD OPERATING COST</span>
              <span className="text-3xl font-extrabold text-indigo-300 font-mono tracking-tight block">₹0 / mo</span>
              <span className="text-xs text-slate-400 mt-1 block">Dual Gemini API failover</span>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
