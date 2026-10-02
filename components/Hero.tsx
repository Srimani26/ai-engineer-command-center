"use client";

import React, { useState } from "react";
import { ArrowRight, Download, Terminal, ShieldCheck, Zap, Activity, Flame, Sparkles, CheckCircle2, Phone, Mail, MapPin, Briefcase } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";
import FadeIn from "./FadeIn";

export default function Hero() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("srimanikandanece2000@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText("+916382121634");
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  return (
    <section className="relative min-h-[96vh] flex items-center pt-32 pb-20 bg-[#030014] text-white overflow-hidden">
      {/* Dynamic Cosmic Gradient Glow Spheres */}
      <div className="absolute top-10 left-1/4 -translate-x-1/2 w-[700px] h-[450px] bg-gradient-to-r from-violet-600/30 via-fuchsia-600/20 to-transparent blur-[160px] rounded-full pointer-events-none animate-aurora" />
      <div className="absolute top-20 right-10 w-[650px] h-[500px] bg-gradient-to-l from-cyan-500/25 via-teal-500/20 to-transparent blur-[160px] rounded-full pointer-events-none animate-aurora" />
      <div className="absolute bottom-10 left-1/3 w-[550px] h-[350px] bg-gradient-to-t from-pink-600/20 via-purple-600/15 to-transparent blur-[180px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 lg:px-8 w-full relative z-10">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          {/* Left 7 Cols: Headline, Gen Z Bio & Proven Impact */}
          <div className="lg:col-span-7 space-y-6">
            <FadeIn>
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-cyan-400/40 bg-gradient-to-r from-cyan-950/60 to-violet-950/60 text-cyan-300 text-xs font-bold backdrop-blur-xl shadow-lg shadow-cyan-950/50">
                <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping" />
                <span>TECH LEAD &bull; FIRST TECHNICAL HIRE @ STANDARD ROOFS</span>
              </div>
            </FadeIn>

            <FadeIn>
              <h1 className="text-4xl sm:text-6xl font-black tracking-[-0.03em] text-white leading-[1.06]">
                I Build Autonomous{" "}
                <span className="text-gradient-cosmic">
                  AI Pipelines &amp; Engines
                </span>{" "}
                That Print Real Revenue.
              </h1>
            </FadeIn>

            <FadeIn>
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
                No cap: I don't build toy wrapper demos. I ship production AI systems that eliminate human slog:
                flagged <strong className="text-rose-400 font-bold">₹14,952 in wasted ad spend</strong>, crushed 30-minute CRM quotes into <strong className="text-emerald-400 font-bold">&lt; 48 seconds</strong>, and run high-uptime pipelines on a <strong className="text-cyan-300 font-bold">₹0/mo cloud stack</strong>.
              </p>
            </FadeIn>

            {/* Quick Metrics Badges */}
            <FadeIn>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                <div className="p-3.5 rounded-2xl galaxy-card border border-rose-500/30">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-2xl font-black text-rose-400 font-mono">₹14.9K</span>
                    <Flame className="w-4 h-4 text-rose-400" />
                  </div>
                  <span className="text-[11px] text-white font-bold block">Ad Waste Saved</span>
                  <span className="text-[10px] text-slate-400 font-mono">97% burn caught</span>
                </div>

                <div className="p-3.5 rounded-2xl galaxy-card border border-cyan-500/30">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-2xl font-black text-cyan-400 font-mono">&lt; 48s</span>
                    <Zap className="w-4 h-4 text-cyan-400" />
                  </div>
                  <span className="text-[11px] text-white font-bold block">Zoho Quote Speed</span>
                  <span className="text-[10px] text-slate-400 font-mono">30+ fields synced</span>
                </div>

                <div className="p-3.5 rounded-2xl galaxy-card border border-violet-500/30">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-2xl font-black text-violet-300 font-mono">285+</span>
                    <Activity className="w-4 h-4 text-violet-400" />
                  </div>
                  <span className="text-[11px] text-white font-bold block">Daily Queries</span>
                  <span className="text-[10px] text-slate-400 font-mono">6 AM cron audit</span>
                </div>

                <div className="p-3.5 rounded-2xl galaxy-card border border-emerald-500/30">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-2xl font-black text-emerald-400 font-mono">₹0/mo</span>
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  </div>
                  <span className="text-[11px] text-white font-bold block">Infra Cost</span>
                  <span className="text-[10px] text-slate-400 font-mono">Dual-API failover</span>
                </div>
              </div>
            </FadeIn>

            {/* Action Buttons */}
            <FadeIn>
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href="#works"
                  className="px-6 py-3.5 rounded-full bg-gradient-to-r from-cyan-400 via-teal-400 to-indigo-500 hover:opacity-90 text-slate-950 font-black text-xs shadow-xl shadow-cyan-400/30 transition-all flex items-center gap-2 group cursor-pointer"
                >
                  <Zap className="w-4 h-4 text-slate-950" />
                  <span>Inspect Real Works</span>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-950 group-hover:translate-x-1 transition-transform" />
                </a>

                <a
                  href="/Srimanikandan_Resume_Professional.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3.5 rounded-full border border-violet-500/40 hover:border-violet-500/80 bg-violet-950/40 text-white font-bold text-xs transition flex items-center gap-2 shadow-lg shadow-violet-950/50"
                >
                  <Download className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Resume (PDF)</span>
                </a>

                <a
                  href="https://github.com/Srimani26"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-full border border-white/10 hover:border-cyan-500/50 bg-white/[0.04] text-slate-400 hover:text-white transition"
                  title="GitHub Profile"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>

                <a
                  href="https://www.linkedin.com/in/srimanikandan-t-942693246/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-full border border-white/10 hover:border-cyan-500/50 bg-white/[0.04] text-slate-400 hover:text-white transition"
                  title="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
              </div>
            </FadeIn>
          </div>

          {/* Right 5 Cols: HR & Recruiter "At-A-Glance" Instant Impression Card */}
          <div className="lg:col-span-5">
            <FadeIn>
              <div className="rounded-3xl galaxy-card p-6 border-2 border-violet-500/40 relative overflow-hidden shadow-2xl shadow-violet-950/80">
                {/* Glowing Header Banner */}
                <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-4">
                  <div className="flex items-center gap-2.5">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-cyan-400 via-violet-500 to-pink-500 flex items-center justify-center font-mono font-black text-slate-950 text-sm shadow-md shadow-cyan-500/30">
                      ST
                    </div>
                    <div>
                      <h3 className="font-extrabold text-sm text-white flex items-center gap-2">
                        Srimanikandan T
                        <span className="text-[10px] font-mono text-emerald-400 font-bold bg-emerald-950/80 px-2 py-0.5 rounded-full border border-emerald-500/40">
                          READY TO HIRE
                        </span>
                      </h3>
                      <p className="text-[11px] text-cyan-300 font-mono">
                        AI Automation Engineer &bull; Tech Lead
                      </p>
                    </div>
                  </div>
                </div>

                {/* Candidate Quick Facts for HR */}
                <div className="space-y-3 text-xs mb-5">
                  <div className="flex items-center justify-between p-2 rounded-xl bg-black/40 border border-white/5">
                    <span className="text-slate-400 flex items-center gap-1.5 font-medium">
                      <Briefcase className="w-3.5 h-3.5 text-cyan-400" /> Current Role:
                    </span>
                    <span className="text-white font-bold">Tech Lead (Standard Roofs)</span>
                  </div>

                  <div className="flex items-center justify-between p-2 rounded-xl bg-black/40 border border-white/5">
                    <span className="text-slate-400 flex items-center gap-1.5 font-medium">
                      <MapPin className="w-3.5 h-3.5 text-pink-400" /> Location / Mobility:
                    </span>
                    <span className="text-white font-bold">Erode, TN (Open to Remote / Relo)</span>
                  </div>

                  <div className="flex items-center justify-between p-2 rounded-xl bg-black/40 border border-white/5">
                    <span className="text-slate-400 flex items-center gap-1.5 font-medium">
                      <Zap className="w-3.5 h-3.5 text-amber-400" /> Primary Superpower:
                    </span>
                    <span className="text-cyan-300 font-bold">Autonomous Business Pipelines</span>
                  </div>
                </div>

                {/* Core Frameworks Chips */}
                <div className="space-y-1.5 mb-5">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block font-semibold">
                    Core Technical Stack:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {["Gemini AI", "Zoho Deluge", "FastAPI / Python", "Google Ads Script", "Next.js / React", "Neon Cloud DB"].map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-0.5 rounded-md bg-white/[0.06] text-[10px] font-mono text-cyan-200 border border-cyan-500/20"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* HR 1-Click Action Buttons */}
                <div className="space-y-2 pt-2 border-t border-white/10">
                  <a
                    href="/Srimanikandan_Resume_Professional.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 rounded-xl bg-gradient-to-r from-violet-600 via-indigo-600 to-cyan-500 hover:opacity-90 text-white font-black text-xs shadow-lg shadow-violet-600/30 transition flex items-center justify-center gap-2 cursor-pointer uppercase tracking-wider"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download Official Resume (PDF)</span>
                  </a>

                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={handleCopyEmail}
                      className="py-2 px-2 rounded-xl bg-black/50 border border-white/10 hover:border-cyan-400 text-xs font-mono text-slate-300 hover:text-white transition flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <Mail className="w-3 h-3 text-cyan-400" />
                      <span>{copiedEmail ? "Copied!" : "Copy Email"}</span>
                    </button>

                    <button
                      onClick={handleCopyPhone}
                      className="py-2 px-2 rounded-xl bg-black/50 border border-white/10 hover:border-pink-400 text-xs font-mono text-slate-300 hover:text-white transition flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <Phone className="w-3 h-3 text-pink-400" />
                      <span>{copiedPhone ? "Copied!" : "WhatsApp / Call"}</span>
                    </button>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
